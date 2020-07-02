<template>
	<view class="nav">
		<view class="status_bar" style="background: #000000;">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navbae-title">
			<view class="title-image" @click="black()">
				<image src="../../../static/images/login/daohang_black_icon@2x.png" mode=""></image>
			</view>
			<view class="title-font">
				{{txtdata}}
				我关注的二手房
			</view>
			<view class="share" @click="visible(visibl)">
				<view class="message">
					<image src="../../../static/images/mpage/used/my_guanzhu_bijia@2x.png" mode=""></image>
				</view>
				<view class="messages">
					<image src="../../../static/images/mpage/used/my_guanzhu_bianji@2x.png" mode=""></image>
				</view>
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
		props:["txtdata"]
	}
</script>

<style scoped lang="less">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background: #000000;
	}
	.nav{
		width: 100%;
		background: #FFFFFF !important;
		position: fixed;
		top: 0;
		left: 0;
	}
	.navbae-title {
		background: #FFFFFF;
		height: 88rpx;
		box-sizing: border-box;
		padding: 0 24rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title-image,.share{
			width: 154rpx;
			height: 34rpx;
		}
		.title-image {
			
			image {
				width: 30rpx;
				height: 34rpx;
			}
		}
		.title-font{
			flex: 1;
			font-size: 34rpx;
			font-weight: 600;
			text-align: center;
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
			display: flex;
			align-items: center;
			justify-content: space-between;
			image{
				width: 100%;
				height: 100%;
			}
			.message{
				width: 42rpx;
				height: 46rpx;
				margin-left: 47rpx;
			}
			.messages{
				width: 36rpx;
				height: 40rpx;
			}
		}
	}
</style>
