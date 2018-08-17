import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path: '/home',
     	name: 'HelloWorld',
    	// component: resolve => require(['@/components/HelloWorld'],resolve),
    	component: function(callback){return require(['@/components/HelloWorld'],callback)}      // component: resolve => require(['student/component/xinwen/dyxw'],resolve),
    },
    {
    	path: '/next',
    	name: 'twopage',
    	component: (resolve) => require(['@/components/next'],resolve)
    },
    {
    	path: '/',
    	name: 'rederect',
    	component: (resolve) => require(['@/components/HelloWorld'],resolve),
    	title: "路由重定向"
    },
    {
    	path: '/page3',
    	name: '第三页',
    	component: (resolve) => require(['@/components/page3'],resolve),
    },
    {
    	path: '/page4',
    	name: 'page4',
    	component: (resolve) => require(['@/components/page4'],resolve),
    },
    {
        path: '/wsxxIndex',
        name: 'wsxxIndex',
        component: (resolve) => require(['@/components/wsxx/grxx'],resolve),
        meta:{title:"表单第一页"}
    },
    {
        path: '/wsxx2',
        name: 'wsxx2',
        component: (resolve) => require(['@/components/wsxx/qsxx'],resolve),
        meta:{title:"表单第二页"}
    },
    {
        path: '/wsxx3',
        name: 'wsxx3',
        component: (resolve) => require(['@/components/wsxx/qtxx'],resolve),
        meta:{title:"表单第三页"}
    },
    {
        path: '/useElement',
        name: 'elementUI',
        component: (resolve) => require(['@/components/useElement-ui'],resolve),
        meta:{title:"页面使用elementUI"}
    }
  ]
})