<template>
	<view class="status-bar" :style="{backgroundColor:'#'+ barColor}">
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			barColor: {
				type: String,
				default: 'FFFFFF',
			},
		}
	}
</script>

<style>
	.status-bar {
		position: relative;
		height: var(--status-bar-height);
		width: 100%;
		z-index:99;
	}
</style>
