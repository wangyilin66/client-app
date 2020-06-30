<template>
	<view class="info-box">
		<view class="info-til">小区概况</view>
		<view class="info-con">
			<view v-for="(item,idx) in infoContent" class="u-p-b-20">
				<text class="u-tips-color">{{item.label}}:</text>
				<text class="u-main-color u-line-1 u-p-l-20">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			infoContent:Array
		}
	}
</script>

<style lang="scss" scoped>
	.info-box{
		padding:40rpx 24rpx;
		.info-til{
			font-size:40rpx;
			font-weight: bold;
		}
		.info-con{
			padding-top: 40rpx;
		}
	}
	
</style>
