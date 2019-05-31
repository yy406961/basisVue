import mapHelper from './mapHelper';
import { Message } from 'element-ui';
import $log from '@/common/log';

/**
 * mapClass gis地图基础类
 * [options description]
 * @type {[type]}
 */
export default class MapClass {
    constructor(options) {
        let { el, center, zoom, maxZoom, mapConfig, isDraw } = options;
        this.options = options;
        this.el = el;
        this.mapCenter = center;
        this.mapZoom = zoom;
        this.maxZoom = maxZoom;
        // 是否开启绘制模式
        this.isDraw = isDraw;
        this.overlays = [];
        // 箭头相关
        this.arrowLays = []
        this.ploylineDatas = [];
        this.mapConfig = Object.assign({}, { minZoom: 3, maxZoom: this.maxZoom }, mapConfig);
        this.create();
        this.initEvent()
    }

    create() {
        this.map = mapHelper.creatMap(this.el, this.mapConfig);
        this.map.clearOverlays();
        const poi = mapHelper.createPoint(this.mapCenter[0], this.mapCenter[1]);
        this.map.centerAndZoom(poi, this.mapZoom);
        this.map.enableScrollWheelZoom();
        this.drawing();
    }

    initEvent(){
        // 层级变化，改变箭头
        this.map.addEventListener('zoomend', () => {
            this.arrowDraw()
        })
    }


    drawing() {
        if (this.isDraw) {
            this.currentOverlay = null;
            this.drawingManager = mapHelper.createDrawingManager(this.map);
            this.drawingManager.addEventListener(
                'overlaycomplete',
                this.overlayComplete.bind(this)
            );
        }
    }

    // 判断是否为绘制状态 如果“是”的话 阻止操作
    isDrawingState(){
        if(this.drawingManager) return this.drawingManager._isOpen
    }

    // 监听层级 - 箭头改变
    arrowDraw() {
        if (this.arrowLays && this.ploylineDatas) {
            this._clearPolylines();
            this._drawArrowByPolylines();
        }
    }

    // 内部clear 针对箭头处理的方法
    _clearPolylines(){
        this.arrowLays.forEach(item => {
            if (item && item.length) {
                item.forEach(items => {
                    this.map.removeOverlay(items)
                })
            }
        })
        this.arrowLays = []
    }
    // 内部画箭头 传一个ployline对象
    _drawArrow(polyline){
        let arrowLen = 10
        let zoom = this.map.getZoom()
        if(zoom >= 15){
            arrowLen = 6
        }
        return mapHelper.addArrow(polyline, arrowLen, Math.PI/7, this.map)
    }

    // 内部画线,根据polyline数组 画箭头的方法
    _drawArrowByPolylines(){
        // 创建箭头
        this.arrowLays = this.ploylineDatas.map(item => {
            return this._drawArrow(item)
        })
    }


    // 打开编辑模式
    closeEditorMode() {
        this.drawingManager.open();
        if (this.currentOverlay) this.currentOverlay.disableEditing();
    }

    // 关闭编辑模式
    openEditorMode() {
        this.drawingManager.close();
        if (this.currentOverlay) this.currentOverlay.enableEditing();
    }

    overlayComplete(e) {
        if (this.overlays.length === 1) {
            Message('每次只能框选一个区域,请重新框选');
            this.openEditorMode();
            this.map.removeOverlay(e.overlay);
            return;
        }
        this.drawingMode = e.drawingMode;
        this.overlays.push(e.overlay);

        // 设置当前可编辑
        this.currentOverlay = e.overlay;
        this.openEditorMode();

        let overlayData = this.getCurOverlayData();
        this.options.overlayComplete(overlayData);
    }

    // 画区域
    drawOverlay(arr) {
        let centerData = arr[0];
        let { lng, lat } = centerData;
        let centerPoint = mapHelper.createPoint(lng, lat);
        this.map.panTo(centerPoint);
        this.map.enableScrollWheelZoom();
        if (arr.length === 1) {
            this.currentOverlay = mapHelper.drawCircle(centerData);
            this.drawingMode = 'circle';
        } else {
            this.currentOverlay = mapHelper.drawPolygon(arr);
        }

        this.map.addOverlay(this.currentOverlay);
        this.overlays.push(this.currentOverlay);

        this.currentOverlay.enableEditing();
    }

