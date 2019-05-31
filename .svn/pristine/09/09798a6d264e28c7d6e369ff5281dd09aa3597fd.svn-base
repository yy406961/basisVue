import { cloneDeeps } from '@/utils/lib'
/**
 * 生成折线图option
 * @param {array} data 折线图数据
 * ex： [
 *          { name: '通联人数', data: [10, 2, 4, 3, 6, 4, 8, 1, 3, 4, 5, 9, 4, 1, 4] },
 *          { name: '通联次数', data: [5, 6, 2, 9, 4, 5, 7, 1, 0, 5 ,3, 3, 7, 1, 8] }
 *      ]
 * @param {String} type 折线图横轴坐标，默认15天，hour为一小时，day为一天，week为7天
 **/
export const getLineOption = (data, type = 'halfMonth') => {
    let color = 'rgba(255,255,255,0.50)';
    let itemColor = ['#88CA80', '#EC7B8D']
    let { time } = data[0]
    let xData =  []
    if (time) {
        xData =  cloneDeeps(time)
    }
    switch (type) {
        case 'hour':
            if (!time) {
                for (let i = 0; i <= 60; i += 10) {
                    xData.push(i);
                }
            }
            break;
        case 'day':
            if (!time) {
                for (let i = 0; i < 24; i++) {
                    xData.push(i);
                }
            }
            break;
        case 'week':
            if (!time) {
                for (let i = 1; i < 8; i++) {
                    let data = new Date(new Date().getTime() - i * 24 * 60 * 60 * 1000);
                    let month = data.getMonth() + 1;
                    let day = data.getDate();
                    xData.unshift(month + '/' + day);
                }
            }
            break;
        default:
            if (!time) {
                for (let i = 1; i < 16; i++) {
                    let data = new Date(new Date().getTime() - i * 24 * 60 * 60 * 1000);
                    let month = data.getMonth() + 1;
                    let day = data.getDate();
                    xData.unshift(month + '/' + day);
                }
            }
            break;
    }
    let series = [];
    if (data) {
        data.forEach((item, index) => {
            if (item.color) {
                itemColor[index] = item.color
            }
            series.push({
                name: item.name,
                type: 'line',
                showSymbol: false,
                data: item.data
            });
        });
    }
    let option = {
        title: {
            show: false
        },
        color: itemColor,
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '2%',
            right: 16,
            bottom: '8%',
            top: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    // type: 'dashed',
                    color: color
                }
            },
            axisLine: {
                lineStyle: {
                    color: color
                }
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: color
                }
            },
            data: xData
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    // type: 'dashed',
                    color: color
                }
            },
            axisLine: {
                lineStyle: {
                    color: color
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: color
                }
            }
        },
        series: series
    };
    return option;
};

/**
 * 生成饼图option
 * @param {array} data 饼图
 * ex： [
 *          { name: '在网人员', value: 589 },
            { name: '近三日消失人员', value: 680 },
 *      ]
 * @param {Object} obj 饼图宽高
 * @param {array} colors 饼图颜色，默认['#1BDAC0', '#25ADE5', '#0666D5', '#8FDDFF']
 **/
