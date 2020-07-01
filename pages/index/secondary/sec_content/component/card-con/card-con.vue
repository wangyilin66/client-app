<template>
	<view class="card-box">
		<view class='u-flex card-body'>
			<view class="u-flex">
				<view>
					<view class="u-type-error"><text>{{cardData.price}}</text>元/平</view>
					<view class='u-tips-color'>{{cardData.month}}月参考均价</view>
				</view>
				<view class="u-flex u-font-30" style="font-weight:bold">
						<view>比上月</view>
						<view class="target" :class="{'target-lower':parseInt(cardData.percent) < 0,'target-add':parseInt(cardData.percent) > 0}"></view>
						<view>{{Math.abs(this.cardData.percent)}}%</view>
				</view>
			</view>
			<view class="u-flex">
				<view>
					<view><text>{{cardData.sell}}</text>套</view>
					<view class="tipsBtn u-tips-color" @click="shellClick">在售房源<u-icon class="u-p-l-10" name="arrow-right" :size="24"></u-icon></view>
				</view>
				<view>
					<view><text>{{cardData.dealHistory}}</text>套</view>
					<view class="tipsBtn u-tips-color"  @click="dealClick">历史成交<u-icon class="u-p-l-10" name="arrow-right" :size="24"></u-icon></view>
				</view>
				<view>
					<view><text>{{cardData.rentout}}</text>套</view>
					<view class="tipsBtn u-tips-color" @click="rentoutClick">在租房源<u-icon class="u-p-l-10" name="arrow-right" :size="24"></u-icon></view>
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
		methods:{
			shellClick(){
				this.$emit('shell')
			},
			dealClick(){
				this.$emit('deal')
			},
			rentoutClick(){
				this.$emit('rentout')
			},
		},
		props: {
			cardData: Object
		},
	}
</script>

<style lang="scss" scoped>
	.card-box {
		width: 702rpx;
		height: 300rpx;
		margin: 0rpx 24rpx 24rpx 24rpx;
		padding: 40rpx 0;
		background-color: #ffffff;
		box-shadow: 4px 4px 20px 0px rgba(200, 200, 200, 0.5);
		border-radius: 20px;

		.card-body {
			height: 100%;
			flex-direction: column;
			justify-content: space-between;

			>uni-view {
				width: 100%;
				justify-content: space-around;
			}

			uni-text {
				font-size: 50rpx;
				padding-right:20rpx;
			}

			.target {
				width: 0;
				height: 0;
				border: 18rpx solid transparent;
				position:relative;
				margin:0 10rpx;
				transform: scaleX(0.6);
			}
			.target-lower{
				border-top-color: $u-type-primary;
				top:10rpx;
			},
			.target-add{
				border-bottom-color: $u-type-error;
				bottom:10rpx;
			},
			.tipsBtn{
				
			}
		}
	}
</style>
