import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        pageTitle:'首页',
        teststring:'我们'
    },
    mutations:{
        next(state,payload){
            state.pageTitle = payload
        }
    },
    actions:{

    },
    // 2018.08.07思考：
        // 页面中通过this.$store.state.pageTitle获取vuex中的pageTitle，
        // 也可以通过this.$getters.getpagetitle来获取到vuex中pageTitle
        // 有什么异同呢？
    getters:{
        getpagetitle:(state) => {
            return state.pageTitle
        },
        testTall:(state) => {
            return state.teststring
        }
    }
})

export default store