import { storage } from '@/common/storage'

const state = {
    userName: storage.session.get('userName') || '',
    userId: storage.session.get('userId') || ''
}

const getters = {
    getUserName: state => state.userName,
    getUserId: state => state.userId
}

const mutations = {
    ['saveUserName'](state, data) {
        state.userName = data
    },
    ['saveUserId'](state, data) {
        state.userId = data
    }
}

const actions = {
    saveUserName: ({ commit }, payload) => {
        commit('saveUserName', payload)
    },
    saveUserId: ({ commit }, payload) => {
        commit('saveUserId', payload)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
