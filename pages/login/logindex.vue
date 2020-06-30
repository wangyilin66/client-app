<template>
	<view class="login">
		<!-- 关闭 -->
		<view class="close">
			<image src="../../static/images/login/daohang_close_icon@2x.png" mode="" @click="close()"></image>
		</view>
		<view class="loginbox">
			<!-- 一键登录 -->
			<view class="logintext">
				<view class="textt">
					<image src="../../static/images/login/denglu_shouji@2x.png" mode=""></image>
					<text>一键登录</text>
				</view>
				<view class="texthint">
					登录优品,关注好房永不丢失
				</view>
			</view>
			<!-- 手机号和验证码 -->
			<view class="phoneverify">
				<!-- <view class="phonenumber">
					15888888888
				</view> -->
				<input class="phonenumber" type="text" v-model="phonenumber" value="" disabled/>
				<view class="phonehint">
					中国移动认证
				</view>
			</view>
			<!-- 登录条款 -->
			<view class="clause">
				登录即同意《<text @click="clause1()">中国移动认证服务条款</text>》以及《<text @click="clause2()">优品好房用户协议</text>》和《<text @click="clause3()">隐私政策</text>》
			</view>
			<!-- 登录方式本机或者其他 -->
			<view class="loginbtn">
				<view class="btn" @click="phonelog()">
					本机号码一键登录
				</view>
				<view class="btns" @click="elsephonelog()">
					其他手机号码登录
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				phonenumber:'15888888888',
			}
		},
		onLoad(){
			this.res(this.phonenumber)
		},
		methods: {
			// 关闭
			close(){
				console.log("关闭登录页");
				uni.switchTab({
					url:"/pages/mpage/index"
				})
				
			},
			// 替换手机号
			res(val){
				// console.log(this.phonenumber)
				 let reg = /1(\d{2})\d{4}(\d{4})/g;
				 let str = val.replace(reg,"1$1****$2");
				 this.phonenumber=str;
			},
			// 条款1
			clause1(){
				console.log(111)
			},
			// 条款2
			clause2(){
				console.log(222)
			},
			// 条款3
			clause3(){
				console.log(333)
			},
			// 登录
			phonelog(){
				console.log("手机号登陆")
			},
			// 其他手机号
			elsephonelog(){
				uni.navigateTo({
					url:"./phonelogin"
				})
			}
			

		},
		components: {}
	}
</script>

<style lang="less" scoped>
	.login {
		width: 100%;
		background: #FFFFFF;

		// 关闭
		.close {
			box-sizing: border-box;
			padding: 56rpx 53rpx 0;

			image {
				width: 30rpx;
				height: 30rpx;
			}

		}
		// 内容
		.loginbox {
			box-sizing: border-box;
			padding: 146rpx 64rpx 0;
			.logintext {
				.textt {
					font-size: 60rpx;
					height: 84rpx;
					display: flex;
					align-items: center;

					image {
						width: 48rpx;
						height: 60rpx;
						font-weight: 600;
					}

					text {
						margin-left: 15rpx;
					}
				}
				.texthint{
					font-size: 34rpx;
					margin: 13rpx 0 38rpx 0;
				}

			}
			.phoneverify{
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 56rpx;
				margin-bottom: 44rpx;
				.phonenumber{
					font-size: 35rpx;
					font-weight: 600;
				}
				.phonehint{
					font-size: 26rpx;
					color: #808080;
				}
				
				
			}
			.clause{
				font-size: 26rpx;
				color:#BBBBBB;
				margin-bottom: 90rpx;
				text{
					color: #47CD97;
				}
			}
			.loginbtn{
				view{
					height: 100rpx;
					font-size:40rpx;
					line-height: 100rpx;
					text-align: center;
					border-radius: 60rpx;
					margin-bottom: 40rpx;
				}
				.btn{
					color: #FFFFFF;
					background: #47CD97;
				}
				.btns{
					color: #BBBBBB;
				}
			}
		
		}
	}
</style>
