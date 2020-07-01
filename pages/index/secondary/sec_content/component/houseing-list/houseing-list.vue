<template>
	<view>
		<view>
			<u-tabs-swiper ref="uTabs" :list="houseingData.tabs" :current="current" @change="tabsChange" :is-scroll="false"
			 swiperWidth="750" active-color="#47cd97" inactive-color="#000000" bar-width="30" bar-height="4"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" :style="{height:swiperHeight + 'px'}">
			<swiper-item class="swiper-item" v-for="(item, index) in houseingData.swipers" :key="index">
				<scroll-view scroll-y style="width: 100%;" @scrolltolower="onreachBottom">
						<house-list ref="houseList" :listData="item"></house-list>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import houseList from '../house-list/house-list.vue'

	export default {

		data() {
			return {
				current: 0,
				swiperCurrent: 0,
				swiperHeight: 600
			}
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		},
		props: {
			houseingData: {
				type: Object,
			}
		},
		components: {
			houseList
		},
		mounted() {
			let that =this;
			const query = uni.createSelectorQuery().in(this);
			query.select('.house-list').fields({

				size: true
			}, (data) => {
				that.swiperHeight = data.height + 40
			}).exec()
		}
	}
</script>

<style lang="scss" scoped>
	/* .houseing-list {
		padding: 40rpx 24rpx;


	} */
</style>
