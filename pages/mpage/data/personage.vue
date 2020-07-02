<template>
	<view class="personage">
		<navber :txtdata="text"></navber>
		<view class="presbox">
			<view class="list">
				<view class="left">
					<view class="font">
						头像
					</view>
					<view class="img">
						<u-avatar class="imgs" size="100% 100%" :src="src"></u-avatar>
						<!-- <image class="imgs" src="../../static/images/mpage/geren.svg" mode=""></image> -->
					</view>
				</view>

				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>
			</view>
			<view class="list"  @click="honickname">
				<view class="left">
					<view class="font">
						昵称
					</view>
					<view class="img">
						15888888888
						<!-- <image class="imgs" src="../../static/images/mpage/geren.svg" mode=""></image> -->
					</view>
				</view>

				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>
			</view>
			<view class="list" @click="goverify">
				<view class="left">
					<view class="font">
						手机号码
					</view>
					<view class="img">
						
						{{phone==""?"你还没有绑定手机号":phone}}
						<!-- <image class="imgs" src="../../static/images/mpage/geren.svg" mode=""></image> -->
					</view>
				</view>

				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>
			</view>
			<view class="list" @click="goamend">
				<view class="left">
					<view class="font">
						密码
					</view>
					<view class="img">

						修改密码
						<!-- <image class="imgs" src="../../static/images/mpage/geren.svg" mode=""></image> -->
					</view>
				</view>

				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>
			</view>
			<view class="list" @click="gomycode">
				<view class="left">
					<view class="font">
						我的邀请码
					</view>
					<view class="img">
						97384773
						<!-- <image class="imgs" src="../../static/images/mpage/geren.svg" mode=""></image> -->
					</view>
				</view>

				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>
			</view>
		</view>
		<view class="idbox">
			<view class="list">
				<view class="left">
					<view class="font">
						身份认证
					</view>
					<view class="img">
						未实名认证
					</view>
				</view>

				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>
			</view>
			<view class="list" @click="gologout">
				<view class="left">
					<view class="font">
						注销服务
					</view>
					<view class="img">
						注销后无法恢复
					</view>
				</view>

				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>
			</view>
			<view class="list" @click="gothirdly">
				<view class="left">
					<view class="font">
						第三方账号设置
					</view>
					<view class="img">
					</view>
				</view>

				<view class="right">
					<!-- my_geren_close@2x -->
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>
			</view>

		</view>
		<view class="dropout" @click="outlog">
			退出登陆
		</view>
	</view>
</template>

<script>
	import navber from "../mymavber/navber.vue"
	export default {
		components: {
			navber
		},
		data() {
			return {
				text: "我的个人信息",
				src: "",
				data: [{
						"text": "头像",
						"img": `<u-avatar class="img" size="100% 100%" :src="src"></u-avatar>`
					},
					{
						"text": "昵称",
						"phone": "15888888888"
					},
					{
						"text": "手机号码",
						"phone": "15888888888"
					},
					{
						"text": "密码",
						"phone": "修改密码"
					},
					{
						"text": "我的邀请码",
						"number": "91381747"
					}
				],
				phone:""
			}
		},
		onLoad(options) {
		},
		methods:{
			honickname(){
					uni.navigateTo({
						url:"./nickname?string="+2+"&title="+"昵称"
					})
			},
			goverify(){
				uni.navigateTo({
					url:"./verify?phone="+this.phone
				})
			},
			goamend(){
				uni.navigateTo({
					url:"./amend"
				})
			},
			gomycode(){
				uni.navigateTo({
					url:"./mycode"
				})
			},
			gologout(){
				uni.navigateTo({
					url:"./logout"
				})
			},
			gothirdly(){
				uni.navigateTo({
					url:"./thirdly"
				})
			},
			outlog(){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
			
		}
	}
</script>

<style scoped lang="less">
	.presbox,.idbox {
		box-sizing: border-box;
		padding: 0 24rpx 0;
		margin-bottom: 31rpx;
	}
	.idbox{
		border-top: 1rpx solid #E5E5E5;
		border-bottom: 1rpx solid #E5E5E5;
		.list{
			border: none;
		}
	}

	.list {
		display: flex;
		height: 97rpx;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid #E5E5E5;

		.left {
			width: 90%;
			display: flex;
			justify-content: space-between;

			.font {
				font-size: 32rpx;
			}

			.img {
				font-size: 32rpx;
				color: #888888;

				.imgs {
					width: 66rpx;
					height: 66rpx;
				}
			}
		}

		.right {
			image {
				width: 46rpx;
				height: 54rpx;
			}
		}
	}

	.dropout {
		height: 98rpx;
		line-height: 98rpx;
		font-size: 32rpx;
		color: #47CD97;
		text-align: center;
		border: 1rpx solid #E5E5E5;
	}
</style>
