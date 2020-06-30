<template>
	<view class="logout">
		<navber :txtdata="title"></navber>
		<view class="logoutbox">
			<view class="outhint">
				在注销账号前，请就行以下风险确认
			</view>
			<view class="outtitle">
				历史数据清空
			</view>
			<view class="outcon">
				您的关注、租约、订单等数据将被清空无法查询或恢复。
			</view>
			<view class="out">
				<view class="outbtn" @click="logout">
					注销账号
				</view>
				<view class="outcaution">
					注销账号后不可恢复，请谨慎操作
				</view>
			</view>
			
		</view>
	
	</view>
</template>

<script>
	import navber from "../mymavber/navber.vue"
	export default{
		components:{
			navber
		},
		data(){
			return{
				title:"注销账号"
			}
		},
		methods:{
			logout(){
				uni.showToast({
					title:"注销成功",
					icon:"none",
					success() {
						setTimeout(()=>{
							uni.switchTab({
							    url: '/pages/index/index'
							});
						},1000)
					}
				})
			}
		}
		
	}
</script>

<style scoped lang="less">
	.logoutbox{
		box-sizing: border-box;
		padding: 0 22rpx;
		.outhint{
			height: 132rpx;
			line-height: 132rpx;
			font-size: 30rpx;
		}
		.outtitle{
			font-size: 32rpx;
			font-weight: 600;
			height: 48rpx;
			line-height: 48rpx;
			margin-bottom: 20rpx;
		}
		.outcon{
			font-size: 30rpx;
			color: #808080;
			box-sizing: border-box;
			padding-right: 48rpx;
			margin-bottom: 280rpx;
		}
		.out{
			text-align: center;
			.outbtn{
				width: 621rpx;
				height: 100rpx;
				background: #47CD97;
				color: #FFFFFF;
				line-height: 100rpx;
				text-align: center;
				margin: 0 auto;
				border-radius: 50rpx;
				margin-bottom: 28rpx;
			}
			.outcaution{
				font-size: 30rpx;
				height:42rpx;
				line-height: 42rpx;
				color: #808080;
			}
		}
		
		
		
	}
</style>
