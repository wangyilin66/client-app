<template>
	<view class="container">
		<status-bar :barColor="barColor"></status-bar>
		<module-box :paddingBottom="24" :paddingTop='24' :hasMargin="false">
			<view class="til">优看</view>
		</module-box>
		<module-box :paddingBottom="10">
			<top-tag :tagItem="tagItem" :actionWidthType="actionWidthType" @tagClick="tagClick"></top-tag>
		</module-box>
		<module-box :paddingBottom="24" :paddingTop='0'>
			<module-title :title="counselorTitle" :hasborder="0"></module-title>
			<view class="visit-box">
				<view class="visit" v-bind:style="{width:visitWidth+'px'}">
					<visiting-card v-for="(item,idx) in visitData" :key="idx" :visitData="item"></visiting-card>
				</view>
			</view>
		</module-box>
		<module-box :paddingBottom="24" :paddingTop='0' :hasMargin="false">
			<module-title :title="faqsTitle"></module-title>
			<faqs-list :faqsData="faqsData"></faqs-list>
		</module-box>
		<module-box :paddingBottom="30" :paddingTop="70">
			<button type="default" plain>查看更多问答</button>
		</module-box>
		<view class="fab">
			<image src="../../static/images/ykan/youkan_tw_icon.png"></image>
		</view>
	</view>
</template>

<script>
	import statusBar from '@/components/component/status-bar/status-bar.vue'
	import moduleBox from '@/components/component/module-box/module-box.vue'
	import topTag from '@/components/component/top-tag/top-tag.vue'
	import moduleTitle from '@/components/component/module-title/module-title.vue'
	import visitingCard from '@/components/component/visiting-card/visiting-card.vue'
	import faqsList from '@/components/component/faqs-list/faqs-list.vue'

	export default {
		data() {
			return {
				barColor: 'ffffff',
				actionWidthType: "long",
				tagItem: [{
					id: 0,
					text: '问答',
					className: '',
				}, {
					id: 1,
					text: '百科百科',
					className: 'top-tag-action',
				}, {
					id: 2,
					text: '资讯',
					className: '',
				}, ],
				counselorTitle: {
					height: 100,
					line: true,
					text: "优质顾问",
					icon: true
				},
				faqsTitle: {
					height: 100,
					line: true,
					text: "热门问答",
					icon: false
				},
				visitWidth: 702,
				visitData: [{
					userImgUrl: '/static/images/ykan/youkan_touxiang.png',
					userName: '郭京飞',
					helpPerson: 900,
				}, {
					userImgUrl: '/static/images/ykan/youkan_touxiang.png',
					userName: '郭京飞',
					helpPerson: 900,
				}, {
					userImgUrl: '/static/images/ykan/youkan_touxiang.png',
					userName: '郭京飞',
					helpPerson: 900,
				}],
				faqsData: [{
						query: "女性租房应该注意哪些问题？",
						answer: "女性租房应该注意：在签合同时业主在场签,女性租房应该注意：在签合同时业主在场签,女性租房应该注意：在签合同时业主在场签,",
						answerNum: 8,
						updateTime: '2020-03-02 18:00'
					},
					{
						query: "女性租房应该注意哪些问题？",
						answer: "女性租房应该注意：在签合同时业主在场签,女性租房应该注意：在签合同时业主在场签,女性租房应该注意：在签合同时业主在场签,",
						answerNum: 8,
						updateTime: '2020-03-02 18:00'
					}
				]
			}
		},
		mounted: function() {
			let view = uni.createSelectorQuery().in(this);
			view.selectAll('.visiting-card').fields({
				dataset: true,
				size: true
			}, data => {
				this.visitWidth = data.length * data[0].width
			}).exec()
		},
		methods: {
			tagClick(idx) {
				let tagItem = this.$data.tagItem;
				tagItem.forEach(item => {
					item.className = ''
				});
				tagItem[idx].className = 'top-tag-action';
			}
		},
		components: {
			statusBar,
			moduleBox,
			topTag,
			moduleTitle,
			visitingCard,
			faqsList
		}
	}
</script>

<style>
	.til {
		font-size: 40rpx;
		font-weight: bold;
	}

	uni-button[type=default][plain] {
		color: #353535;
		border: 1px solid #47CD97;
		font-size: 24rpx;
	}

	uni-button {
		line-height: 90rpx;
	}

	.visit-box {
		width: 702rpx;
		overflow-x: auto;
	}

	.visit {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow-x: auto;
		padding: 20rpx;
	}

	.visit>uni-view {
		margin-right: 20px;
	}
	
	.fab{
		position:absolute;
		bottom:0;
		left:calc(50% - 64rpx);
	}
	.fab uni-image{
		width:138rpx;
		height:138rpx;
	}
</style>
