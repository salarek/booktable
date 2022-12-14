import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
    
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/AuthenticationPanel',
    name: 'AuthenticationPanel',
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthenticationPanel.vue')
  },
  {
    path: '/landingpage',
    name: 'landingpage',
    component: () => import(/* webpackChunkName: "about" */ '../views/LandingPage.vue'),
    beforeEnter(to, from, next) {
       if(document.cookie==""){
        next({
          path: '/',
        })
       }else{
        next()
       }
      

    },

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
