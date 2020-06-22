<template>
	<view class="house-list">
		<view class="list-item" v-for="(item,index) in listData" :key='index'>
			<view class='img-left'>
				<image :src="item.imgUrl" mode='widthFix'></image>
			</view>
			<view class='info-box'>
				<view class="info-row-one">
					<view>
						<view class='info-til'>{{item.til}}</view>
						<image class="info-label" v-if="item.hasLabel" :src="item.labelUrl"></image>
					</view>
					<view class='info-total'>{{item.total}}万</view>
				</view>
				<view class="info-row-two">
					<view class='info-infos'>{{item.infos}}</view>
					<view class='info-price'>{{item.price}}元/㎡</view>
				</view>
				<view class="info-row-three">{{item.site}}</view>
				<view class="info-row-four">
					<view v-for="(tips,idx) in item.tips" :key="idx">{{tips}}</view>
				</view>
				<view class="info-row-five">{{item.address}}</view>
			</view>
		</view>
		<view class="list-add">查看更多二手房</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			listData:{
				type:Array,
				required:true
			}
		}
	}
</script>

<style>
	.list-item {
		width: 702rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding-top: 12rpx;
		padding-bottom: 12rpx;
	}
	
	.img-left uni-image {
		width: 300rpx;
	}
	
	.info-box {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-around;
		width: 382rpx;
	}
	
	.info-row-one {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-weight: bold;
	}
	
	.info-row-one>uni-view{
		display: flex;
		justify-content: flex-start;
	}
	
	.info-til {
		color: rgba(29, 29, 29, 1);
	}
	.info-label{
		width:30rpx;
		height:30rpx;
		align-self:flex-start;
		margin-left:6rpx;
	}
	.info-total {
		color: rgba(248, 60, 10, 1);
	}
	
	.info-row-two {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
	}
	
	.info-infos {
		font-size: 24rpx;
		color: rgba(29, 29, 29, 1);
	}
	
	.info-price {
		color: rgba(155, 155, 155, 1);
	}
	
	.info-row-three {
		font-size: 24rpx;
		color: rgba(29, 29, 29, 1);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.info-row-four {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		font-size: 22rpx;
		color: rgba(138, 138, 138, 1);
	}
	
	.info-row-four uni-view {
		padding: 4rpx;
		background: rgba(235, 236, 240, 1);
		border-radius: 2rpx;
	}
	
	.info-row-five {
		font-size: 24rpx;
		color: rgba(155, 155, 155, 1);
	}
	
	.list-add {
		margin: 20rpx auto 60rpx;
		width: 702rpx;
		padding: 24rpx 0;
		height: 58rpx;
		line-height: 58rpx;
		border-style: solid;
		border-width: 2rpx;
		border-color: #47cd97;
		border-radius: 4rpx;
		font-size: 24rpx;
		text-align: center;
		color: rgba(29, 29, 29, 1);
	}
</style>
