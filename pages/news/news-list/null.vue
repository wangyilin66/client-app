<template>
	<view class="null">
		<view class="nullimg">
			<image src="../../../static/images/news/xx_kong.png" mode=""></image>
			<!-- <image src="../../../static/images/news/xx_kong@2x%20(1).png" mode=""></image> -->
		</view>
		<view class="nilltie">
			重要通知
		</view>
		<view class="nulltext">
			平台将为你推送天通知状态
		</view>
		<view class="nulltext">
			掌握房源信息
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="less">
	.null{
		text-align: center;
		.nullimg{
			width: 363rpx;
			height: 225rpx;
			margin: auto;
			image{
				width: 100%;
				height: 100%;
				margin-left: -5%;
				
			}
		}
		.nilltie{
			font-size: 34rpx;
			margin: 0 0 19rpx ;
		}
		.nulltext{
			font-size:26rpx;
			color: #808080;
			margin-top: 5rpx;
		}
	}
</style>
