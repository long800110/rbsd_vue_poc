import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/aggregation/home/Home'
import Portalling from '@/components/aggregation/portalling/Portalling'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/portalling',
    name: 'Portalling',
    component: Portalling
  }]
})
