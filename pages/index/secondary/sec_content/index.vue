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
		<card-con :cardData="cardData" @shell="shell" @deal="deal" @rentout="rentout"></card-con>
		<info-box :infoContent="infoContent"></info-box>
		<circum-box :circumData="circumData"></circum-box>
		<houseing-list :houseingData="houseingData"></houseing-list>
		<recommend-box :recData="recData"></recommend-box>
	</view>
</template>

<script>
	import navBar from '@/components/component/nav-bar/nav-bar.vue'
	import houseingList from './component/houseing-list/houseing-list.vue'
	import cardCon from './component/card-con/card-con.vue'
	import infoBox from './component/info-box/info-box.vue'
	import circumBox from './component/circum-box/circum-box.vue'
	import recommendBox from './component/recommend-box/recommend-box.vue'

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
				infoContent: [{
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, {
					label: '建成年代',
					text: '2012年'
				}, ],
				circumData: [{
					name: '交通',
					content: '地铁：距离长寿路200米，距离xxx米，距离长寿路200米，距离xxx米，距离长寿路200米，距离xxx米'
				}, {
					name: '医疗',
					content: '医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗医疗'
				}, {
					name: '生活',
					content: '生活生活生活生活生活生活'
				}, {
					name: '休闲',
					content: '休闲休闲休闲休闲休闲休闲休闲'
				}, ],
				houseingData: {
					tabs: [{
						name: '在售房源'
					}, {
						name: '在租房源'
					}],
					swipers: [
						[
							{
								imgUrl:'/static/images/wrap.png',
								til:'新华联锦园 户型方正 采光 充足',
								infos:'3室2厅/140㎡/朝南',
								tips:['满五年','VR看装修','近地铁'],
								total:580,
								price:14000,
								linkmanImgUrl:'/static/images/wrap.png',
								linkmanName:'郭京飞',
								linkmanCom:'优品',
								linkmanTips:'期待与您保持沟通'
							},
							{
								imgUrl:'/static/images/wrap.png',
								til:'新华联锦园 户型方正 采光 充足',
								infos:'3室2厅/140㎡/朝南',
								tips:['满五年','VR看装修','近地铁'],
								total:580,
								price:14000
							}
						],[
							{
								imgUrl:'/static/images/wrap.png',
								til:'新华联锦园 户型方正 采光 充足',
								infos:'3室2厅/140㎡/朝南',
								tips:['满五年','VR看装修','近地铁'],
								total:580,
								price:14000
							},
							{
								imgUrl:'/static/images/wrap.png',
								til:'新华联锦园 户型方正 采光 充足',
								infos:'3室2厅/140㎡/朝南',
								tips:['满五年','VR看装修','近地铁'],
								total:580,
								price:14000
							}
						]
						
					]
				}
			}
		},
		mounted() {

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
			shell: function() {
				console.log('用户点击了售房')
			},
			deal: function() {
				console.log('用户点击了历史成交')
			},
			rentout: function() {
				console.log('用户点击了租房')
			},
		},
		components: {
			navBar,
			cardCon,
			infoBox,
			circumBox,
			houseingList,
			recommendBox
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
