import Vue from 'vue'
import Router from 'vue-router'
import Input from '@/components/input'
import axios from 'axios'
import todoList from '@/components/todoList'
import Chart from '@/components/chart'
import Tab from '@/components/tab'

Vue.use(Router)
Vue.config.productionTip = false
Vue.prototype.$http = axios

export default new Router({
    routes: [{
            path: '/input',
            name: 'Input',
            component: Input
        },
        {
            path: '/todolist',
            name: 'todoList',
            component: todoList
        },
        {
            path: '/chart',
            name: 'Chart',
            component: Chart
        },
        {
            path: '/tab',
            name: 'Tab',
            component: Tab
        }
    ]
})