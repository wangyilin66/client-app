<template>
	<view class="mycode">
		<navber :title="title" @back="back"></navber>
		<view class="codebox">
			<view class="codeinfo">
				<view class="codet">
					我的邀请码
				</view>
				<view class="code">
					683874181948
				</view>
				<view class="operate">
					一键复制
				</view>
			</view>
			<view class="qrcode">
					<image src="../../../static/images/index/home_zx_pic2.png" mode=""></image>
			</view>
			<view class="codehint">
				<view class="">
					经纪人填写您的邀请码(或扫描您的二维码)
				</view>
				<view class="">
					TA将成为您的专属经纪人，为您提供专业服务
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navber from "../mymavber/navber3.vue"
	export default{
		components:{
			navber
		},
		data(){
			return{
				title:"我的邀请码"
			}
		},
		methods:{
			back(item){
				uni.redirectTo({
				    url: './personage'
				});
			}
		},
	}
</script>

<style scoped lang="less">
	.codebox{
		box-sizing: border-box;
		padding: 54rpx 30rpx 0;
		.codeinfo{
			box-sizing: border-box;
			padding: 53rpx;
			text-align: center;
			border-radius: 50rpx;
			margin-bottom: 107rpx;
			color:#FFFFFF;
			background: #47CD97;
			.codet{
				font-size: 32rpx;
				margin-bottom: 4rpx;
			}
			.code{
				height: 84rpx;
				line-height: 84rpx;
				margin-bottom: 28rpx;
				font-size: 60rpx;
				
			}
			.operate{
				width: 233rpx;
				height: 64rpx;
				line-height: 64rpx;
				font-size: 32rpx;
				border: 1rpx solid #FFFFFF;
				margin: 0 auto;
				border-radius: 50rpx;
			}
		}
		.qrcode{
			width: 318rpx;
			height: 318rpx;
			margin: 0 auto;
			box-sizing: border-box;
			padding: 15rpx;
			border: 1rpx solid red;
			margin-bottom: 228rpx;
			image{
				width: 100%;
				height: 100%;
			}
			
		}
		.codehint{
			font-size: 30rpx;
			color: #808080;
			view{
				height: 42rpx;
				line-height: 42rpx;
				text-align: center;
			}
		}
	}
</style>
