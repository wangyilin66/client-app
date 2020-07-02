<template>
	<view class="container">
		<status-bar :barColor="barColor"></status-bar>
		<module-box :paddingTop="20" :paddingBottom="20" :hasMargin="false">
			<nav-bar></nav-bar>
		</module-box>
			<view class="swipe">
				<uni-swiper-dot :info="swiperInfo" :current="swiperCurrent" mode="round" :dotsStyles="dotsStyles">
					<swiper class="swiper-box" :autoplay="true" :interval="3000" :duration="1000" :circular='true' @change="swiperChange">
						<swiper-item v-for="(item,index) in swiperInfo" :key="index">
							<view class="swiper-item">
								<image :src="item.src" mode="widthFix" />
							</view>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
		<module-box :hasMargin="false">
			<icon-grid :gridData="mainIcon" :fontSize="30" :rowNum="3" :imgSize="100" @navToGo="navToGo"></icon-grid>
			<icon-grid :gridData="minorIcon" :flexWrap="'wrap'" :rowNum="5" :imgSize="86" @navToGo="navToGo"></icon-grid>
		</module-box>
		<module-box :paddingBottom="24" :paddingTop="24">
			<card-item :cardData="cardItem"></card-item>
		</module-box>
		<module-box :paddingBottom="24" :paddingTop="12">
			<module-title :title="newsTil" :hasborder="0"></module-title>
			<news-card :newsImg="newsImg"></news-card>
		</module-box>
		<module-box :paddingBottom="24" :paddingTop="12">
			<top-tag :tagItem="tagItem" :actionWidthType="actionWidthType" @tagClick="tagClick"></top-tag>
			<view style="height:12rpx;"></view>
			<house-list :listData="listData"></house-list>
		</module-box>


	</view>
</template>

