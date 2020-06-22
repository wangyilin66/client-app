<template>
	<view class="module-box" v-bind:class="{hasmargin:hasMargin}" v-bind:style="{paddingBottom:paddingBottom + 'rpx',paddingTop:paddingTop + 'rpx'}">
		<slot></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		props:{
			paddingBottom:{
				type:Number,
				default: 0,
			},
			paddingTop:{
				type:Number,
				default: 0,
			},
			hasMargin:{
				type:Boolean,
				default: true,
			}
		}
	}
</script>

<style>
	.module-box {
		padding-left:24rpx;
		padding-right:24rpx;
		background-color: #ffffff;
	}
	.hasmargin{
		margin-bottom: 26rpx;
	}
</style>
