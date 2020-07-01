<template>
	<view class="circum-box">
		<view class="til">周边配套</view>
		<view class="circum-con">
			<u-tabs :is-scroll="false" :list="circumData" :current="current" active-color="#47cd97" inactive-color="#000000"
			 bar-width="30" bar-height="4" @change="tabsChange"></u-tabs>
			<view class='map-box'>
				<map style="width:100%;height:340rpx" :longitude="lon" :latitude="lat" :show-location="true">
					<cover-view class="address">
						{{address}}
					</cover-view>
				</map>
			</view>
			<view class="circum-con">{{circumData[current].content}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				lat: 0,
				lon: 0,
				address: ''
			}
		},
		props: {
			circumData: {
				type: Array,
				require: true,
				default: [{
					tab: '交通',
					content: '暂无信息'
				}, {
					tab: '医疗',
					content: '暂无信息'
				}, {
					tab: '生活',
					content: '暂无信息'
				}, {
					tab: '休闲',
					content: '暂无信息'
				}, ]
			}
		},
		methods: {
			tabsChange: function(idx) {
				this.current = idx
			}
		},
		created() {
			let that = this;
			uni.getLocation({
				accuracy: true,
				geocode: true,
				success: res => {
					that.lat = res.latitude;
					that.lon = res.longitude;
					that.address = (res.address.street || '') + (res.address.streetNum || '')
				},
				fail: err => {}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.circum-box {
		padding: 40rpx 24rpx;

		.til {
			font-size: 40rpx;
			font-weight: bold;
		}

		.circum-con {
			padding: 40rpx 0rpx;
		}

		.map-box {
			padding: 40rpx 0;
			position: relative;
		}

		.address {
			width: 100%;
			height: 60rpx;
			line-height: 50rpx;
			font-size: 30rpx;
			background: rgba(0, 0, 0, 0.4);
			color: white;
			position: absolute;
			bottom: 0;
		}
	}
</style>