<script>
	import statusBar from '@/components/component/status-bar/status-bar.vue'
	import moduleBox from '@/components/component/module-box/module-box.vue'
	import navBar from './component/nav-bar/nav-bar.vue'
	import cardItem from './component/card-item/card-item.vue'
	import newsCard from './component/news-card/news-card.vue'
	import iconGrid from '@/components/component/icon-grid/icon-grid.vue'
	import moduleTitle from '@/components/component/module-title/module-title.vue'
	import houseList from '@/components/component/house-list/house-list.vue'
	import topTag from '@/components/component/top-tag/top-tag.vue'
	import uniSwiperDot from "@/components/uni-component/uni-swiper-dot/uni-swiper-dot.vue"


	export default {
		data() {
			return {
				barColor: '122E67',
				swiperInfo: [{
						src: '/static/images/index/home_banner.png'
					},
					{
						src: '/static/images/index/home_banner.png'
					},
					{
						src: '/static/images/index/home_banner.png'
					}
				],
				swiperCurrent: 0,
				dotsStyles: {
					width: 8,
					height: 4,
					backgroundColor: 'rgba(255,255,255,0.6)',
					selectedBackgroundColor: 'rgba(255,255,255,1)',
					border: '0px',
					selectedBorder: "0px",
				},
				mainIcon: [{
						icon: '/static/images/index/home_used.png',
						text: '二手房',
						navPath:"/pages/index/secondary/sec_index/index"
					},
					{
						icon: '/static/images/index/home_new.png',
						text: '新房'
					},
					{
						icon: '/static/images/index/home_rent.png',
						text: '租房'
					},
				],
				minorIcon: [{
						icon: '/static/images/index/home_youxuanhaofang.png',
						text: '优选好房'
					}, {
						icon: '/static/images/index/home_shangpu.png',
						text: '商铺办公',
					},
					{
						icon: '/static/images/index/home_fangdaijisuan.png',
						text: '房贷计算',
					}, {
						icon: '/static/images/index/home_maifang.png',
						text: '卖房',
					}, {
						icon: '/static/images/index/home_jianloubang.png',
						text: '捡漏榜',
					},
					{
						icon: '/static/images/index/home_xiaoquguanli.png',
						text: '找小区',
					},
					{
						icon: '/static/images/index/home_gujia.png',
						text: '房屋估价',
					},
					{
						icon: '/static/images/index/home_dituzhaofang.png',
						text: '地图找房',
					},
					{
						icon: '/static/images/index/home_liucheng.png',
						text: '买卖流程',
					},
					{
						icon: '/static/images/index/home_zixun.png',
						text: '房产资讯',
					},
				],
				cardItem: [{
						til: '帮我找房',
						minortil: '全城经纪人为您找房',
						tips: '定制推荐/极速响应/专属推荐',
						btn: '立即找房'
					},
					{
						til: '我的房子',
						minortil: '查看房屋估值走势',
						tips: '随时掌握小区均价',
						btn: '立即查看'
					}
				],
				newsTil: {
					height: 80,
					line: false,
					text: "资讯精选",
					tilFontSize: 34,
					icon: false,
					link: true,
					linkText: "更多",
					linkFontSize: 26
				},
				newsImg: [{
					src: '/static/images/index/home_zx_pic1.png',
					tips: '低价2居',
					text: '社区生活上线啦快来快来'
				}, {
					src: '/static/images/index/home_zx_pic2.png',
					tips: '精装房源',
					text: '盘点线上流量流量流量流量流量'
				}, {
					src: '/static/images/index/home_zx_pic3.png',
					tips: '热门聚焦',
					text: '盘点线上流量流量流量流量流量'
				}, ],
				tagItem: [{
						id: 0,
						text: '二手房',
						className: 'top-tag-action',
					},
					{
						id: 1,
						text: '新房',
						className: '',
					},
					{
						id: 2,
						text: '租房',
						className: '',
					},
				],
				actionWidthType: "short",
				listData: [{
						id: 0,
						imgUrl: '/static/images/index/home_fangzi_pic.png',
						til: '新华联锦园',
						hasLabel:true,
						labelUrl:'/static/images/index/home_jiang.png',
						total: 600,
						infos: '3室2厅/140㎡/朝南',
						price: 14000,
						site: '地铁瀛海站西中等装修超大阳台超大阳台',
						tips: [
							'满五年',
							'VR看装修',
							'近地铁',
							'商圈多'
						],
						address: '海淀区 中关村'
					},
					{
						id: 1,
						imgUrl: '/static/images/index/home_fangzi_pic.png',
						til: '新华联锦园',
						total: 600,
						infos: '3室2厅/140㎡/朝南',
						price: 14000,
						site: '地铁瀛海站西中等装修超大阳台超大阳台',
						tips: [
							'满五年',
							'VR看装修',
							'近地铁',
							'商圈多'
						],
						address: '海淀区 中关村'
					},
					{
						id: 2,
						imgUrl: '/static/images/index/home_fangzi_pic.png',
						til: '新华联锦园',
						total: 600,
						infos: '3室2厅/140㎡/朝南',
						price: 14000,
						site: '地铁瀛海站西中等装修超大阳台超大阳台',
						tips: [
							'满五年',
							'VR看装修',
							'近地铁',
							'商圈多'
						],
						address: '海淀区 中关村'
					},
				]
			}
		},
		// created(){
		// 	this.$u.api.login({phone:12345678901,msgCode:1234}).then(res=>{
		// 		console.log(res)
		// 	}).catch(err=>{
		// 		console.log(err)
		// 	})
		// },
		methods: {
			swiperChange(e) {
				this.swiperCurrent = e.detail.current;
			},
			tagClick(idx) {
				let tagItem = this.$data.tagItem;
				tagItem.forEach(item => {
					item.className = ''
				});
				tagItem[idx].className = 'top-tag-action';
			},
			navToGo(idx){
				uni.navigateTo({
					url:this.mainIcon[idx].navPath
				})
			}
		},
		components: {
			statusBar,
			topTag,
			moduleBox,
			navBar,
			uniSwiperDot,
			iconGrid,
			cardItem,
			moduleTitle,
			newsCard,
			houseList
		}
	}
</script>

<style lang="scss">
	.swipe{
		width:750rpx;
	}
	.swiper-box uni-image {
		width: 702rpx;
	}
</style>
