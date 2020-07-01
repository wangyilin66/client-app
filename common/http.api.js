
//api地址(可选)
const getTestUrl = '/getTest';
const postTestUrl = '/postTest';

const install = (Vue, vm) => {
	// 不需要传入参数或固定参数
	let getTest_un = (params = {}) => vm.$u.get(getTestUrl, {
		id: 2
	});
	let postTest_un = (params = {}) => vm.$u.post(postTestUrl, {
		id: 2
	});
	
	// 需要传入参数
	let getTest = (params = {}) => vm.$u.get(getTestUrl, params);
	let postTest = (params = {}) => vm.$u.post(postTestUrl, params);
	
	
	
	//挂载
	vm.$u.api = {getTest_un,postTest_un,getTest, postTest};
}

export default{
	install
}