import Vue from 'vue'
import { mapGetters } from 'vuex'
import Component from 'vue-class-component'
import MapClass from './mapClass'
import { sizePercentFix } from '@/utils/assist'
@Component({
    props: {
        options: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        ...mapGetters({
            mapCenter: 'map/getMapCenter',
            mapZoom: 'map/getZoom',
            maxZoom:'map/getMaxZoom'
        })
    }
})
export default class MapBase extends Vue {
    data() {
        return {
            width: 600,
            height: 300,
            isDrawing: false
        }
    }
    created() {
        this.width = this.options.width
        this.height = this.options.height
    }

    mounted() {
        let el = this.$refs.mapRef
        let center = this.mapCenter
        let zoom = this.mapZoom
        let maxZoom = this.maxZoom
        let { isDraw } = this.options
        this.$mapClass = new MapClass({
            el,
            center,
            zoom,
            maxZoom,
            isDraw,
            onClick: this.onClickHandler.bind(this),
            overlayComplete: this.overlayComplete.bind(this)
        })
    }

    openInfoPanel(content, e) {
        if (this.$mapClass) this.$mapClass.openInfoPanel(content, e)
    }

    /**
     * [overlayComplete 绘画完成]
     * @param  {[type]} result [description]
     * @return {[type]}        [description]
     */
    overlayComplete(result) {
        this.$emit('drawComplete', result)
    }

    onClickHandler(e, dataObj) {
        this.$emit('markerClick', {
            e,
            data: dataObj
        })
    }

    // 添加标记
    addMarkers(data) {
        if (data && this.$mapClass !== undefined && data.length) {
            this.$mapClass.addMarkers(data)
        }
    }

    // 点聚焦
    markerZoomAdapter(data) {
        if (data && this.$mapClass !== undefined && data.length) {
            this.$mapClass.markerZoomAdapter(data)
        }
    }

    // 渲染热地图
    drawHeatMap(obj) {
        let { data } = obj
        if (data && this.$mapClass !== undefined && data.length) {
            this.$mapClass.drawHeatMap(obj)
        }
    }

    // 画圆
    drawCircle(config) {
        if (config) this.$mapClass.drawCircle(config)
    }
    // 画多边形
    drawPolygon(arr) {
        if (arr && arr.length) this.$mapClass.drawPolygon(arr)
    }
    // 划线
    drawPolyline(arr) {
        if (arr && arr.length) this.$mapClass.drawPolyline(arr)
    }
    // 画区域
    drawOverlay(arrs) {
        if (arrs && arrs.length) this.$mapClass.drawOverlay(arrs)
    }

    // 打开编辑模式
    openEditorMode() {
        if (this.$mapClass) this.$mapClass.openEditorMode()
    }

    // 销毁方法
    beforeDestory() {
        if (this.$mapClass) this.$mapClass.destory()
    }

    //清理所有覆盖物
    clearAllOverlay() {
        if (this.$mapClass) this.$mapClass.clearAllOverlay()
    }
    // 获取当前图层数据
    getOverlayData() {
        if (this.$mapClass) return this.$mapClass.getCurOverlayData()
    }

    isDrawingState(){
        if(this.$mapClass) return this.$mapClass.isDrawingState()
    }

    resizeComp(newVal) {
        if (newVal) {
            this.width = newVal.width
            this.height = newVal.height
            // this.$nextTick(() => {
            //     this.$mapClass.resize()
            // })
        }
    }
    get chartStyle() {
        let width = sizePercentFix(this.width)
        let height = sizePercentFix(this.height)
        return {
            width: width,
            height: height
        }
    }

    render(h) {
        return <div ref="mapRef" style={this.chartStyle} />
    }
}
