<template>
	<view class="pushset">
		<navber :txtdata="title"></navber>
		<view class="pusht">
			<view class="list"  @click="informswitch">
				<view class="left">
					<view class="font">
						接受消息设置
					</view>
					<view class="img">
						{{inform==false?"已关闭":"已开启"}}
					</view>
				</view>
			
				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>	
			</view>
		</view>
		<view class="pushbox">
			<view class="pushhint">
				为确保不错过重要房源动态，请在手机"设置一通知"功能中确认"优品找房"在通知名单中
			</view>
			<view class="listbox">
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">房源调价</view>
				    <switch color="#09BB07"  @change="adjustprice"/>
				</view>
				<!-- 房源成交 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">房源成交</view>
				    <switch color="#09BB07"  @change="deal"/>
				</view>
				<!-- 房源停售 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">房源停售</view>
				    <switch color="#09BB07"  @change="saleStop"/>
				</view>
				<!-- 小区新上二手房 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">小区新上二手房</view>
				    <switch color="#09BB07"  @change="newesf"/>
				</view>
				<!-- 小区新上租房 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">小区新上租房</view>
				    <switch color="#09BB07"  @change="newzf"/>
				</view>
				<!-- 小区月报 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">小区月报</view>
				    <switch color="#09BB07"  @change="monthly"/>
				</view>
				<!-- 业主动态 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">业主动态</view>
				    <switch color="#09BB07"  @change="state"/>
				</view>
				<!-- 我的问答 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">我的问答</view>
				    <switch color="#09BB07"  @change="answer"/>
				</view>
				<!-- 我关注的问答 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">我关注的问答</view>
				    <switch color="#09BB07"  @change="attention"/>
				</view>
				<!-- 点评消息 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">点评消息</view>
				    <switch color="#09BB07"  @change="remark"/>
				</view>
				<!-- 搜索订阅 -->
				<view class="uni-list-cell uni-list-cell-pd">
				    <view class="uni-list-cell-db">搜索订阅</view>
				    <switch color="#09BB07"  @change="subscription"/>
				</view>
			</view>
						
			
		</view>
		<emodal :visible.sync="mode" @cancel="handleCancel" >
			<view class="infobox">
				<view class="info-title">
					您现在无法接受到新的信息，请到"系统"-"通知"-"优品找房"中开启。
				</view>
				<view class="info-btn" @click="back">
					确定
				</view>
			</view>
		</emodal>
	</view>
</template>

<script>
	import navber from "../mymavber/bernav.vue"
	import emodal from "@/components/component/e-modal/e-modal.vue"
	export default{
		components:{
			navber,
			emodal
		},
		data(){
			return{
				title:"推送设置",
				inform:false,
				visi:null,
				mode:false
			}
		},
		onLoad() {
			console.log(this.mode)
			if(this.inform==false){
				this.mode=true
			}else{
				this.mode=false
			}
		},
		methods:{
			 informswitch:function(){
				this.inform=!this.inform
			 },
			 visib:function(item){
			 	item=true;
			 	this.visi=item;
			 },
			 back:function(){
				 this.mode=false
			 },
			 handleCancel:function(){
			 	console.log('modal关闭')
			 },
			 adjustprice: function (e) {
			            console.log('房源调价 发生 change 事件，携带值为', e.target.value)
			 },
			 deal: function (e) {
			            console.log('房源成交 发生 change 事件，携带值为', e.target.value)
			 },
			 saleStop: function (e) {
			            console.log('房源停售 发生 change 事件，携带值为', e.target.value)
			 },
			 newesf: function (e) {
			            console.log('新上二手房 发生 change 事件，携带值为', e.target.value)
			 },
			 newzf: function (e) {
			            console.log('新上租房 发生 change 事件，携带值为', e.target.value)
			 },
			 monthly: function (e) {
			            console.log('小区月报 发生 change 事件，携带值为', e.target.value)
			 },
			 state: function (e) {
			            console.log('业主动态 发生 change 事件，携带值为', e.target.value)
			 },
			 answer: function (e) {
			            console.log('我的问答 发生 change 事件，携带值为', e.target.value)
			 },
			 attention: function (e) {
			            console.log('关注问答 发生 change 事件，携带值为', e.target.value)
			 },
			 remark: function (e) {
			            console.log('点评消息 发生 change 事件，携带值为', e.target.value)
			 },
			 subscription: function (e) {
			            console.log('搜索订阅 发生 change 事件，携带值为', e.target.value)
			 },
			 
			 
		}
	}
</script>

<style scoped lang="less">
	.pusht{
		padding: 26rpx 18rpx 0;
		border-bottom: 1rpx solid #E5E5E5;
		.list {
			display: flex;
			height: 97rpx;
			justify-content: space-between;
			align-items: center;
			// border-bottom: 1rpx solid #E5E5E5;
		
			.left {
				width: 90%;
				display: flex;
				justify-content: space-between;
		
				.font {
					font-size: 32rpx;
				}
		
				.img {
					font-size: 32rpx;
					color: #888888;
		
					.imgs {
						width: 66rpx;
						height: 66rpx;
					}
				}
			}
		
			.right {
				image {
					width: 46rpx;
					height: 54rpx;
				}
			}
		}
	}
	
	.pushbox{
		box-sizing: border-box;
		padding: 0 18rpx ;
		.pushhint{
			height: 160rpx;
			box-sizing: border-box;
			padding:28rpx 18rpx 0;
			font-size: 28rpx;
			color: #888888;
		}
		.uni-list-cell-pd{
			height: 95rpx;
			font-size: 32rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.infobox{
		width: 560rpx;
		height: 291rpx;
		.info-title{
			box-sizing: border-box;
			padding:58rpx 30rpx 49rpx;
			font-size: 30rpx;
			border-bottom: 1rpx solid #E5E5E5;
		}
		.info-btn{
			height: 100rpx;
			text-align: center;
			font-size: 36rpx;
			color: #47CD97;
			line-height: 100rpx;
		}
	}
	
</style>
