<template>
	<view class="faqs-list-box">
		<view class="faqs-list-item" @tap="goaskdetails()" v-for="(item,index) in faqsData" :key="index" >
			<view class="query">{{item.query}}</view>
			<view class="answer">
				<image src="../../../static/images/ykan/youkan_da.png" mode="widthFix"></image>
				<view class="answer-right">
					<view class="answer-text">{{item.answer}}</view>
					<view class="faqs-info bbb-text">
						<view>共<text class="main-text" style="font-size:30rpx;padding-left:6rpx;padding-right:6rpx;">{{item.answerNum}}</text>个回答</view>
						<view>更新于<text style="padding-left:8rpx">{{item.updateTime}}</text></view>
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
			faqsData: {
				type: Array,
				required: true,
			}
		},
		methods: {
			goaskdetails() {
				let id = 0;
				this.$emit("navToGo",id)
			}
		}
	}
</script>

<style>
	.faqs-list-item {
		padding-top: 28rpx;
		padding-bottom: 28rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		border-top: 0;
		border-left: 0;
		border-right: 0;
		border-bottom-width: 2rpx;
		border-style: solid;
		border-color: rgba(235, 235, 235, 1);
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
	}

	.query {
		font-size: 34rpx;
		line-height: 68rpx;
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.answer {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: flex-start;
	}

	.answer uni-image {
		width: 30rpx;
		padding-top: 8rpx;
	}

	.answer-right {
		width: 648rpx;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: space-between;
	}

	.answer-text {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		font-size: 30rpx;
		font-weight: 400;
		color: rgba(128, 128, 128, 1);
		line-height: 42rpx;
	}

	.faqs-info {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		font-size: 26rpx;
		padding-top: 24rpx;
	}
</style>
