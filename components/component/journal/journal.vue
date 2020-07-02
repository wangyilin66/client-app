<template>
	<view class="buyhouse">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item>
								<image src="../../../static/images/index/home_fangzi_pic.png" mode=""></image>
							</swiper-item>
							<swiper-item>
								<image src="../../../static/images/index/home_fangzi_pic.png" mode=""></image>
							</swiper-item>
							<swiper-item>
								<image src="../../../static/images/index/home_fangzi_pic.png" mode=""></image>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		<!-- 买房 -->
		<view class="houselist" v-for="(item,index) in date" :key="index">
			<view class="listcon">
				<view class="listt">
					{{item.title}}
				</view>
				<view class="list-type">
					<view class="type">
						<text>优品新闻</text>
						<text>{{item.time}}</text>
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
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				date: [{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					},
					{
						"title": "35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,35岁前买房懂得买房8字真言,",
						"type": ["买房", "购房资格", "限购"],
						"image": '../../../static/images/index/home_banner.png',
						"time": "2020-03-30“"
					}


				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">

	.buyhouse {
		box-sizing: border-box;
		padding: 0 24rpx;
		
		.uni-padding-wrap {
			height: 300rpx;
			margin-bottom: 50rpx;
			border-radius: 25rpx;
			overflow: hidden;
			view {
				width: 100%;
				height: 100%;
				image{
					width: 100%;
					height: 100%;
				}
			}

		}

		.houselist {
			display: flex;
			justify-content: space-between;
			margin-bottom: 63rpx;

			.listcon {
				width: 384rpx;
				height: 18rpx;

				.listt {
					font-size: 30rpx;
					color: #1d1d1d;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					margin-bottom: 22rpx;
				}

				.list-type {
					color: #BBBBBB;
					font-size: 26rpx;
					display: flex;

				}

			}

			.listimage {
				width: 250rpx;
				height: 159rpx;
				border-radius: 28rpx;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
