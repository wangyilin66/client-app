<template>
	<view class="news-list">
		<view class="list-item" v-for="(item,idx) in listData" @click="gosubscription(idx)" v-bind:style="{height:item.itemHeight + 'rpx'}" >
			<view class="img-left">
				<image :src="item.imgUrl" v-bind:style="{width:item.imgWidth + 'rpx',height:item.imgHeight + 'rpx'}"></image>
				<view >
					<uni-badge v-if="hasBadge"  :text="item.Badge" type="error" class="news-badge" v-bind:style="{left:item.imgWidth - 30 + 'rpx'}"></uni-badge>
				</view>
			</view>
			<view class="list-box">
				<view class="list-top">
					<view>
						<view class='list-til'>{{item.til}}</view>
						<view class="list-label">{{item.label}}</view>
					</view>
					<view class="list-right-text">{{item.listRightText}}</view>
				</view>
				<view class="list-bottom one-text">{{item.concent}}</view>
			</view>
			<view class="border-line" v-if="hasBorder"></view>
		</view>
	</view>

</template>

<script>
	import uniBadge from "@/components/uni-component/uni-badge/uni-badge.vue"

	export default {
		data() {
			return {

			}
		},
		methods:{
			gosubscription:function(idx){
				this.$emit("gosubscrip",idx)
			}
		},
		props: {
			listData: {
				type: Array,
				required: true
			},
			hasBorder: {
				type: Boolean,
				default: false
			},
			hasBadge:{
				type: Boolean,
				default: false
			}
		},
		components: {
			uniBadge
		}
	}
</script>

<style>
	.news-list {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}
	.img-left{
	}
	.news-badge{
		position: absolute;
		top:0;
	}
	.list-item+.list-item {
		margin-top: 40rpx;
	}

	.list-box {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-evenly;
		width: 520rpx;
		height: 100%;
	}

	.list-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.list-top>uni-view {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.list-til {
		color: rgba(29, 29, 29, 1);
		font-size: 30rpx;
		font-weight: bold;
	}

	.list-label {
		background: rgba(239, 239, 239, 1);
		border-radius: 13rpx;
		font-size: 22rpx;
		font-weight: 400;
		color: rgba(128, 128, 128, 1);
		line-height: 30rpx;
		margin-left: 12rpx;
		padding-left: 12rpx;
		padding-right: 12rpx;
	}

	.list-right-text {
		font-size: 22rpx;
		font-weight: 400;
		color: rgba(128, 128, 128, 1);
	}

	.list-bottom {
		font-size: 26rpx;
		font-weight: 400;
		color: rgba(128, 128, 128, 1);
	}

	.border-line {
		width: 560rpx;
		height: 2rpx;
		background-color: rgba(235, 235, 235, 1);
		position: absolute;
		right: -48rpx;
		bottom: -24rpx;
	}
</style>
