import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        pageTitle:'首页'
    },
    mutations:{
        next(state,payload){
            state.pageTitle = payload
        }
    },
    actions:{

    },
    getters:{

    }
})

export default store