export const getPieOption = (data, obj, colors) => {
    let { height, width, center } = obj;
    // 设置饼图中心点
    let centerPoint = center && center.length > 0 ? center : ['50%', '50%'];
    // 颜色
    // let color = ['#1BDAC0', '#25ADE5', '#0666D5', '#8FDDFF'];
    let color = ['#49C2D1', '#49A0DB', '#7884D6', '#D790E0', '#CCCE8F', '#90CE8F']
    let bool = colors && colors.length;
    let resultColor = bool ? colors : color;
    let n = 0;
    // title数字
    let textData = 0;
    // 图例和series
    let legendData = [];
    let seriesData = [];
    data.map((item, index) => {
        textData += item.value;
        if (index !== 0 && index % resultColor.length === 0) {
            n = 0;
        }
        legendData.push(item.name);
        seriesData.push({
            name: item.name,
            value: item.value,
            itemStyle: {
                normal: {
                    color: resultColor[n]
                },
                emphasis: {
                    color: resultColor[n]
                }
            }
        });
        n++;
    });
    // 给title文字位置定位
    let length = String(textData).length;
    let leftX =
    Number(centerPoint[0].substring(0, centerPoint.length)) * width / 100;
    let topX =
    Number(centerPoint[1].substring(0, centerPoint.length)) * height / 100;
    let textLeftPotion = leftX - (length - 1) * 5 - 11;
    let textTopPotion = topX - 12;
    // SERIES赋值
    let option = {
        title: {
            text: textData,
            left: textLeftPotion,
            top: textTopPotion,
            textStyle: {
                color: '#0ff',
                fontSize: 22,
                align: 'center',
                fontFamily: 'lcdd'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} ({d}%)',
            textStyle: {
                fontSize: 12
            }
        },
        legend: {
            selectedMode: true,
            orient: 'vertical',
            x: 'left',
            itemWidth: 14,
            itemHeight: 8,
            align: 'left',
            icon: 'roundRect',
            data: legendData,
            textStyle: {
                fontSize: 12,
                color: '#eee'
            }
        },
        grid: {
            left: '12%',
            top: '40',
            right: '2%',
            bottom: '14%'
        },
        series: [
            {
                type: 'pie',
                clockWise: false,
                radius: ['84%', '88%'],
                center: centerPoint,
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    emphasis: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                tooltip: {
                    show: false
                },
                data: [
                    {
                        value: 1
                    }
                ]
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['56%', '80%'],
                center: centerPoint,
                label: {
                    normal: {
                        show: false
                    }
                },
                data: seriesData
            },
            {
                type: 'pie',
                clockWise: false,
                radius: ['47%', '52%'],
                center: centerPoint,
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    emphasis: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                tooltip: {
                    show: false
                },
                data: [
                    {
                        value: 1
                    }
                ]
            }
        ]
    };
    return option;
};

/**
 * 生成市级地图option
 * @param {array} data 地图数据
 * @param {String} name 地图名称
 **/
export const getMapOption = (data, name) => {
    let cityMap = {
        '湖南省': 'hunan',
        '长沙市': 'changsha',
        '株洲市': 'zhuzhou',
        '常德市': 'changde',
        '郴州市': 'chenzhou',
        '衡阳市': 'hengyang',
        '怀化市': 'huaihua',
        '娄底市': 'loudi',
        '邵阳市': 'shaoyang',
        '湘潭市': 'xiangtan',
        '益阳市': 'yiyang',
        '永州市': 'yongzhou',
        '岳阳市': 'yueyang',
        '张家界市': 'zhangjiajie',
        '湘西土家族苗族自治州': 'xiangxi'
    }
    let option = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        title: {
            text: name,
            left: 20,
            top: 20,
            subtext: '',
            x: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.data) {
                    let { name, total, msisdn } = params.data
                    if (total) {
                        return `<div style="font-size: 12px;padding: 4px 8px;">区县名称: ${name}</br>人员数量: ${total}人</div>`
                    }
                    return `<div style="font-size: 12px;padding: 4px 8px;">姓名: ${name}</br>手机号码: ${msisdn}</div>`
                }

            }
        },
        legend: {
            show: false
        },
        geo: {
            map: cityMap[name],
            zoom: 1.2,
            label: {
                emphasis: {
                    show: true,
                    color: '#fff'
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(60,232,250,0.50)',
                    borderColor: 'rgba(0,0,0,0.50)',
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: 'rgba(60,232,250,0.70)' // 地图区域划过时的颜色
                }
            }
        },
        series: [
            {
                name: 'point',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: data,
                symbolSize: 15,
                label: {
                    normal: {
                        formatter: function(params) {
                            return params.data.total || params.data.index
                        },
                        position: 'inside',
                        show: true,
                        color: '#fff',
                        fontSize: 12
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(218,65,111, 1)'
                    }
                }
            },
            {
                name: '',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: name === '湖南省' ? data : [],
                symbolSize: 20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: function(params) {
                            return params.data.total || params.data.index
                        },
                        position: 'inside',
                        show: true,
                        color: '#fff',
                        fontSize: 12
                    }
                },
                itemStyle: {
                    normal: {
                        // color: 'rgba(255,255,255,0.50)',
                        color: 'rgba(218,65,111, 0.7)',
                        shadowBlur: 10,
                        // shadowColor: 'rgba(255,255,255,0.30)'
                        shadowColor: 'rgba(218,65,111,0.5)'
                    }
                },
                zlevel: 1
            }
        ]
    // grid:{
    //     x: 0,
    //     y: 0,
    //     x2: 0,
    //     y2: 0
    // }
    };
    return option;
};

