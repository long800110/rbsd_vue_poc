import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import CreditCardIntro from '@/components/card/intro/CreditCardIntro'

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
    path: '/card/intro',
    name: 'CreditCardIntro',
    component: CreditCardIntro
  }]
})
