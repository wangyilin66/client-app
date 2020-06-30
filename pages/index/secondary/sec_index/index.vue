<template>
	<view class="secondary">
		<view class="sticky-box">
			<view>
				<nav-bar :barColor="'#ffffff'" :navBg="'#ffffff'" :navColor="'#000000'" isBack isSearch :placeholader="'请输入小区或商圈名'"
				 :iconName="'chat'" isBadge @backChange="backChange" @tipsChange="tipsChange"></nav-bar>
			</view>
			<top-popup :mask="true" :maskClose="true" :popupTab="popupTab" :popupBtn="popupBtn" :btnHeight="120" :btnfontSize="30"
			 @btnClick="btnClick" @topTabChange="topTabChange">
				<view class="option-box">
					<scroll-option :firstList="areaList" :secondList="countyList" :thirdlyList="streetList" isCheck @check="checkChange"
					 @firstClick="firstClick" @secondClick="secondClick" v-if="popupActive == 0"></scroll-option>
					<section-option :sectionData="totalOption" @sectionChange="totalSectionChange" v-else-if="popupActive == 1"></section-option>
					<section-option :sectionData="roomOption" @sectionChange="roomSectionChange" v-else-if="popupActive == 2"></section-option>
					<section-option :sectionData="roomDurationOption" @sectionChange="roomDurationSectionChange" v-else-if="popupActive == 3"></section-option>
				</view>
			</top-popup>
		</view>
		<house-list :listData='listData' @heart="heart" @listChange="listChange"></house-list>
	</view>
</template>

