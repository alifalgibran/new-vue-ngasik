import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import users from './views/DaftarUser.vue'
import requests from './views/DaftarRequest.vue'
import classes from './views/DaftarKelas.vue'
import masuk from "./views/masuk.vue"
import login from "./views/login.vue"
import SecureComponent from "./views/secure.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'user',
      component: users
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/sec',
      name: 'secure',
      component: SecureComponent
    },
    {
      path: '/',
      name: 'masuk',
      component: masuk
    },
    {
      path: '/request',
      name: 'request',
      component: requests
    },
    {
      path: '/class',
      name: 'class',
      component: classes
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
