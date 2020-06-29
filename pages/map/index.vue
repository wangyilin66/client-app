<template>
	<view>
		<status-bar :barColor="barColor"></status-bar>
		<!-- <map style="width:750rpx;height:900rpx;" scale="16" :longitude="longitude" :latitude="latitude" :markers="covers" :id="id">
			<cover-view class="map-cover"></cover-view>
			<cover-view class="map-cover1"></cover-view>
		</map> -->
		
		<web-view src="http://www.ypzf.com" class="map-box"></web-view>
	</view>
</template>


<script>
	import statusBar from '@/components/component/status-bar/status-bar.vue'
	export default {
		data() {
			return {
				cover:[
					{
						id:0,
					},
					{
						id:1,
					},
					{
						id:2,
					},
				],
				
				
				barColor:'ffffff',
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					// iconPath: '../../static/images/index/location.png',
					width:300,
					height:300,
					label:{
						content:"123456",
						color:'#ffffff'
					}
				}]
			}
		},
		methods: {

		},
		components:{
			statusBar
		}
	}
</script>

<style>
	.map-box {
		width:750rpx;
		height:750rpx;
	}
	.map-cover{
		width:100rpx;
		height:100rpx;
		background-color: #47CD97;
		position: absolute;
		top:0;
		left:0;
	}
	.map-cover1{
		width:100rpx;
		height:100rpx;
		background-color: #FF0000;
		position: absolute;
		top:0;
		right:0;
	}
</style>
