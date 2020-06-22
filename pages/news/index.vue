<template>
	<view class="container">
		<status-bar :barColor="barColor"></status-bar>
		<view class="til-box">
			<text class="til">消息</text>
			<text class="til-tips">及时掌握房源信息，不错过优品好房</text>
		</view>
		<module-box :hasMargin="false">
			<card :cardOption="cardOption">
				<news-list :listData="cardList"></news-list>
			</card>
		</module-box>
		<module-box>
			<view class="pading-left-add pading-right-add" style="padding-top:50rpx;">
				<news-list :listData="newsList" :hasBorder="hasBorder" :hasBadge="hasBadge"></news-list>
			</view>
		</module-box>
	</view>
</template>

<script>
	import moduleBox from '@/components/component/module-box/module-box.vue'
	import statusBar from '@/components/component/status-bar/status-bar.vue'
	import card from '@/components/component/card/card.vue'
	import newsList from './news-list/news-list.vue'

	export default {
		data() {
			return {
				barColor: "47CD97",
				cardOption: {
					paddingTop: 42,
					paddingBottom: 42,
					paddingLeft: 30,
					paddingRight: 30,
					height: 252,
					marginTop: -60,
					borderRadius: 16,
				},
				cardList: [{
						imgUrl: "../../static/images/news/mas_tehui_icon.png",
						imgWidth: 96,
						imgHeight: 96,
						itemHeight:126,
						til: "特惠新房",
						label: "",
						listRightText: "昨天 19:00",
						concent: "新房优选：实碧桂园国际在售均价17000元实碧桂园国际在售均价17000元实碧桂园国际在售均价17000元"
					},
					{
						imgUrl: "../../static/images/news/mas_dongtai_icon.png",
						imgWidth: 96,
						imgHeight: 96,
						itemHeight:126,
						til: "关注的小区动态",
						label: "",
						listRightText: "03月12日 22:00",
						concent: "您关注的小区“万科里”新上架一套房源"
					}
				],
				hasBorder:true,
				hasBadge:true,
				newsList: [{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:23,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "昨天 19:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					},
					{
						imgUrl: "../../static/images/news/youkan_touxiang.png",
						imgWidth: 96,
						imgHeight: 96,
						Badge:2,
						itemHeight:126,
						til: "郭京飞",
						label: "碧桂园南苑分店A组",
						listRightText: "03月12日 22:00",
						concent: "您看，我今天刚刚成交的100平的客户有意向"
					}
				]
			}
		},
		methods: {

		},
		components: {
			moduleBox,
			statusBar,
			card,
			newsList
		}
	}
</script>

<style>
	.til-box {
		padding-left: 24rpx;
		padding-right: 24rpx;
		padding-top: 30rpx;
		padding-bottom: 80rpx;
		background-color: #47CD97;
		color: #ffffff;
		height: 97rpx;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 1;
	}

	.til {
		font-size: 40rpx;
		font-weight: bold;
		color: #ffffff;
		line-height: 60rpx;
		;
	}

	.til-tips {
		font-size: 26rpx;
	}
</style>
