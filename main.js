import Vue from 'vue'
import App from './App'
// import BaiduMap from 'vue-baidu-map'	

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})

// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'sxVBFmGagbggkyIVomEYxOx28BFZytGT'
// })
app.$mount()
