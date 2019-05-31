const state = {
    // 默认地图key 主要用于匹配echarts地图类型
    mapKey: 'hunan',
    // 地图中心坐标经纬度
    mapCenter: [112.948129, 28.227156],
    // zoom
    mapZoom: 17,
    // 地图最大zoom层级 每个省地区不一样
    mapMaxZoom: 18
}

const getters = {
    getMapCenter: state => state.mapCenter,
    getZoom: state => state.mapZoom,
    getMaxZoom: state => state.mapMaxZoom,
    getMapKey: state => state.mapKey
}

const mutations = {
    initMapConfig(state, { key, center, zoom, maxZoom }) {
        if (key) {
            state.mapKey = key
        }
        if (center) {
            state.mapCenter = center
        }
        if (zoom) {
            state.zoom = zoom
        }
        if (maxZoom) {
            state.mapMaxZoom = maxZoom
        }
    }
}

const actions = {
    // 初始化地图信息方法
    saveInitMapConfig: ({ commit }, payload) => {
        commit('initMapConfig', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
