/**
 * 初始化数据
 */
const state = {
    theme: '01',
    visualHeight: 500,
    menuState: false,
    // 是否电话加密
    isPhoneJM: false
}

/**
 * commit 同步突变
 */
const mutations = {
    ['changeThemeMutation'](state, theme) {
        state.theme = theme
    },
    ['changeVisualheight'](state, height) {
        state.visualHeight = height
    },
    ['changeMenuState'](state, val) {
        state.menuState = val
    }
}

/**
 */
const actions = {
    changeTheme: ({ commit }, payload) => {
        commit('changeThemeMutation', payload)
    },
    syncVisualHeight: ({ commit }, payload) => {
        commit('changeVisualheight', payload)
    },
    changeMenuState: ({ commit }, payload) => {
        commit('changeMenuState', payload)
    }
}


const getters = {
    getTheme: state => state.theme,
    visualHeight: state => state.visualHeight,
    menuState: state => state.menuState,
    isPhoneJM: state => state.isPhoneJM
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
