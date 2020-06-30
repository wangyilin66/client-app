<template>
	<view class="sec_content">
		<view class="sticky-box">
			<nav-bar :barColor="barColor" :navBg="navBg" :navColor="'#ffffff'" isBack :imgUrl="navTipsImgUrl" :imgSize="48"
			 @backChange="backChange" @tipsChange="tipsChange"></nav-bar>
		</view>
		<view class="wrap">
			<u-swiper :list="imgList" mode="number" indicator-pos="bottomRight" height="460" circular></u-swiper>
		</view>
		<view class="til-box">
			<view class="til">{{til}}</view>
			<view class="light-til">{{lightTil}}</view>
		</view>
		<card-con :cardData="cardData" @shell="shell"  @deal="deal"  @rentout="rentout"></card-con>
		
		<info-box :infoContent="infoContent"></info-box>
	</view>
</template>

<script>
	import navBar from '@/components/component/nav-bar/nav-bar.vue'
	import topPopup from '@/components/component/top-popup/top-popup.vue'
	import houseList from './component/house-list/house-list.vue'
	import cardCon from './component/card-con/card-con.vue'
	import infoBox from './component/info-box/info-box.vue'

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
				],
				til: '福雅居',
				lightTil: '同福',
				cardOption: {

				},
				cardData: {
					month: '',
					price: 50000,
					percent: 11.34,
					sell: 8,
					dealHistory: 5,
					rentout: 3
				},
				infoContent:[
					{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},{
						label:'建成年代',
						text:'2012年'
					},
				]
			}
		},
		mounted(){
			
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
			},
			shell: function(){
				console.log('用户点击了售房')
			},
			deal: function(){
				console.log('用户点击了历史成交')
			},
			rentout: function(){
				console.log('用户点击了租房')
			},
		},
		components: {
			navBar,
			topPopup,
			houseList,
			cardCon,
			infoBox
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

	.til-box {
		padding: 0 24rpx;
		position: relative;
		top: -50rpx;

		.til {
			font-size: 40rpx;
			font-weight: bold;
			color: $u-main-color;
			line-height: 80rpx;
		}

		.light-til {
			font-size: 30rpx;
			line-height: 40rpx;
			color: $u-light-color;
		}
	}
</style>
