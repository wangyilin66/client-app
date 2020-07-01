import Vue from 'vue'
import App from './App'
import uView from "uview-ui";

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})

//http拦截器


Vue.use(uView);
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)
app.$mount()
