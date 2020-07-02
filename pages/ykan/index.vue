<template>
	<view class="container">
		<status-bar :barColor="barColor"></status-bar>
		<module-box :paddingBottom="24" :paddingTop='24' :hasMargin="false">
			<view class="til">优看</view>
		</module-box>
		<module-box :paddingBottom="10">
			<top-tag :tagItem="tagItem" :actionWidthType="actionWidthType" @tagClick="tagClick"></top-tag>
		</module-box>
		<view class="indexbox" v-if="idex==0">
			<module-box :paddingBottom="24" :paddingTop='0'>
				<module-title @gocounse="gocounse" :title="counselorTitle" :hasborder="0"></module-title>
				<view class="visit-box">
					<view class="visit" v-bind:style="{width:visitWidth+'px'}">
						<visiting-card  @gocounselor="gocounselor" v-for="(item,idx) in visitData" @tagClick :key="idx" :visitData="item"></visiting-card>
					</view>
				</view>
			</module-box>
			<module-box :paddingBottom="24" :paddingTop='0' :hasMargin="false">
				<module-title :title="faqsTitle"></module-title>
				<faqs-list :faqsData="faqsData" @navToGo="navToGo"></faqs-list>
			</module-box>
			<module-box :paddingBottom="30" :paddingTop="70">
				<button type="default" plain @click="gomore">查看更多问答</button>
			</module-box>
			<view class="fab">
				<image src="../../static/images/ykan/youkan_tw_icon.png"></image>
			</view>
		</view>
		<cyclopedia v-else-if="idex==1"></cyclopedia>
		<view class="" v-else>
			<journal></journal>
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
	import cyclopedia from '@/components/component/cyclopedia/cyclopedia'
	import journal from '@/components/component/journal/journal'

	export default {
		data() {
			return {
				idex:0,
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
				this.idex=idx;
				let tagItem = this.$data.tagItem;
				tagItem.forEach(item => {
					item.className = ''
				});
				tagItem[idx].className = 'top-tag-action';
			},
			navToGo:function(id){
				uni.navigateTo({
						url:"detaisl",
						fail:(err)=>{
							console.log(err)
						}
				});
			},
			gocounselor(item){
				console.log(item)
				uni.navigateTo({
					url:"counselor?item="+item
				})
				
			},
			gocounse:function(){
				uni.navigateTo({
					url:"./counselist"
				})
			},
			gomore:function(){
				uni.navigateTo({
					url:"./replys"
				})
			}
		},
		components: {
			statusBar,
			moduleBox,
			topTag,
			moduleTitle,
			visitingCard,
			faqsList,
			cyclopedia,
			journal
			
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
