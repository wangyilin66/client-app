<template>
	<view class="rule">
		<navber @back="back" @black="black"></navber>
		<view class="rulebox">
			<view class="list"  @click="gocopy">
				<view class="left">
					<view class="font">
						优品平台总规则
					</view>
					<view class="img">
					</view>
				</view>
			
				<view class="right">
					<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
				</view>	
			</view>
		</view>
	</view>
</template>

<script>
	import navber from "../mymavber/navber3.vue"
	export default{
		components:{
			navber
		},
		data(){
			return{
				// title:"隐私规则"
			}
		},
		methods:{
			back:function(){
				uni.redirectTo({
				    url: './index',
					animationType: 'pop-in',
					animationDuration: 200
				});
			},
			gocopy:function(){
				uni.navigateTo({
				    url: './rulecopy',
					animationType: 'pop-in',
					 animationDuration: 200
				});
			}
		}
	}
</script>

<style scoped lang="less">
	.rulebox{
		box-sizing: border-box;
		padding: 31rpx 18rpx ;
	}
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
			width: 46rpx;
			height: 54rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
