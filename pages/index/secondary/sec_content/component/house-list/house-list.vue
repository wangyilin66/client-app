<template>
	<view class="house-list">
		<view class="list-item" v-for="(item,idx) in listData" :key="idx">
			<view>
				<view class='img-left'>
					<image :src="item.imgUrl"></image>
				</view>
				<view class='info-box'>
					<view class="info-row-one">
						<view class='info-til'>{{item.til}}</view>
					</view>
					<view class="info-row-two">
						<view class='info-infos'>{{item.infos}}</view>
					</view>
					<view class="info-row-three">
						<view v-for="(tips,idx) in item.tips" :key="idx">{{tips}}</view>
					</view>
					<view class="info-row-four">
						<view class='info-total'><text class="u-font-30">{{item.total}}</text>万</view>
						<view class='info-price'>{{item.price}}元/㎡</view>
					</view>
				</view>
			</view>
			<view class="linkman-box" >
				<view class="linkman-left">
					<view class="linkmanImg">
						<image :src="item.linkmanImgUrl" style="width:96rpx;height:96rpx"></image>
					</view>
					<view class="linkman-info" style="flex-direction:column">
						<view><text class="u-font-30" style="font-weight:600">{{item.linkmanName}}</text><text v-if="item.linkmanCom" class="linkman-com">{{item.linkmanCom}}</text></view>
						<view class="u-tips-color">{{item.linkmanTips}}</view>
					</view>
				</view>
				<view class="linkman-right">
					<view>
						<image src='/static/images/my_guanzhu_liaotian@2x.png'></image>
					</view>
					<view>
						<image src='/static/images/my_guanzhu_gdianhua@2x.png'></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: {
			listData: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style>
	.house-list{
		padding:40rpx 0;
	}
	uni-image{
		width:100%;
		height:100%;
	}
	.list-item>uni-view{
		width: 702rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		
		margin: auto;
	}

	.img-left uni-image {
		width: 300rpx;
		height: 200rpx;
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

	.info-row-one>uni-view {
		display: flex;
		justify-content: flex-start;
	}

	.info-til {
		color: rgba(29, 29, 29, 1);
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
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		font-size: 22rpx;
		color: rgba(138, 138, 138, 1);
	}

	.info-row-three uni-view {
		padding: 4rpx;
		background: rgba(235, 236, 240, 1);
		border-radius: 2rpx;
		margin-right: 12rpx;
	}

	.info-row-four {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 24rpx;
		color: rgba(155, 155, 155, 1);
	}

	.info-row-four uni-view:nth-child(1) {
		margin-right: 40rpx;
	}
	.linkman-box{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding:32rpx 0 64rpx;
	}
	.linkman-left{
		flex:10;
		display:flex;
		flex-direction: row;
		justify-content: flex-start;
	}
	.linkmanImg{
		width:96rpx;
		height:96rpx;
		overflow: hidden;
		border-radius: 50%;
		margin-right: 18rpx;
	}
	.linkman-info{
		display:flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.linkman-com{
		font-size:22rpx;
		padding:4rpx;
		background-color: #efefef;
		color:#808080;
		border-radius: 12rpx;
		margin-left:12rpx;
	}
	
	.linkman-right{
		flex:4;
		display:flex;
		justify-content: space-between;
	}
	.linkman-right>uni-view{
		width:64rpx;
		height:64rpx;
	}
</style>
