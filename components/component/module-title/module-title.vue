<template>
	<view @click="titleChange" class="module-title" v-bind:style="{borderBottomWidth:hasborder+'rpx',height:title.height+'rpx'}">
		<view class="til-left">
			<view v-if="title.line" class="til-line"></view>
			<view v-bind:style="{fontSize:title.tilFontSize+'rpx'}">{{title.text}}</view>
		</view>
		<view class="til-right">
			<uni-icons v-if="title.icon" type="arrowright" size="20"></uni-icons>
			<text class="til-link" v-if="title.link" v-bind:style="{fontSize:title.linkFontSize+'rpx'}">{{title.linkText}}</text>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-component/uni-icons/uni-icons.vue'
	export default {
		data() {
			return {
				actionPosition: 0
			}
		},
		methods: {
			titleChange: function(e) {

			}
		},
		props: {
			title: {
				type: Object,
				required: true
			},
			hasborder: {
				type: Number,
				default: 1
			}
		},
		components: {
			uniIcons
		}
	}
</script>

<style>
	.module-title {
		display: flex;
		flex-direction: row;
		;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: center;
		border-style: solid;
		border-color: rgba(235, 235, 235, 1);
		border-top-width: 0;
		border-left-width: 0;
		border-right-width: 0;
	}

	.til-left {
		font-size: 40rpx;
		font-weight: bold;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
	}

	.til-line {
		width: 6rpx;
		height: 30rpx;
		margin-right: 12rpx;
		background: rgba(0, 0, 0, 1);
	}

	.til-right {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
	}
	.til-link {
		color: #47CD97;
		font-weight: 500;
	}
</style>
