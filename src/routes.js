import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/views/Top'
import About from '@/views/About'
import Skills from '@/views/Skills'
import Works from '@/views/Works'
import Apps from '@/views/Apps'

Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/apps',
      name: 'apps',
      component: Apps
    }
  ]
})
