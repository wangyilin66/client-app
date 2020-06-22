<template>
	<view>
		<map style="width:750rpx;height:900rpx;" scale="16" :longitude="longitude" :latitude="latitude" :markers="covers" :id="id"></map>
	</view>
</template>


<script>
	export default {
		data() {
			return {
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

		}
	}
</script>

<style>
	.map {}
</style>
