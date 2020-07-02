<template>
	<view class="we">
		<navber :txtdata="title"></navber>
		<view class="webox">
			<view class="wecont">
				<view class="weimg">
					<image src="../../../static/images/mpage/my_shezhi_logo@2x.png" mode=""></image>
				</view>
				<view class="appname">
					<view class="name">
						优品找房
					</view>
					<view class="introduce">
						找房大平台
					</view>
				</view>
				<view class="synopsis">
					优品是一款专门为客户及中介、房地产商为一体化的平台，真实房源，真实客户、用户信息，让您关注的方云最新消息永不落空
				</view>
				<view class="site">
					<view class="website">
						官方网址：www.youpin.com
					</view>
					<view class="kfphone">
						客服电话：123456789
					</view>
				</view>
				<view class="versions">
					版本号：1.0.1
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
				title:"关于我们"
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="less">
	.webox{
		box-sizing: border-box;
		padding: 187rpx 78rpx 0;
		.wecont{
			.weimg{
				width: 235rpx;
				height: 235rpx;
				overflow: hidden;
				margin: 0 auto;
				margin-bottom: 27rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.appname{
				text-align: center;
				margin-bottom: 231rpx;
				.name{
					height:56rpx;
					line-height: 56rpx;
					font-size:38rpx;
					font-weight: 600;
				}
				.introduce{
					height:37rpx;
					line-height: 37rpx;
					font-size:26rpx;
					color: #808080;
				}
				
			}
			.synopsis{
				height: 126rpx;
				font-size: 30rpx;
				color: #000000;
				margin-bottom: 50rpx;
				text-align: center;
			}
			.site{
				font-size: 26rpx;
				color: #808080;
				margin-bottom: 102rpx;
				text-align: center;
				.website{
					margin-bottom: 5rpx;
				}
				view{
					height: 37rpx;
					line-height: 37rpx;
				}
				
			}
			.versions{
				font-size: 26rpx;
				color: #808080;
				text-align: center;
			}
		}
	}
</style>
