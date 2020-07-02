<template>
	<view class="tapber">
		
		<view class="tabclick">
			<view class="clibox" v-for="(item,index) in tab" @click="tabclick(item)">
				<view class="clitxt">
					{{item.name}}
				</view>
				<view class="cliimg">
					<image class="image" src="../../../static/images/mpage/used/xiala.png" mode=""></image>
				</view>
				<!-- <view class="cliimg">
					<image src="../../../static/images/mpage/used/shangla.png" mode=""></image>
				</view> -->
			</view>
			
		</view>
		<view class="optionbopx">
			<u-popup v-model="show" mode="top" style="position: fixed;top: 158rpx;">
			</u-popup>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			tabclick(item){
				this.show=true
			},

		},
		props: ["tab"]
	}
</script>

<style scoped lang="less">

	.tapber {
		height: 70rpx;
		display: flex;
		align-items: center;
		background: #FFFFFF;

		.tabclick {
			width: 100%;
			background: red;
			display: flex;
			align-items: center;
			.clibox{
				width: 25%;
				box-sizing: border-box;
				padding: 0 24rpx;
				display: flex;
				align-items: center;
				.clitxt {
					color: #808080;
					font-size: 26rpx;
				}
				
				.cliimg {
					width: 28rpx;
					height: 34rpx;
					.image {
						width: 100%;
						height: 100%;
						    position: relative;
						    top: -6rpx;
						    left: 12rpx;
					}
				}
			}
			
		}
	}
	.optionbopx{
		position: relative;
	}
	.u-mask[data-v-4bfa3b00] {
	    position: fixed;
	    top: 158rpx;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    opacity: 0;
	    -webkit-transition: -webkit-transform 0.3s;
	    transition: -webkit-transform 0.3s;
	    transition: transform 0.3s;
	    transition: transform 0.3s, -webkit-transform 0.3s;
	}
</style>
