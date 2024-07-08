import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "hello-world" */ '../views/PortFolio.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "hello-world" */ '../views/Login.vue')
  },
 
 
  {
    path: '',
    name: 'ToolBar',
    component: () => import(/* webpackChunkName: "hello-world" */ '../views/ToolBar.vue'),
    children : [
      {
        path: '/me',
        name: 'me',
        component: () => import(/* webpackChunkName: "hello-world" */ '../views/Me.vue')
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      
    ]
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