    /**
   * [获取当前编辑图层的数据 description]
   * @return {[type]} [description]
   */
    getCurOverlayData() {
        let dataObj = Object.create(null);
        // 圆
        if (this.drawingMode === 'circle') {
            const radius = this.currentOverlay.getRadius();
            const { lng, lat } = this.currentOverlay.getCenter();
            const area = Math.PI * radius * radius / 1000000;
            dataObj = {
                radius,
                area,
                center: [lng, lat]
            };
        } else {
            // 非圆
            const path = this.currentOverlay.getPath();
            const latstr = path
                .map(it => {
                    return `{lng :${it.lng}, lat:${it.lat} }`;
                })
                .join(',');
            $log.capsule('drawPathCode', latstr, 'danger');
            const area = mapHelper.getPolygonArea(path);
            dataObj = {
                path,
                area
            };
        }
        dataObj.mode = this.drawingMode;
        return dataObj;
    }

    /**
   * [clearAllOverlay 清理所有覆盖物]
   * @return {[type]} [description]
   */
    clearAllOverlay() {

        if(this.isDrawingState())return ;

        if(this.overlays.length){
            for (var i = 0; i < this.overlays.length; i++) {
                this.map.removeOverlay(this.overlays[i]);
            }
            this.overlays.length = 0;
            // this.closeEditorMode()
            this.currentOverlay = null;
            // this.map.clearOverlays();
        }
        // 清除覆盖物时，清除保存轨迹的数据
        this.ploylineDatas = [];
        this.map.clearOverlays()
    }

    // 创建标记
    createMarker(opt) {
        const marker = mapHelper.createMarker(opt);
        // 绑定事件
        marker.addEventListener('click', e => {
            this.clickHandler(e, opt.dataObj);
        });
        this.map.addOverlay(marker);
    }

    clickHandler(e, dataObj) {
        this.options.onClick(e, dataObj);
    }

    // 打开panel
    openInfoPanel(content, e) {
        let point = mapHelper.createPoint(e.point.lng, e.point.lat);
        let infoWindow = mapHelper.createInfoWindow(content);
        this.map.openInfoWindow(infoWindow, point); // 开启信息窗口
    }

    destory() {
        this.map = null;
        this.GPSHeatOverlay = null;
    }

    // 添加一组标记
    addMarkers(marks) {
        if (marks && marks.length) {
            marks.forEach(mark => {
                this.createMarker(mark);
            });
        }
    }

    /**
     * 根据点适配 地图层级
     * 只有一个点时，默认显示地图最大层级，设置为系统地图层级
     * @param  {Array} marks 一组坐标
     * @return {[type]}   [description]
     */
    markerZoomAdapter(marks){
        let view = this.map.getViewport(marks);
        if (marks.length === 1) {
            this.map.centerAndZoom(view.center, this.mapZoom);
        } else {
            this.map.centerAndZoom(view.center, view.zoom);
        }
    }


    drawPolygon(arr) {
        const Polygon = mapHelper.drawPolygon(arr);
        this.map.addOverlay(Polygon);
    }

    drawCircle(config) {
        const circle = mapHelper.drawCircle(config);
        this.map.addOverlay(circle);
    }

    drawPolyline(arr) {
        const polyline = mapHelper.drawPolyline(arr);
        this.map.addOverlay(polyline);
        // 保存传入的箭头数据
        this.ploylineDatas.push(polyline)
        this.arrowLays.push(this._drawArrow(polyline))
    }

    // 渲染热地图
    drawHeatMap(obj) {
        let { data, heatMax } = obj;
        this.GPSHeatOverlay = mapHelper.createHeatmapOverlay(this.map);
        this.map.addOverlay(this.GPSHeatOverlay);
        try {
            this.GPSHeatOverlay.setDataSet({
                data: data,
                max: heatMax ? heatMax * 0.8 : 100
            });
            this.GPSHeatOverlay.show();
        } catch (error) {
            $log.danger('热力图组件未检测到符合标准的热力数据，请检查数据是否正常');
        }
    }
}
