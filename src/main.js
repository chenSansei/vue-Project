import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Print from 'vue-print-nb'
import Vant from 'vant';
import 'vant/lib/index.css';
import api from '@/axios/index'; // 导入api接口
import './lib/rem.js'; //rem
import {localData, sessionData} from "./lib/storage.js"; //localStorage&sessionStorage
Vue.use(Print); //注册
Vue.use(Vant);

Vue.prototype.localData = localData; //全局localStorage
Vue.prototype.sessionData=sessionData; //全局sessioStorage
Vue.prototype.$api = api; //将api挂载到vue的原型上

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
