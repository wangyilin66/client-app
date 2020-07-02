<template>
	<view class="thirdly">
		<navbar :txtdata="title"></navbar>
		<view class="thirdlybox">
			<view class="listbox">
				<view class="img">
					<image src="../../../static/images/mpage/my_geren_weixin@2x.png" mode=""></image>
				</view>
				<view class="text">
					微信
				</view>
				<view class="btn">
					去绑定
				</view>
			</view>
			<view class="listbox">
				<view class="img">
					<image src="../../../static/images/mpage/my_geren_qq@2x.png" mode=""></image>
				</view>
				<view class="text">
					QQ
				</view>
				<view class="btn">
					去绑定
				</view>
			</view>
			<view class="listbox">
				<view class="img">
					<image src="../../../static/images/mpage/my_geren_weibo@2x.png" mode=""></image>
				</view>
				<view class="text">
					微博
				</view>
				<view class="btn">
					去绑定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navbar from "../mymavber/navber.vue"
	export default{
		components:{
			navbar
		},
		data(){
			return{
				title:"第三方账号设置"
			}
		},
		methods:{
			
		},
		
	}
</script>

<style scoped lang="less">
	.thirdlybox{
		box-sizing: border-box;
		padding: 26rpx 24rpx 0;
		.listbox{
			height: 88rpx;
			border-bottom: 1rpx solid #E5E5E5;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.img{
				width: 36rpx;
				height: 36rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.text{
				font-size: 30rpx;
				font-weight: 600;
				color: #1d1d1d;
				flex: 1;
				margin-left: 42rpx;
			}
			.btn{
				width: 100rpx;
				height: 50rpx;
				background: #47CD97;
				color: #FFFFFF;
				text-align: center;
				font-size: 26rpx;
				line-height: 50rpx;
				border-radius: 8rpx;
			}
		}
		
	}
</style>
