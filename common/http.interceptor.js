const install = (Vue, vm) => {
	console.log(Vue.prototype.$u.http)
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'http://192.168.1.101',
		showLoading: true,
		loadingText: '正在加载数据...',
		loadingTime: 800,
		originalData: false, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true,
		header: {
			'content-type': 'multipart/form-data',
		}
	});

	//请求拦截
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// console.log(config.method)
		const token = uni.getStorageSync('token');
		console.log(token == '')
		if (token && config.method == 'POST') {
			config.header.token = token;
		}
		return config;
	}

	// 响应拦截
	Vue.prototype.$u.http.interceptor.response = (res) => {
		console.log(res.code)
		if (res.code == 200) {
			//请求成功
			return res.result;
		} else if (res.code == 401) {
			//token失效
			vm.$u.toast('验证失败，请重新登录');
			setTimeout(() => {
				// 此为uView的方法，详见路由相关文档
				vm.$u.route('/pages/user/login')
			}, 1500)
			return false;
		} else {
			// 如果返回false，则会调用Promise的reject回调，
			// 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
			return false;
		}
	}
}

export default {
	install
}
