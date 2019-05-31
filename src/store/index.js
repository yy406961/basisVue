import Vue from 'vue'
import Vuex from 'vuex'
import { global,  map, user, login  } from './modules'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        global,
        map,
        user,
        login
    }
})

export default store
