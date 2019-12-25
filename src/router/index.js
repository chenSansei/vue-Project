import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import logIn from '../login.vue'
import about from './about'//引入示例
import home from './home'//引入示例

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'logIn',
    component: logIn
  },
  ...about,
  ...home
]

const router = new VueRouter({
  routes
})

export default router
