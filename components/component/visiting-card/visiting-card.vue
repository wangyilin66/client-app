<template>
	<view class='visiting-card'>
		<view class="userImg">
			<image :src="visitData.userImgUrl" mode="widthFix"></image>
			<text>{{visitData.userName}}</text>
		</view>
		<view class="userInfo">
			<text class='bbb-text'>他已帮助</text>
			<text class="red-text" style="font-size:40rpx">{{visitData.helpPerson}}人</text>
			<text class='bbb-text'>解答问题</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods: {

		},
		props: {
			visitData:{
				type:Object,
				required: true,
			}
		}
	}
</script>

<style>
	.visiting-card{
		display:flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-around;
		box-shadow:4rpx 8rpx 20rpx 1rpx rgba(218,218,218,0.5);
		border-radius:10rpx;
		width:280rpx;
		height:132rpx;
		padding-top:24rpx;
		padding-bottom:20rpx;
		padding-left:20rpx;
		padding-right:20rpx;
		background-color:white;
	}
	.userImg{
		display:flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-around;
		font-size:30rpx;
		text-align: center;
		letter-spacing: 4rpx;
		font-weight: 500;
	}
	.userImg uni-image{
		width:90rpx;
		border-radius: 46rpx;
		overflow: hidden;
	}
	.userInfo{
		display:flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-around;
		font-size:26rpx;
		text-align: center;
		letter-spacing: 4rpx;
		font-weight: 500;
	}
</style>
