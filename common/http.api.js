
//api地址(可选)
const loginUrl = '/app/loginCli'

const install = (Vue, vm) => {
	// 不需要传入参数或固定参数
	let getTest_un = (params = {}) => vm.$u.get(getTestUrl, {
		id: 2
	});
	let postTest_un = (params = {}) => vm.$u.post(postTestUrl, {
		id: 2
	});
	
	// 需要传入参数
	let login = (params = {}) => vm.$u.post(loginUrl,params)
	
	
	
	//挂载
	vm.$u.api = {getTest_un,postTest_un,login};
}

export default{
	install
}