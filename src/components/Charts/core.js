/**
 * ChartCore
 * 基础底层封装echarts基本API 接收属性 初始化echarts实例`EC`
 * [class基类]
 */
export default class ChartCore {
    constructor(op) {
        this.options = op
        this.initEC()
    }
    initEC() {
        if (this.options.el === undefined) {
            throw new Error('el not found. 请配置dom')
        }
        this.EC = echarts.init(this.options.el)
        this.EC.on('click', (...args) => {
            this.clickHandler(...args)
        })
        let me = this
        this.EC.getZr().on('click', function(e) {
            if (!e.target) {
                me.unSetNodeFocus()
            }
        })
    }

    clickHandler(...arg) {
        this.options.onClick(...arg)
    }

    /**
     * 关系图 [getSeriesIndexByPhone 根据number获取index]，并设置节点高亮
     * @return {[type]} [description]
     */
    getSeriesIndexByPhone(number) {
        const index = this.EC._model
            .getSeries()[0]
            .getData()
            ._nameList.findIndex(it => {
                return it === String(number)
            })
        if (index >= 0) {
            this.EC.dispatchAction({
                type: 'focusNodeAdjacency',
                //使用 seriesId 或 seriesIndex 或 seriesName 来定位 series.
                seriesIndex: 0,
                //使用 dataIndex 来定位节点。
                dataIndex: index
            })
        } else {
            //找不到节点，恢复默认状态
            this.EC.dispatchAction({
                type: 'unfocusNodeAdjacency',
                seriesIndex: 0,
                dataIndex: index
            })
        }
    }

    // 关系图 取消节点高亮
    unSetNodeFocus() {
        this.EC.dispatchAction({
            type: 'unfocusNodeAdjacency',
            seriesIndex: 0,
            dataIndex: 0
        })
    }

    updateProp(props) {
        this.options.props = props
        this.create()
    }
    build(option) {
        if (this.EC && option) {
            try {
                this.ECOption = option
                this.EC.clear()
                this.EC.setOption(option)
            } catch (e) {
                console.error(e)
            }
        }
    }
    resize() {
        if (this.EC) {
            this.EC.resize()
        }
    }
    dispose() {
        if (this.EC) {
            this.EC.dispose()
        }
    }
    getECId() {
        return this.EC.id
    }
    hideTip() {
        this.EC.dispatchAction({
            type: 'hideTip'
        })
    }
    showLoading() {
        this.EC.showLoading('', {
            text: 'loading',
            color: '#00ccff',
            textColor: '#fff',
            maskColor: 'rgba(0, 0, 0, 0.3)',
            zlevel: 0
        })
    }
    hideLoading() {
        this.EC.hideLoading()
    }
}
