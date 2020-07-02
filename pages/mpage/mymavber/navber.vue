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
				{{txtdata}}
			</view>
			<view class="share" @click="visible(visibl)">
				<!-- <image src="../../../static/images/ykan/yk_fenxiang@2x.png" mode=""></image> -->
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
				console.log(1111)
				uni.navigateBack({
					 delta: 1
					
				})
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
			height: 44rpx;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
