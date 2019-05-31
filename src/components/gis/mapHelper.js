import BMap from 'BMap';
import BMapLib from 'BMapLib';
let helper = {};

const areaConfig = {
    strokeColor: 'red',
    strokeWeight: 1,
    strokeOpacity: 0.8,
    fillColor: '#da416f',
    fillOpacity: 0.2
};
// win样式配置
const winConfig = {
    width: 250, // 信息窗口宽度
    height: 0, // 信息窗口高度
    enableMessage: true // 设置允许信息窗发送短息
};

// line 样式配置
const lineConfig = {
    strokeColor: '#da416f', // 边线颜色。
    fillColor: '#da416f', // 填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 2, // 边线的宽度，以像素为单位。
    strokeOpacity: 0.8, // 边线透明度，取值范围0 - 1。
    fillOpacity: 0.8, // 填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' // 边线的样式，solid或dashed。
};

// 画图工具 样式配置
const drawOptions = {
    strokeColor: '#da416f', // 边线颜色。
    fillColor: '#da416f', // 填充颜色。当参数为空时，圆形将没有填充效果。
    strokeWeight: 1, // 边线的宽度，以像素为单位。
    strokeOpacity: 0.8, // 边线透明度，取值范围0 - 1。
    fillOpacity: 0.4, // 填充的透明度，取值范围0 - 1。
    strokeStyle: 'solid' // 边线的样式，solid或dashed。
};

/**
 * //绘制箭头的函数
 * @param {[type]} polyline   [description]
 * @param {[type]} length     [description]
 * @param {[type]} angleValue [description]
 * @param {[type]} map        [description]
 */
helper.addArrow = (polyline, length, angleValue, map) => {
    var linePoint = polyline.getPath(); //线的坐标串
    var arrowCount = linePoint.length;
    var arrowArr = [];  // 箭头对象数组, 用于删除
    for (var i = 1; i < arrowCount; i++) { //在拐点处绘制箭头
        var pixelStart = map.pointToPixel(linePoint[i - 1]);
        var pixelEnd = map.pointToPixel(linePoint[i]);
        var angle = angleValue; //箭头和主线的夹角
        var r = length; // r/Math.sin(angle)代表箭头长度
        var delta = 0; //主线斜率，垂直时无斜率
        var param = 0; //代码简洁考虑
        var pixelTemX, pixelTemY; //临时点坐标
        var pixelX, pixelX1, pixelY, pixelY1; //箭头两个点
        if (pixelEnd.x - pixelStart.x === 0) { //斜率不存在是时
            pixelTemX = pixelEnd.x;
            if (pixelEnd.y > pixelStart.y) {
                pixelTemY = pixelEnd.y - r;
            } else {
                pixelTemY = pixelEnd.y + r;
            }
            //已知直角三角形两个点坐标及其中一个角，求另外一个点坐标算法
            pixelX = pixelTemX - r * Math.tan(angle);
            pixelX1 = pixelTemX + r * Math.tan(angle);
            pixelY = pixelY1 = pixelTemY;
        } else { //斜率存在时
            delta = (pixelEnd.y - pixelStart.y) / (pixelEnd.x - pixelStart.x);
            param = Math.sqrt(delta * delta + 1);
            if (pixelEnd.x - pixelStart.x < 0) { //第二、三象限
                pixelTemX = pixelEnd.x + r / param;
                pixelTemY = pixelEnd.y + delta * r / param;
            } else { //第一、四象限
                pixelTemX = pixelEnd.x - r / param;
                pixelTemY = pixelEnd.y - delta * r / param;
            }
            //已知直角三角形两个点坐标及其中一个角，求另外一个点坐标算法
            pixelX = pixelTemX + Math.tan(angle) * r * delta / param;
            pixelY = pixelTemY - Math.tan(angle) * r / param;
            pixelX1 = pixelTemX - Math.tan(angle) * r * delta / param;
            pixelY1 = pixelTemY + Math.tan(angle) * r / param;
        }
        var pointArrow=map.pixelToPoint(new BMap.Pixel(pixelX, pixelY));
        var pointArrow1=map.pixelToPoint(new BMap.Pixel(pixelX1, pixelY1));
        var Arrow = new BMap.Polyline([
            pointArrow,
            linePoint[i],
            pointArrow1
        ], lineConfig);
        map.addOverlay(Arrow);
        arrowArr.push(Arrow)
    }
    return arrowArr;
}

/**
 * [创建地图]
 * @param  {Dom} map dom
 * @param {Object} config 地图配置
 * @return {[type]}     [description]
 */
helper.creatMap = function(map, config) {
    return new BMap.Map(map, config);
};
/**
 *
 * [根据一组经纬度画多边形]
 * @param arr {Array{Object}}``
 * @return {[type]} [description]
 */
