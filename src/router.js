import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Show from './views/Show.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shows/:id',
      name: 'shows',
      component: Show,
      props: true,
    }
  ]
})
