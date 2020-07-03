import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TestPage from '../views/TestPage.vue'
import TestTable from '../views/TestTable.vue'

Vue.use(VueRouter)

  const routes = [
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
    path: '/testPage',
    name: 'TestPage',
    component: TestPage
  },
  {
    path: '/testTable',
    name: 'TestTable',
    component: TestTable
  }
]

const router = new VueRouter({
  routes
})

export default router
