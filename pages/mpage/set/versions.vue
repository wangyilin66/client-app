<template>
	<view class="versions">
		<navber :txtdata="title"></navber>
		<view class="versionsbox">
			<view class="boxtitle">
				版权信息
			</view>
			<view class="boxcont">
				专注房产行业50年，盗版必究
			</view>
			<view class="title">
				标题标题标题标题标题标题标题
			</view>
			<view class="cont">
				专注房产行业50年，盗版必究专注房产行业50年盗版必究专注房产行业50年，盗版必究专注房注房产行业50年，盗版必究专注房产行业50年，盗版必究专注房产行业50年，盗版必究
			</view>
			<view class="title">
				标题标题标题标题标题标题标题
			</view>
			<view class="cont">
				专注房产行业50年，盗版必究专注房产行业50年盗版必究专注房产行业50年，盗版必究专注房注房产行业50年，盗版必究专注房产行业50年，盗版必究专注房产行业50年，盗版必究
			</view>
			
		</view>
	</view>
</template>

<script>
	import navber from "../mymavber/navber.vue"
	export default{
		components:{
			navber
		},
		data(){
			return{
				title:"版权信息"
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="less">
	.versionsbox{
			box-sizing: border-box;
			padding: 33rpx 24rpx 0;
			.boxtitle{
					font-size: 38rpx;
					font-weight: 600;
					margin-bottom: 18rpx;
					line-height: 56rpx;
					line-height: 56rpx;
			}
			.boxcont{
				font-size: 30rpx;
				margin-bottom: 55rpx;
			}
			.title,.cont{
				margin-bottom: 18rpx;
			}
			.title{
				font-size: 40rpx;
				height: 56rpx;
				line-height: 56rpx;
			}
			.cont{
				font-size: 30rpx;
			}
	}
</style>
