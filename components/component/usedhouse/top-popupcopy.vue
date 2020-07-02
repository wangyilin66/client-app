<template>
	<view class="top-popup-box">
		<view class="top-tab-box" :style="{height:popupTabHeight + 'rpx'}">
			<view class="top-tab-item" :class="{'active':tabActive === idx}"  v-for="(item,idx) in popupTab" :key="idx" @click="topTabItemChange(idx)" >{{item}}</view>
		</view>
		<view class="mask" v-if="mask" v-show="maskShow" @click="maskClick" @touchmove.stop.prevent="moveHandle"></view>
		<view class="popup-option" :style="{top:popupTop + 'rpx'}">
			<view class="option" v-for="(item,index) in poplist[index]">
				<view class="poplist" v-for="(itm,idx) in item" :key="idx" :class="{'ac':itm.check}" @click="optclick(itm,idx)">
					{{itm.name}}
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	/**
	 * mask: 是否开启遮罩
	 * mask: 点击遮罩层是否关闭弹出层
	 * popupTabHeight：选项栏高度
	 * popupTab：选项栏选项，eg:['区域','价格'...]
	 * btnHeight:按钮高度
	 * btnfontSize:按钮字体大小
	 * 
	 *
	**/
	
	export default {
		data() {
			return {
				popupShow:false,
				tabActive: -1,
				popupTop:-1000,
				maskShow:false,
				index:0,
				idx:0,
				options:[],
				ac:false
				
			}
		},
		props: {
			mask:{
				type:Boolean,
				default:true
			},
			maskClose:{
				type:Boolean,
				default:true
			},
			btnHeight:{
				type:Number,
				default:100
			},
			btnfontSize:{
				type:Number,
				default:32
			},
			
			popupTabHeight: {
				type: Number,
				default: 80
			},
			popupTab: {
				type: Array,
				required: true
			},
			poplist:{
				type:Array,
				required: true
			}
		},
		watch:{
			popupShow(newVal){
				if(newVal){
					this.popupTop= this.popupTabHeight
					if(this.mask){
						this.maskShow = true;
					}
				}else{
					let that = this;
					this.popupTop= -1000
					setTimeout(function(){
						if(that.mask){
							that.maskShow = false;
						}
					},400)
				}
			}
		},
		methods: {
			topTabItemChange(idx) {
				this.index=idx
				if (this.tabActive == idx) {
					this.popupShow = false;
					this.tabActive = -1;
				} else {
					this.tabActive = idx;
					this.popupShow ? '' : this.popupShow = true;
				}
			},
			maskClick(){
				if(this.maskClose){
					this.popupShow = false;
					this.tabActive = -1;
				}
			},
			moveHandle(){
				//禁止下层页面滚动
			},
			optclick(item,idx){
				this.ac=true;
				this.tabActive = -1;
				this.popupShow=false
				this.poplist[this.index].options.forEach(item =>{
					item.check = false
				})
				this.poplist[this.index].options[idx].check = true;
				console.log(this.poplist[this.index].options[idx].name)
				
			}
		},
		created(){
			// console.log(this.poplist)
			// this.options = this.poplist
		}
	}
</script>

<style lang="scss" scoped>
	.option{
		box-sizing: border-box;
		padding-bottom: 20rpx;
	}
	.poplist{
		height: 91rpx;
		font-size: 30rpx ;
		line-height: 91rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.ac{
		color: blue;
	}
	.top-popup-box{
		position:relative;
	}
	.top-tab-box {
		position:relative;
		z-index:90;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background-color:white;
	}

	.top-tab-item {
		font-size: 26rpx;
		color: $u-light-color;
		position: relative;
		left: -12rpx;

		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 0;
			border: 12rpx solid transparent;
			border-top-color: $u-light-color;
			right: -28rpx;
			top: 12rpx;
		}
	}

	.top-tab-item.active {
		color: $u-type-primary;

		&::after {
			border-bottom-color: $u-type-primary;
			border-top-color: transparent;
			right: -28rpx;
			top: 0rpx;
		}
	}
	
	.mask{
		position:fixed;
		top:0;
		left:0;
		width:100vw;
		height:100vh;
		background-color:rgba(0,0,0,0.6);
	}
	.popup-option{
		width: 100%;
		position: absolute;
		left:0;
		transition: top 0.4s ease-in-out;
		background: #FFFFFF;
		border-radius: 0 0 40rpx 40rpx;
		.popup-btn-box{
			display: flex;
			justify-content: space-around;
			align-items: center;
			text-align: center;
		}
	}
	
</style>
