<template>
	<view class="sec_content">
		<view class="sticky-box">
			<nav-bar :barColor="barColor" :navBg="navBg" :navColor="'#ffffff'" isBack :imgUrl="navTipsImgUrl" :imgSize="48"
			 @backChange="backChange" @tipsChange="tipsChange"></nav-bar>
		</view>
		<view class="wrap">
			<u-swiper :list="imgList" mode="number" indicator-pos="bottomRight" height="460" circular></u-swiper>
		</view>
	</view>

</template>

<script>
	import navBar from '@/components/component/nav-bar/nav-bar.vue'
	import topPopup from '@/components/component/top-popup/top-popup.vue'
	import houseList from './component/house-list/house-list.vue'

	export default {
		name: 'sec_content',
		data() {
			return {
				barColor: '',
				navBg: '',
				navTipsImgUrl: '/static/images/esf_fenxiang@2x.png',
				imgList: [{
						image: '/static/images/wrap.png'
					},
					{
						image: '/static/images/wrap.png'
					},
					{
						image: '/static/images/wrap.png'
					}
				]
			}
		},
		methods: {
			backChange: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			tipsChange: function() {
				uni.navigateTo({
					path: ''
				})
			}
		},
		components: {
			navBar,
			topPopup,
			houseList
		}
	}
</script>

<style lang='scss' scoped>
	.sticky-box {
		position: sticky;
		top: 0;
		z-index: 9999
	}

	.wrap {
		width: 100%;
		height: 460rpx;
		position: relative;
		top: -100rpx;
	}
</style>
