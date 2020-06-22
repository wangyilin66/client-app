<template>
	<view class="top-tag">
		<view v-for="(item,index) in tagItem" :key="index" class="top-tag-item" :class="item.className" @tap="tagClick(index)"
		 v-bind:style="{'--actionPosition': actionPosition,'--actionWidth': actionWidth + 'px'}">
			<text>{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				actionPosition: 0,
				actionWidth: 20,
			}
		},
		mounted: function() {
			if (this.actionWidthType == 'long') {
				let idx, Awidth;
				this.tagItem.forEach(item => {
					if (item.className !== '') {
						idx = item.id
					}
				})
				uni.createSelectorQuery().in(this).selectAll(".top-tag-item").fields({
					size: true
				}, data => {
					this.actionWidth = data[idx].width
				}).exec();
			}
		},
		methods: {
			tagClick: function(idx) {
				this.$emit('tagClick', idx)
			}
		},
		props: {
			tagItem: {
				type: Array,
				required: true
			},
			actionWidthType: {
				type: String,
				default: 'long',
				// 只接受'short'/'long'
			}
		},
		watch: {
			tagItem: {
				handler(newVal) {
					if (this.actionWidthType == 'long') {
						let idx, Awidth;
						newVal.forEach(item => {
							if (item.className !== '') {
								idx = item.id
							}
						})
						uni.createSelectorQuery().in(this).selectAll(".top-tag-item").fields({
							size: true
						}, data => {
							this.actionWidth = data[idx].width
						}).exec();
					}
				},
				deep: true
			}
		}
	}
</script>

<style>
	.top-tag {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		width: 702rpx;
	}

	.top-tag-item {
		padding-top: 24rpx;
		padding-bottom: 12rpx;
	}

	.top-tag>uni-view {
		margin-right: 65rpx;
		font-size: 30rpx;
		font-weight: 400;
		color: rgba(29, 29, 29, 1);
		line-height: 42rpx;
	}

	.top-tag .top-tag-action {
		font-weight: bold;
		color: rgba(71, 205, 151, 1);
		position: relative;
	}

	.top-tag-action::after {
		position: absolute;
		content: '';
		width: var(--actionWidth);
		left: calc(50% - var(--actionWidth)/2);
		bottom: 0px;
		height: 6rpx;
		background: rgba(71, 205, 151, 1);
		border-radius: 3rpx;
	}
</style>
