<template>
	<view>
		<view class="status-bar" :style="{backgroundColor:barColor}">
		</view>
		<view class='nav-bar u-flex u-flex-nowrap u-row-between' :style="{backgroundColor:navBg}">
			<view class="back-box" v-if="isBack" @click="backChange" :style="{'--color':navColor}">
				<u-icon name="arrow-left" :color="navColor" size="48"></u-icon>
			</view>
			<view class="con-box u-flex-2">
				<u-search v-if="isSearch" :placeholaer="placeholader" shape="round" border-color="#E6E6E6" margin="0 20rpx" height="80"
				 :show-action="false" :bg-color="searchBgColor"></u-search>
				<view v-if="titleShow">{{title}}</view>
			</view>
			<view class="tips-box" v-if="tipsShow" @tipsChange="tipsChange">
				<view v-if="tipsTextShow">
					<view>{{tipsText}}</view>
					<u-badge v-if="tipsTextShow && isBadge" type="error" :count="7" size="small" is-center></u-badge>
				</view>
				<view v-if="iconShow">
					<u-icon :name="iconName" :color="navColor" size="48"></u-icon>
					<u-badge v-if="iconShow && isBadge" type="error" :count="7" size="small" :offset="iconOffset"></u-badge>
				</view>
				<view v-if="imgShow">
					<image :src="imgUrl" :style="[{width:imgSize+'rpx'},{height:imgSize+'rpx'}]"></image>
					<u-badge v-if="imgShow && isBadge" type="error" :count="7" size="small" is-center></u-badge>
				</view>

			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'nav-bar',
		props: {
			barColor: {
				type: String,
				default: '#FFFFFF',
			},
			navBg: {
				type: String,
				required: false,
			},
			navColor: {
				type: String,
				required: false,
				default:'#ffffff'
			},
			isBack: {
				type: Boolean,
				required: false
			},
			isSearch: {
				type: Boolean,
				required: false
			},
			placeholader: {
				type: String,
				required: false,
				default: '请输入搜索内容'
			},
			searchBgColor: {
				type: String,
				required: false,
				default: '#ffffff'
			},
			title: {
				type: String,
				required: false
			},
			tipsText: {
				type: String,
				required: false
			},
			iconName: {
				type: String,
				required: false
			},
			imgUrl: {
				type: String,
				required: false
			},
			imgSize: {
				type: Number,
				default: 32,
			},
			isBadge: {
				type: Boolean,
				default: false,
			},
		},
		data() {
			return {
				titleShow: false,
				tipsShow: false,
				tipsTextShow: false,
				iconShow: false,
				imgShow: false,
				iconOffset: [0, -10]
			}
		},
		created() {
			if (this.title != '' && this.title) {
				this.titleShow = true
			}
			if (this.tipsText != '' && this.tipsText) {
				this.tipsTextShow = true
			}
			if (this.iconName != '' && this.iconName) {
				this.iconShow = true
			}
			if (this.imgUrl != '' && this.imgUrl) {
				this.imgShow = true
			}
			if (this.tipsTextShow || this.iconShow || this.imgShow) {
				this.tipsShow = true
			}
		},
		methods: {
			backChange() {
				this.$emit('backChange')
			},
			tipsChange(){
				this.$emit('tipsChange')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status-bar {
		position: relative;
		height: var(--status-bar-height);
		width: 100%;
		z-index:99;
	}
	.nav-bar {
		width: calc(100% -48rpx);
		height: 100rpx;
		padding-left: 24rpx;
		padding-right: 24rpx;
		position:relative;
		z-index:99;
	}

	.back-box {
		position: relative;
		left: -10rpx;
	}

	.back-box::before,
	.back-box::after {
		content: '';
		position: absolute;
		width: 6rpx;
		height: 4rpx;
		background-color: var(--color);
		border-radius: 50%;
	}

	.back-box::before {
		top: calc(50% - 2rpx);
		left: 30rpx;
	}

	.back-box::after {
		top: calc(50% - 2rpx);
		left: 40rpx;
	}

	.tips-box>view {
		position: relative;
	}
</style>
