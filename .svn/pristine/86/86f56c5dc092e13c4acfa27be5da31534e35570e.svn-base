import { storage } from '@/common/storage'
import router from '@/router'
/**
 * 初始化数据
 */
const state = {
    isLogin: false
}

/**
 * commit 同步突变
 */
const mutations = {
    ['changeLoginState'](state, val) {
        state.isLogin = val
    }
}

/**
 */
const actions = {
    changeLoginState: ({ commit }, payload) => {
        commit('changeLoginState', payload)
    },
    /**
     * [disposeLoginService 登录业务处理]
     * @type {[type]}
     */
    disposeLoginService:({ commit, dispatch }, payload) => {
        let { userName, userId, gMapKey, gMapCenter, zoom, maxZoom } = payload
        // 设置全局userName和userId
        dispatch('user/saveUserName', userName, { root: true })
        dispatch('user/saveUserId', userId, { root: true })
        // 初始化地图相关参数
        dispatch('map/saveInitMapConfig', {
            key: gMapKey,
            center: gMapCenter,
            zoom: zoom || 17,
            maxZoom: maxZoom || 18
        }, { root: true })
        // 设置userName到session
        storage.session.set('userName', userName)
        storage.session.set('userId', userId)
        // 触发登录状态
        commit('changeLoginState', true)
    },
    disposeExitLoginService:({ commit }) => {
        localStorage.clear()
        sessionStorage.clear()
        // 触发登录状态
        commit('changeLoginState', false)
        // 跳转到登陆页
        router.push({ path: '/login' })
    }
}


const getters = {
    isLogin: state => state.isLogin
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