/**
 * 生成横向柱形图option
 * @param {array} data
 * ex： [
 *          { name: '芙蓉区', value: 34, ordernum: 63 },
            { name: '雨花区', value: 36, ordernum: 24 }
 *      ]
 **/
export const getBarOption = data => {
    let titleName = [];
    let valdata = [];
    let backData = [];
    data.forEach(item => {
        titleName.push(item.name);
        valdata.push(item.ordernum);
        backData.push({ name: item.name, ordernum: item.ordernum, value: 100 });
    });
    let option = {
        grid: {
            top: '2',
            left: '60',
            right: '80',
            bottom: '2'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(param) {
                let { name, ordernum } = param.data
                let str = name + '<br />' +
                    '在监测区域人员：' + ordernum
                return str
            },
            textStyle: {
                fontSize: 12
            }
        },
        xAxis: { show: false },
        yAxis: [
            {
                show: true,
                inverse: true,
                data: titleName,
                // interval: 0,
                axisLabel: {
                    interval: 0,
                    margin: 60,
                    align: 'left',
                    formatter: function(value) {
                        let str = value.length > 3 ? value.substring(0, 3) + '...' : value
                        return str
                    },
                    textStyle: {
                        color: 'rgba(255,255,255,.7)',
                        fontFamily: 'Microsoft YaHei',
                        fontSize: 12
                    }
                },
                position: 'left',
                axisLine: false,
                splitLine: false,
                axisTick: { show: false },
                boundaryGap: ['0%', '5%'],
                name: '',
                nameTextStyle: { color: '' }
            },
            {
                name: '',
                data: valdata,
                nameLocation: 'start',
                nameTextStyle: {
                    fontWeight: 'bold'
                },
                position: 'right',
                offset: 5,
                inverse: true,
                axisLine: {
                    onZero: false,
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    formatter: function(value) {
                        let str = value.length > 5 ? value.substring(0, 5) + '{normal|...}' : value
                        return str
                    },
                    textStyle: {
                        fontFamily: 'lcdd',
                        fontSize: 18,
                        color: '#3BE8FA'
                    },
                    rich: {
                        normal: {
                            fontFamily: 'Microsoft Yahei'
                        }
                    }
                }
            }
        ],
        series: [
            {
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: backData,
                barWidth: 10,
                barCategoryGap: 10,
                z: 1,
                itemStyle: {
                    normal: {
                        color: '#EDEEF3',
                        borderWidth: 1,
                        barBorderRadius: 15
                    }
                }
            },
            {
                type: 'bar',
                yAxisIndex: 0,
                data: data,
                barWidth: 10,
                barCategoryGap: 10,
                z: 2,
                itemStyle: {
                    barBorderRadius: 20,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 1,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#4374CB'
                            },
                            {
                                offset: 0.7,
                                color: '#3692B7'
                            },
                            {
                                offset: 1,
                                color: '#26B99B'
                            }
                        ],
                        globalCoord: false
                    }
                }
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'inside',
                //         formatter: '{c}%'
                //     }
                // }
            }
        ]
    };
    return option;
};

/**
 * 生成graph关系图option
 * @param {array} nodeData 节点数据
 * @param {array} linkData 关系数据
 * @param {num} type 关系图类型 0通话次数 1通话时长 2短信次数
 **/
