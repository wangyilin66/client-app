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
				优看
			</view>
			<view class="">

			</view>
		</view>
	</view>
</template>
<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			black:function(){
				uni.navigateBack({
					 delta: 1
				})
			}
		},
		props:{
			
		
		}
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
	}
</style>
