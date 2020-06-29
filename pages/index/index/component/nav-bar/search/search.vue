<template>
	<view class='search'>
		<view class="location-box">
			<view class="location-text">{{locText}}</view>
			<uni-icons type="arrowdown" size="10" color="#ffffff"></uni-icons>
			<view class="line"></view>
		</view>
		<view class='input-box'>
			<uni-icons type="search" size="10" color="#bbbbbb"></uni-icons>
			<input type="text" :value="iptVal" :placeholder="iptPHVal" placeholder-style="color:#bbb" />
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-component/uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				iptVal: "",
				iptPHVal: "珠江帝景",
				locText: "北京"
			}
		},
		methods: {

		},
		components:{
			uniIcons
		}
	}
</script>

<style>
	.search {
		width: 566rpx;
		height: 80rpx;
		border-style: solid;
		border-color: rgba(230, 230, 230, 0.3);
		border-width: 1px;
		line-height: 80rpx;
		border-radius: 40rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
	}
	.location-box{
		padding-left: 40rpx;
		display:flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
		width:136rpx;
	}
	.location-text{
		color:white;
		font-size:30rpx;
	}
	.location-box .line{
		width:4rpx;
		height:26rpx;
		background-color:white;
	}
	.input-box{
		width:318rpx;
		padding-left:36rpx;
		padding-right:36rpx;
		display:flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: space-between;
	}
	.input-box input {
		font-size: 24rpx;
		padding:16rpx;
	}
</style>