helper.drawPolygon = function(arr) {
    if (arr && arr.length) {
        const points = arr.map(({
            lng,
            lat
        }) => {
            return helper.createPoint(lng, lat);
        });
        return new BMap.Polygon(points, areaConfig);
    }
};

/**
 * [画轨迹线]
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
helper.drawPolyline = function(arr) {
    if (arr && arr.length) {
        const points = arr.map(({
            lng,
            lat
        }) => {
            return helper.createPoint(lng, lat);
        });
        // var sy = new BMap.Symbol(7, {
        //     scale: 0.4, //图标缩放大小
        //     strokeColor: '#fff', //设置矢量图标的线填充颜色
        //     strokeWeight: 1, //设置线宽
        //     strokeOpacity: 1
        // });
        // var icons = new BMap.IconSequence(sy, '10', '30');
        // lineConfig['icons'] = [icons];

        const polyline = new BMap.Polyline(points, lineConfig);
        return polyline;
    }
};

/**
 * [画圆]
 * @param  {[type]} lng    [description]
 * @param  {[type]} lat    [description]
 * @param  {[type]} radius [description]
 * @return {[type]}        [description]
 */
helper.drawCircle = function({
    lng,
    lat,
    radius
}) {
    const circle = new BMap.Circle(
        helper.createPoint(lng, lat),
        radius,
        areaConfig
    );
    return circle;
};

/**
 * [创建标记marker对象]
 * @param  {String} lng              [description]
 * @param  {String} lat              [description]
 * @param  {String} [colorType='red' }]            [description]
 * @return {[type]}                  [description]
 */
helper.createMarker = function({
    lng,
    lat,
    colorType = 'red'
}) {
    const path = `./lib/vendor/gis/images/${colorType}Marker.png`;
    const myIcon = new BMap.Icon(path, new BMap.Size(35, 55));
    const point = helper.createPoint(lng, lat);
    const marker = new BMap.Marker(point, {
        icon: myIcon
    });
    return marker;
};

/**
 * [createPoint 创建点 ]
 * @param  {[type]} lng [description]
 * @param  {[type]} lat [description]
 * @return {[type]}     [description]
 */
helper.createPoint = (lng, lat) => {
    return new BMap.Point(Number(lng), Number(lat));
};

/**
 * [创建信息窗口对象]
 * @param  {String} content [description]
 * @return {[type]}         [description]
 */
helper.createInfoWindow = function(content) {
    // 创建信息窗口对象
    let infoWindow = new BMap.InfoWindow(content, winConfig);
    return infoWindow;
};
/**
 * [创建画图工具对象]
 * @return {[type]} [description]
 */
helper.createDrawingManager = function(map) {
    return new BMapLib.DrawingManager(map, {
        isOpen: false, // 是否开启绘制模式
        enableDrawingTool: true, // 是否显示工具栏
        drawingToolOptions: {
            anchor: window.BMAP_ANCHOR_TOP_RIGHT, // 位置
            offset: new BMap.Size(5, 5), // 偏离值
            // 鼠标绘制工具
            drawingModes: [
                window.BMAP_DRAWING_POLYGON,
                window.BMAP_DRAWING_CIRCLE,
                window.BMAP_DRAWING_RECTANGLE
            ]
        },
        circleOptions: drawOptions, // 圆的样式
        polylineOptions: drawOptions, // 线的样式
        polygonOptions: drawOptions, // 多边形的样式
        rectangleOptions: drawOptions // 矩形的样式
    });
};
/**
 * 创建热力图层
 * @param  {[type]} heatRadius [description]
 * @return {[type]}            [description]
 */
helper.createHeatmapOverlay = function(map) {
    let heatRadius = 30;
    let zoom = map.getZoom();
    switch (zoom) {
        case 19:
            heatRadius = 40;
            break;
        case 18:
            heatRadius = 30;
            break;
        case 17:
            heatRadius = 23;
            break;
        case 16:
            heatRadius = 17;
            break;
        case 15:
            heatRadius = 12;
            break;
        default:
            heatRadius = 10;
            break;
    }
    const heatMapColorConfig = {
        0.3: 'rgb(0,42, 255)',
        0.5: 'rgb(123, 240, 123)',
        0.6: 'rgb(242, 248, 90)',
        0.8: 'rgb(247, 73, 66)'
    };
    const heatMapOlay = new BMapLib.HeatmapOverlay({
        radius: heatRadius,
        visible: true,
        gradient: heatMapColorConfig
    });
    return heatMapOlay;
};

/**
 * 获取一段path的区域
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
helper.getPolygonArea = function(path) {
    const ply = new BMap.Polygon(path)
    const area = BMapLib.GeoUtils.getPolygonArea(ply) / 1000000
    return area
}

export default helper;
