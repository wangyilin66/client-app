const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		baseUrl: 'http://192.168.1.107',
		showLoading: true,
		loadingText: '正在加载数据...',
		loadingTime: 800,
		originalData: true, // 是否在拦截器中返回服务端的原始数据
		loadingMask: true,
	});

	//请求拦截
	Vue.prototype.$u.http.interceptor.request = (config) => {
		const token = uni.getStorageSync('token');
		if (token && config.method == 'POST') {
			
			config.header['admin-token'] = 'token';
		}
		return config;
	}

	// 响应拦截
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.statusCode == 200) {
			return res.data;
		} else if (res.statusCode == 401) {
			//token失效，清除token信息并跳转到登陆页面
			uni.removeStorageSync('token');
			vm.$u.toast('身份信息失效或已过期请重新登录')
			return false;
		} else if (res.statusCode == 404) {
			vm.$u.toast('请求的信息不存在');
			return false;
		} else {
			//请求超时或者网络有问题
			return false;
		}
	}
}

export default {
	install
}
