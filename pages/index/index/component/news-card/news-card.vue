<template>
	<view class="news-img-box">
		<view class="news-img-left news-img-card">
			<image :src="newsImg[0].src" mode="widthFix" />
			<text class="news-img-tips">{{newsImg[0].tips}}</text>
			<text class="news-img-text">{{newsImg[0].text}}</text>
		</view>
		<view class="news-img-right">
			<view class="news-img-card">
				<image :src="newsImg[1].src" mode="widthFix" />
				<text class="news-img-tips" style="background-color: #77A996">{{newsImg[1].tips}}</text>
				<text class="news-img-text">{{newsImg[1].text}}</text>
			</view>
			<view class="news-img-card">
				<image :src="newsImg[2].src" mode="widthFix" />
				<text class="news-img-tips" style="background-color: #AA7878">{{newsImg[2].tips}}</text>
				<text class="news-img-text">{{newsImg[2].text}}</text>
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
			newsImg:{
				type:Array,
				required:true
			}
		}
	}
</script>

<style>
	.news-card {
		padding-top: 24rpx;
		padding-bottom: 48rpx;
		padding-left: 24rpx;
		padding-right: 24rpx;
	}
	
	.news-til {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 24rpx;
	}
	
	.news-til uni-text {
		font-size: 34rpx;
		font-weight: bold;
		color: rgba(29, 29, 29, 1);
		line-height: 48rpx;
	}
	
	.news-til uni-view {
		font-size: 26rpx;
		font-weight: bold;
		color: rgba(71, 205, 151, 1);
		line-height: 38rpx;
	}
	
	.news-img-box {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: space-between;
	}
	
	.news-img-right {
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.news-img-card {
		position: relative;
	}
	
	.news-img-left uni-image,
	.news-img-right uni-image {
		width: 340rpx;
	}
	
	.news-img-tips {
		position: absolute;
		top: 0;
		width: 110rpx;
		height: 44rpx;
		line-height: 44rpx;
		text-align: center;
		font-size: 24rpx;
		color: white;
	}
	
	.news-img-left .news-img-tips {
		left: 0;
		border-top-left-radius: 12rpx;
		border-bottom-right-radius: 12rpx;
		background-color: #A99E78;
	}
	
	.news-img-right .news-img-tips {
		right: 0;
		border-top-right-radius: 12rpx;
		border-bottom-left-radius: 12rpx;
		background-color: #77A996;
	}
	
	.news-img-text {
		width: 308rpx;
		height: 42rpx;
		padding-top: 32rpx;
		padding-left: 16rpx;
		padding-right: 16rpx;
		position: absolute;
		left: 0;
		bottom: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 30rpx;
		font-weight: 500;
		line-height: 42rpx;
		color: white;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(102, 102, 102, 1) 100%);
		border-radius: 10rpx;
	}
</style>
