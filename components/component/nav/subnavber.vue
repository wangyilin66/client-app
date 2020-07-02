<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navbae-title">
			<view class="title-image" @click="black()">
				<image src="../../../static/images/login/daohang_black_icon@2x.png" mode=""></image>
			</view>
			<view class="title-font">
				订阅号
			</view>
			<view class="share" @click="visible(visibl)">
				<image src="../../../static/images/news/icon_yidong@2x.png" mode=""></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				visibl:false
				
			}
		},
		methods:{
			black:function(){
				uni.navigateBack({
					 delta: 1
					 
				})
			},
			closeback:function(){
				uni.switchTab({
				    url: '/pages/ykan/index'
				});
			},
			visible:function(item){
				this.$emit("visib",item);
			}
			
		},
	}
</script>

<style scoped lang="less">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background: #000000;
	}

	.navbae-title {
		background: #FFFFFF;
		height: 88rpx;
		box-sizing: border-box;
		padding: 0 24rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		.title-image {
			width: 30rpx;
			height: 34rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
		.title-font{
			font-size: 34rpx;
			font-weight: 600;
		}
		.close{
			width: 30rpx;
			height: 30rpx;
			position: absolute;
			left: 114rpx;
			bottom: 30rpx;
			image{
				width: 100%;
				height: 100%;
			}
			
		}
		.share{
			width: 44rpx;
			height: 30rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
