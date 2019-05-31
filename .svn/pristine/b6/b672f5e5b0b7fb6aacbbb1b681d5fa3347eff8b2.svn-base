<template lang="html">
  <div>
      <el-row>
          <el-col :span="12">
              <el-button @click.native="clearMap">清除</el-button>
              <el-button @click.native="getMapOverlay">获取图层数据</el-button>
              <el-button @click.native="clickAll">同时画点和区域</el-button>
              <MapBase ref="drawMap" :options="mapOption2" @drawComplete="drawComplete"></MapBase>
          </el-col>
      </el-row>
      <p>-------</p>
      <el-row>
          <el-col :span="12">
               <MapBase ref="maps" :options="mapOption" @markerClick="markerClick"></MapBase>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
               <el-button type="text" @click="mapChange">changeData</el-button>
               <BaseChart ref="map2" :options="mOp" @clickHandler="clickHandler"></BaseChart>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import MapBase from "@/components/gis/mapBaseVue";
import BaseChart from "@/components/Charts/baseChart";
import {
    getMapOption,
} from "@/utils/setChartsOption";
export default {
    name: "home",
    data() {
        return {
            mapOption: {
                width: 1000,
                height: 400
            },
            mapOption2: {
                width: 1000,
                height: 400,
                isDraw: true
            },
            mOp: {
                width: 500,
                height: 450
            },
            lineOp: {
                width: 500,
                height: 450
            },
            treeOp: {
                width: 1200,
                height: 550
            }
        };
    },
    mounted() {
        let markerArr = [{
                lng: "112.946728",
                lat: "28.22757",
                colorType: "blue",
                dataObj: {
                    userKey: 1111
                }
            },
            {
                lng: "112.945542",
                lat: "28.223942",
                colorType: "purple",
                dataObj: {
                    userKey: 2222
                }
            },
            {
                lng: "112.952297",
                lat: "28.225852",
                colorType: "red",
                dataObj: {
                    userKey: 333
                }
            }
        ];
        //
        let plArr = [{
                lng: "112.946728",
                lat: "28.22757"
            },
            {
                lng: "112.945542",
                lat: "28.22394"
            },
            {
                lng: "112.952297",
                lat: "28.225852"
            },
            {
                lng: "112.946748",
                lat: "28.22767"
            },
        ];
        // let plArr = [{
        //     lat: "28.209173",
        //     lng: "112.912556"
        // },
        // {
        //     lat: "28.218085",
        //     lng: "112.939002"
        // },
        // {
        //     lat: "28.248383",
        //     lng: "112.948201"
        // }]
        //
        // [{
        //     lat: "28.198477",
        //     lng: "112.919455"
        // },
        // {
        //     lat: "28.209682",
        //     lng: "112.947051"
        // },
        // {
        //     lat: "28.243037",
        //     lng: "112.952225"
        // }]

        // this.$refs.maps.addMarkers(markerArr);
        // this.$refs.maps.drawPolyline(plArr);

        // 画区域点
        let points = [{
                lng: 112.946723,
                lat: 28.227272
            },
            {
                lng: 112.946831,
                lat: 28.223994
            },
            {
                lng: 112.95064,
                lat: 28.224312
            },
            {
                lng: 112.950424,
                lat: 28.226858
            },
            {
                lng: 112.946723,
                lat: 28.227272
            }
        ];
        // 画多边形
        // this.$refs.maps.drawPolygon(points);

        // 画圆
        let config = {
            lng: 112.9517,
            lat: 28.226986,
            radius: 100
        };
        // this.$refs.maps.drawCircle(config);

        // 0居住位置 1工作位置 2当前位置
        let data = [
            [{
                    name: "长沙",
                    value: [112.979084, 28.197124, 110]
                },
                {
                    name: "岳麓山",
                    value: [112.945883, 28.195596, 100]
                },
                {
                    name: "长沙县",
                    value: [113.095217, 28.25174, 90]
                }
            ],
            [{
                    name: "宁乡市",
                    value: [112.562271, 28.2833, 80]
                },
                {
                    name: "望城",
                    value: [112.823857, 28.36877, 78]
                },
                {
                    name: "浏阳",
                    value: [113.65461, 28.167194, 76]
                }
            ],
            [{
                    name: "浏阳",
                    value: [113.65461, 28.167194, 76]
                },
                {
                    name: "xx",
                    value: [112.36203, 28.12896, 76]
                },
                {
                    name: "浏阳那边",
                    value: [114.022386, 28.389604, 76]
                }
            ]
        ];
        let option = getMapOption(data[0], "hunan");
        this.$refs.map2.renderData(option);
        // this.$refs.line.renderData(lineop)

        // let treeOp = getTreeOption();
        // this.$refs.tree.renderData(treeOp);
        let arrs = [
            {lng :121.323314, lat:31.202979 },
            {lng :121.323386, lat:31.198223 },
            {lng :121.329548, lat:31.198145 },
            {lng :121.329404, lat:31.203103 }
        ];
        this.$refs.drawMap.drawOverlay(arrs);

    },
    methods: {
        clickHandler(e) {
            console.log(e);
        },
        mapChange() {
            let option = getMapOption(
                [{
                        name: "浏阳",
                        value: [113.65461, 28.167194, 76]
                    },
                    {
                        name: "xx",
                        value: [112.36203, 28.12896, 76]
                    },
                    {
                        name: "浏阳那边",
                        value: [114.022386, 28.389604, 76]
                    }
                ],
                "hunan"
            );
            this.$refs.map2.renderData(option);
        },
        markerClick({
            e,
            data
        }) {
            let content =
                `
                <div>
                    <div>地址:北京 -> ${data.userKey}</div>
                    <span>运营商:移动</span></br>
                    <span>lac:123123123213</span></br>
                    <span>ci:234234324324</span></br>
                    <div>
                        <span>经度:${e.point.lng}</span>
                        <span>纬度:${e.point.lat}</span>
                    </div>
                </div>
            `;
            this.$refs.maps.openInfoPanel(content, e);
        },
        drawComplete(obj) {
            console.log(obj);
        },
        clearMap() {
            this.$refs.drawMap.clearAllOverlay();
        },
        getMapOverlay() {
            console.log(this.$refs.drawMap.getOverlayData());
        },
        clickAll() {
            // let arrs = [{
            //         lng: 112.948345,
            //         lat: 28.228079
            //     },
            //     {
            //         lng: 112.945686,
            //         lat: 28.226328
            //     },
            //     {
            //         lng: 112.947985,
            //         lat: 28.225183
            //     },
            //     {
            //         lng: 112.95077,
            //         lat: 28.22523
            //     },
            //     {
            //         lng: 112.95068,
            //         lat: 28.228063
            //     }
            // ];
            const arrs = [
  { lng: "111.6106737610417", lat: "29.357735302167878" },
  { lng: "110.94323727457285", lat: "27.165066875584078" },
  { lng: "113.21853979976588", lat: "29.30329134397391" }
]
            this.$refs.drawMap.drawOverlay(arrs);
            let markerArr = [{
                    lng: "112.946728",
                    lat: "28.22757",
                    colorType: "blue",
                    dataObj: {
                        userKey: 1111
                    }
                },
                {
                    lng: "112.945542",
                    lat: "28.223942",
                    colorType: "purple",
                    dataObj: {
                        userKey: 2222
                    }
                },
                {
                    lng: "112.952297",
                    lat: "28.225852",
                    colorType: "red",
                    dataObj: {
                        userKey: 333
                    }
                }
            ];
            this.$refs.drawMap.addMarkers(markerArr);
        }
    },
    components: {
        MapBase,
        BaseChart
    }
};
</script>
