<template>
	<view class="nav-bar">
		<view class='top-bg'>
			<view></view>
		</view>
		<view class='top-item'>
			<search />
			<view class='map-box'>
				<image src="@/static/images/index/home_icon_map.png" mode="widthFix"></image>
				<text>地图</text>
			</view>
		</view>
	</view>
</template>

<script>
	import search from './search/search.vue';
	export default {
		data(){
			return{
				
			}
		},
		components:{
			search
		}
	}
</script>

<style>
	.top-bg {
		position: absolute;
		top: var(--status-bar-height);
		left: 0;
		width: 750rpx;
		height: 391rpx;
		z-index: 0;
		overflow: hidden;
		background-color: #ffffff;
	}
	
	.top-bg uni-view {
		width: 1000rpx;
		height: 391rpx;
		background-color: #122E67;
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
		margin-left: -125rpx;
	}
	
	.top-item {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		position: relative;
		z-index: 1;
	}
	.map-box {
		font-size: 28rpx;
		color: #ffffff;
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}
	
	.map-box image {
		width: 32rpx;
		height: 32rpx;
		margin-right: 8rpx;
	}
</style>
