<template>
	<view class="card-item-box">
		<view v-for="(item,index) in cardData" :key="index" class='card-item'>
			<view class="card-til">{{item.til}}</view>
			<view class="card-content">
				<view class="card-minortil">{{item.minortil}}</view>
				<view class="card-tips">{{item.tips}}</view>
			</view>
			<view class="card-btn">{{item.btn}}</view>
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
			cardData:{
				type:Array,
				required:true
			}
		}
	}
</script>

<style>
	.card-item-box {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
	
	.card-item {
		width: 340rpx;
		padding-top: 20rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 4rpx 8rpx 20rpx 1rpx rgba(218, 218, 218, 0.5);
		border-radius: 10rpx;
		border: 1rpx solid rgba(242, 242, 242, 1);
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
	}
	
	.card-item>uni-view {
		padding-left: 20rpx;
		padding-right: 20rpx;
	}
	
	.card-til {
		font-size: 30rpx;
		font-weight: bold;
		line-height: 42rpx;
	}
	
	.card-content {
		padding-top: 40rpx;
		padding-bottom: 40rpx;
	}
	
	.card-minortil {
		font-size: 26rpx;
		font-weight: bold;
		line-height: 37rpx;
	}
	
	.card-tips {
		font-size: 22rpx;
		font-weight: 400;
		line-height: 30rpx;
	}
	
	.card-btn {
		text-align: center;
		font-size: 30rpx;
		font-weight: bold;
		color: rgba(71, 205, 151, 1);
		line-height: 80rpx;
		border-top: 2rpx solid rgba(241, 241, 241, 1);
	}
</style>
