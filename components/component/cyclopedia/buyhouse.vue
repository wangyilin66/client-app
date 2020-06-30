<template>
	<view class="buyhouse">
		<!-- 买房 -->
		<view class="houselist" v-for="(item,index) in date" :key="index">
			<view class="listcon">
				<view class="listt">
				{{item.title}}
				</view>
				<view class="list-type">
					<view class="type" v-for="(itm,idx) in item.type" :key="idx">
						{{itm}}
					</view>
				</view>
			</view>
			<view class="listimage">
				<!-- <image :src="item.image" mode=""></image> -->
				<image src="../../../static/images/index/home_banner.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				date:[
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'},
					{"title":"35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,","type":["买房","购房资格","限购"],"image":'../../../static/images/index/home_banner.png'}
					
					
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="less">
	.buyhouse{
		.houselist{
			display: flex;
			justify-content: space-between;
			margin-bottom: 63rpx;
			.listcon{
				width: 384rpx;
				height:18rpx;
				.listt{
					font-size: 30rpx;
					color: #1d1d1d;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					margin-bottom: 22rpx;
				}
				.list-type{
					color: #47CD97;
					font-size:26rpx;
					display: flex;
					view{
						margin-right: 38rpx;
						display: inline-block;
					}
				}
				
			}
			.listimage{
				width: 250rpx;
				height: 159rpx;
				border-radius: 28rpx;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