<script>
	import navBar from '@/components/component/nav-bar/nav-bar.vue'
	import topPopup from '@/components/component/top-popup/top-popup.vue'
	import houseList from './component/house-list/house-list.vue'
	import scrollOption from './component/scroll-option/scroll-option.vue'
	import sectionOption from './component/section-option/section-option.vue'

	export default {
		name: 'secondary',
		data() {
			return {
				popupTab: ['区域', '价格', '类型', '楼龄', '排序'],
				popupActive: 0,
				areaList:[
					{
						val:'区域',
						checked:true,
					},{
						val:'地铁',
						checked:false,
					},{
						val:'附近',
						checked:false,
					}
				],
				countyList:[
					{
						val:'不限',
						checked:true
					},{
						val:'和平',
						checked:false
					},{
						val:'南开',
						checked:false
					},
					{
						val:'河西',
						checked:false
					},{
						val:'河北',
						checked:false
					},{
						val:'河东',
						checked:false
					},{
						val:'红桥',
						checked:false
					},{
						val:'西青',
						checked:false
					},{
						val:'北辰',
						checked:false
					},{
						val:'东丽',
						checked:false
					},{
						val:'津南',
						checked:false
					},{
						val:'塘沽',
						checked:false
					},{
						val:'开发区',
						checked:false
					},{
						val:'武清',
						checked:false
					},{
						val:'滨海新区',
						checked:false
					},
				],
				streetList: [{
					name: '不限',
					checked: false,
					disabled: true
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}, {
					name: '长虹街',
					checked: false,
					disabled: false
				}],
				totalOption: [{
					til: '价格区间（万）',
					hasIpt: true,
					iptMin: '',
					iptMinPlacehoder: '最低价格',
					iptMax: '',
					iptMaxPlacehoder: '最高价格',
					option:[{
						val: '80万以下',
						checked: false
					}, {
						val: '80-100万',
						checked: false
					}, {
						val: '100-150万',
						checked: false
					}, {
						val: '100-150万',
						checked: false
					}, {
						val: '150-200万',
						checked: false
					}, {
						val: '200-500万',
						checked: false
					}, {
						val: '500万以上',
						checked: false
					}]
				}],
				roomOption:[{
					til: '房型选择',
					hasIpt: false,
					option:[{
						val: '一室',
						checked: false
					}, {
						val: '二室',
						checked: false
					}, {
						val: '三室',
						checked: false
					}, {
						val: '四室',
						checked: false
					}, {
						val: '五室以上',
						checked: false
					}]
				}],
				roomDurationOption:[
					
				],
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
					isHeart: false,
				}, {
					id: 1,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: true,
				}, {
					id: 2,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: false,
				}, {
					id: 3,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: false,
				}, {
					id: 0,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: false,
				}, {
					id: 1,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: true,
				}, {
					id: 2,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: false,
				}, {
					id: 3,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: false,
				}, {
					id: 0,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: false,
				}, {
					id: 1,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: true,
				}, {
					id: 2,
					imgUrl: '/static/images/i ndex/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: false,
				}, {
					id: 3,
					imgUrl: '/static/images/index/home_fangzi_pic.png',
					til: '新华联锦园',
					infos: '海珠/塔楼/2015年建成',
					tips: '在售28套/在租34套',
					price: 14000,
					isHeart: false,
				}, ],
				areaChecked:[],
				totalChecked:[],
				roomChecked:[],
				roomDurationChecked:[],
				checkedArr:{
					
				}
			}
		},
		methods: {
			btnClick: function(idx) {
				if(idx.idx == 0){
					if(this.popupActive == 0){
						this.areaList.forEach((item,idx) =>{
							item.checked = false
							idx == 0?item.checked = true:''
						})
						this.countyList.forEach((item,idx) =>{
							item.checked = false
							idx == 0?item.checked = true:''
						})
						this.streetList.forEach((item,idx) =>{
							item.checked = false
						})
					}else if(this.popupActive == 1){
						this.totalOption[0].iptMin = ''
						this.totalOption[0].iptMax = ''
						this.totalOption[0].option.forEach(item =>{
							item.checked = false
						})
					}else if(this.popupActive == 2){
						this.room[0].option.forEach(item =>{
							item.checked = false
						})
					}else if(this.popupActive == 3){
						// this.roomDurationOption[0].option.forEach(item =>{
						// 	item.checked = false
						// })
					}else if(this.popupActive == 4){
						
					}
				}else{
					if(this.popupActive == 0){
						this.checkedArr.area = this.streetList.filter(item => item.checked).map(item => item.name)
					}else if(this.popupActive == 1){
						if(this.totalOption[0].valMin != '' && this.totalOption[0].valMax != ''){
							this.checkedArr.totalMin = this.totalOption[0].valMin != ''? this.totalOption[0].valMin:0;
							this.checkedArr.totalMax = this.totalOption[0].valMax != ''? this.totalOption[0].valMax:1000000;
						}else{
							this.checkedArr.totalMin = this.totalOption[0].option.filter(item => item.checked).map(item => item.valMin)
							this.checkedArr.totalMax = this.totalOption[0].option.filter(item => item.checked).map(item => item.valMax)
						}
						
					}else if(this.popupActive == 2){
						this.checkedArr.room = this.roomOption[0].option.filter(item => item.checked).map(item => item.val)
					}else if(this.popupActive == 3){
						this.checkedArr.roomDuration = this.roomDurationOption[0].option.filter(item => item.checked).map(item => item.val)
					}else if(this.popupActive == 4){
						
					}
				}
				console.log(this.checkedArr)
			},
			heart: function(idx) {
				this.listData[idx].isHeart = !this.listData[idx].isHeart
			},
			listChange: function(idx) {
				console.log('id=' + this.listData[idx].id + '的商品被点击了')
				uni.navigateTo({
					url: '/pages/index/secondary/sec_content/index?id=' + this.listData[idx].id
				})
			},
			backChange: function() {
				uni.navigateBack({
					detail: 1
				})
			},
			tipsChange: function() {
				uni.navigateTo({
					url: ''
				})
			},
			topTabChange: function(idx) {
				this.popupActive = idx
			},
			firstClick: function(idx) {
				this.areaList.forEach(item => {
					item.checked = false
				})
				this.areaList[idx].checked = true;
				console.log('用户选择了' + this.areaList[idx].val)
			},
			secondClick: function(idx) {
				this.countyList.forEach(item => {
					item.checked = false
				})
				this.countyList[idx].checked = true;
				console.log('用户选择了' + this.countyList[idx].val)
			},
			checkChange: function(idx) {
				console.log(idx)
				this.streetList[idx].checked = !this.streetList[idx].checked
				// this.areaChecked = this.streetList.filter(item => item.checked).map(item =>item.name)
			},
			totalSectionChange:function(idx){
				let check = this.totalOption[0].option[idx].checked;
				this.totalOption[0].option[idx].checked = !check;
			},
			roomSectionChange:function(idx){
				let check = this.roomOption[0].option[idx].checked;
				this.roomOption[0].option[idx].checked = !check;
			},
			
		},
		components: {
			navBar,
			topPopup,
			houseList,
			scrollOption,
			sectionOption
		}
	}
</script>

<style>
	.sticky-box {
		position: sticky;
		top: 0;
		z-index: 9999
	}

	.option-box {
		background-color: white;
	}
</style>
