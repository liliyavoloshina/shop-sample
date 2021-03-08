import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup'),
    meta: {
      layout: 'auth-layout'
    }
  },
  {
    path: '/admin',
    name: 'AdminMain',
    component: () => import('@/views/AdminMain'),
    meta: {
      layout: 'admin-layout',
      onlyForAdmin: true
    },
  },

  {
    path: '/admin-categories',
    name: 'AdminCategories',
    component: () => import('@/views/AdminCategories'),
    meta: {
      layout: 'admin-layout',
      onlyForAdmin: true
    }
  },

  {
    path: '/product/:id',
    name: 'Product',
    props: true,
    component: () => import('@/views/Product')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart'),
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters['auth/isAuthenticated']) {
    next({ name: 'Login' })
  } else if (to.meta.onlyForAdmin && !store.getters['auth/isAdmin']) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
