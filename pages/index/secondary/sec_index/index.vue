<template>
	<view class="secondary">
		<view class="sticky-box">
			<view>
				<nav-bar :barColor="'#ffffff'" :navBg="'#ffffff'" :navColor="'#000000'" isBack isSearch :placeholader="'请输入小区或商圈名'" :iconName="'chat'"
				 isBadge @backChange="backChange" @tipsChange="tipsChange"></nav-bar>
			</view>
			<top-popup :mask="true" :maskClose="true" :popupTab="popupTab" :popupBtn="popupBtn" :btnHeight="120" :btnfontSize="30"
			 @btnClick="btnClick">
				<view style="height:200rpx;background-color:#eee"></view>
			</top-popup>
		</view>
		<house-list :listData='listData' @heart="heart" @listChange="listChange"></house-list>
	</view>
</template>

<script>
	import navBar from '@/components/component/nav-bar/nav-bar.vue'
	import topPopup from '@/components/component/top-popup/top-popup.vue'
	import houseList from './component/house-list/house-list.vue'

	export default {
		name: 'secondary',
		data() {
			return {
				popupTab: ['区域', '价格', '类型', '楼龄', '排序'],
				popupBtn: [{
					text: '重置',
					bgColor: '#4a90e2',
					color: '#ffffff',
					width: '184rpx',
					isClose: false,
				}, {
					text: '确定',
					bgColor: '#47CD97',
					color: '#ffffff',
					width: '566rpx',
					isClose: true,
				}],
				listData: [{
					id: 0,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				}, {
					id: 1,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:true,
				}, {
					id: 2,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				}, {
					id: 3,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				},{
					id: 0,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				}, {
					id: 1,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:true,
				}, {
					id: 2,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				}, {
					id: 3,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				},{
					id: 0,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				}, {
					id: 1,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:true,
				}, {
					id: 2,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				}, {
					id: 3,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart:false,
				}],

			}
		},
		methods: {
			btnClick: function(idx) {
				console.log(idx)
			},
			heart:function(idx){
				this.listData[idx].isHeart =!this.listData[idx].isHeart
			},
			listChange:function(idx){
				console.log('id='+this.listData[idx].id+'的商品被点击了')
				uni.navigateTo({
					url:'/pages/index/secondary/sec_content/index?id='+this.listData[idx].id
				})
			},
			backChange:function(){
				uni.navigateBack({
					delta:1
				})
			},
			tipsChange:function(){
				uni.navigateTo({
					url:''
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

<style>
	.sticky-box {
		position: sticky;
		top: 0;
		z-index:9999
	}
</style>
