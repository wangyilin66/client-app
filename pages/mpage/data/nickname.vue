<template>
	<view class="nickname">
		<navs :text="text" @visib="visib"></navs>
		<view class="namebox">
			<input class="input" type="text" value="158****8888"  placeholder="请输入昵称"/>
			<image class="img" src="../../../static/images/mpage/my_geren_close@2x.png" @click="gopersonage" mode=""></image>
		</view>
	</view>
</template>

<script>
	import navs from "../mymavber/navber2.vue"
	export default{
		data(){
			return{
				text:""
			}
		},
		onLoad(option) {
			this.text=option.title
			console.log(option.title)
		},
		components:{ 
			navs
		},
		methods:{
			gopersonage(){
				uni.redirectTo({
				    url:"./personage"
				});
			},
			visib(item){
				uni.redirectTo({
				    url:"./personage"
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.nickname{
		box-sizing: border-box;
		padding: 0 24rpx;
		.namebox{
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.img{
				width: 30rpx;
				height: 30rpx;
			}
			.input{
				font-size: 32rpx;
				caret-color:#257EFF;
				color: #000000;
			}
			.input::-webkit-input-placeholder {
					color: #888888;
				}
				
				/* 使用webkit内核的浏览器 */
				.input:-moz-placeholder {
					color: #888888;
				}
				
				/* Firefox版本4-18 */
				.input::-moz-placeholder {
					color: #888888;
				}
				
				/* Firefox版本19+ */
				.input:-ms-input-placeholder {
					color: #888888;
				}
		}
	}
</style>
