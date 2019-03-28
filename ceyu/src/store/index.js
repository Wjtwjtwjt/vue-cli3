import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user' // 引入各个模块的代码
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    },
    getters
})

export default store