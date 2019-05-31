import ChartCore from './core'
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
    props: {
        options: {
            type: Object,
            default() {
                return {}
            }
        }
    }
})
export default class BaseChart extends Vue {
    data() {
        return {
            width: 600,
            height: 300
        }
    }
    created() {
        this.width = this.options.width
        this.height = this.options.height
    }
    mounted() {
        this.el = this.$refs.mapRef
        this.$mapClass = new ChartCore({
            el: this.el,
            onClick: this.onClickHandler.bind(this)
        })
    }

    // 图例类click统一处理
    onClickHandler(param) {
        // 处理treeMap图 点击面包屑 不触发级联
        if (param && param.selfType && param.selfType === 'breadcrumb') return

        // 处理地图空值点空白 时候
        if (param.seriesType === 'map' && isNaN(param.value)) return

        // 处理关系图点击 节点之间的线的时候
        if (param.seriesType === 'graph' && param.dataType === 'edge') return

        // console.log(payload)
        this.$emit('clickHandler', param)
    }

    // 关系图 设置节点高亮
    setNodeFocus(number) {
        this.$mapClass.getSeriesIndexByPhone(number)
    }

    // 渲染数据
    renderData(buildOp) {
        if (buildOp && this.$mapClass !== undefined) {
            this.$mapClass.build(buildOp)
        }
    }
    // 销毁方法
    beforeDestory() {
        if (this.$mapClass) this.$mapClass.dispose()
    }

    resizeComp(newVal) {
        if (newVal) {
            this.width = newVal.width
            this.height = newVal.height
            this.$nextTick(() => {
                this.$mapClass.resize()
            })
        }
    }

    get chartStyle() {
        let width =
            this.width.toString().substr(this.width.length - 1) === '%' ?
                this.width :
                this.width + 'px'
        let height =
            this.height.toString().substr(this.height.length - 1) === '%' ?
                this.height :
                this.height + 'px'
        return {
            width: width,
            height: height
        }
    }

    render(h) {
        return <div ref="mapRef" style={this.chartStyle} />
    }
}