export const getGraphOption = (nodeData, linkData, type = 1) => {
    let unit = type === 1 ? 's' : '次';
    const TYPE = ['通话次数', '通话时长', '短信次数'];
    const DATA_TYPE = {
        IN: '1', // 内部号码
        OUT: '2' // 外部号码
    };
    // TOP123
    const COLORS = {
        H: '#ff3e0a',
        HB: 'rgba(255, 62, 10, 0.5)',
        M: '#ffa60a',
        MB: 'rgba(255, 166, 10, 0.5)',
        L: '#0b9df0',
        LB: 'rgba(11, 157, 240, 0.5)',
        IN: '#D8FF26',
        INB: 'rgba(215, 255, 38, 0.5)',
        OUT: '#F4467A',
        OUTB: 'rgba(244, 70, 122, 0.5)'
    };
    let ecNode = [];
    nodeData.forEach(item => {
        const node = {
            name: item.name,
            value: item.count,
            emphasis: {
                label: {
                    show: true
                }
            },
            Original: item
        };
        if (item.type === DATA_TYPE.IN) {
            node.symbolSize = 8;
            node.itemStyle = {
                normal: {
                    color: COLORS.IN,
                    borderColor: COLORS.INB,
                    borderWidth: 7
                }
            };
            ecNode.push(node);
        } else if (item.type === DATA_TYPE.OUT) {
            node.symbolSize = 8;
            node.itemStyle = {
                normal: {
                    color: COLORS.OUT,
                    borderColor: COLORS.OUTB,
                    borderWidth: 7
                }
            };
            ecNode.push(node);
        }
    });
    let ecLink = [];
    ecLink = linkData.map((item, index) => {
        let obj = {
            source: item.name,
            target: item.targetName,
            value: item.count
        }
        if (index === 0) {
            obj.lineStyle = {
                normal: {
                    color: COLORS.H,
                    width: 2
                }
            }
            return obj
        } else if (index === 1) {
            obj.lineStyle = {
                normal: {
                    color: COLORS.M,
                    width: 2
                }
            }
            return obj
        } else if (index === 2) {
            obj.lineStyle = {
                normal: {
                    color: COLORS.L,
                    width: 2
                }
            }
            return obj
        }
        return obj
    });
    let option = {
        tooltip: {
            show: true,
            textStyle: {
                fontSize: 12
            },
            formatter: function(res) {
                if (res.dataType === 'edge') {
                    if (Array.isArray(res.value)) {
                        return `通联次数：${res.value[0]}次</br>短信次数：${res.value[1]}次</br>通话时长：${res.value[2]}s`
                    }
                    return TYPE[type] + '：' + res.value + unit;
                }
                if (res.data.Original.cname !== undefined) {
                    let name = res.data.Original.cname;
                    let phone = res.data.Original.name;
                    return `姓名：${name}<br/>手机号：${phone}`;
                }
            }
        },
        grid: {
            // show: true,
            left: '10',
            top: '10',
            right: '10',
            bottom: '10'
        },
        series: [
            {
                name: 'graph',
                type: 'graph',
                layout: 'force',
                nodes: ecNode,
                links: ecLink,
                // categories: me.categories,
                label: {
                    normal: {
                        // position: 'right',
                        // formatter: function(res) {
                        //     return res.name;
                        // }
                        show: true,
                        color: '#000',
                        fontSize: 10,
                        formatter: function(params) {
                            // 左侧表格中的数据排序在图表中以数字显示
                            if (params.data.Original.number) {
                                return params.data.Original.number
                            }
                        }
                    }
                },
                lineStyle: {
                    normal: {
                        color: '#fff',
                        width: 1
                        // curveness: 0.25
                    }
                },
                force: {
                    repulsion: 50,
                    // gravity: 0.05,
                    // edgeLength: 50
                    gravity: 0.1,
                    edgeLength: 30
                },
                symbolSize: 10,
                roam: true,
                draggable: true
            }
        ]
    };
    return option;
};
