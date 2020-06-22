<template>
	<view class="card" v-bind:style="{height:cardOption.height + 'rpx',paddingTop:cardOption.paddingTop + 'rpx',paddingBottom:cardOption.paddingBottom + 'rpx',paddingLeft:cardOption.paddingLeft + 'rpx',paddingRight:cardOption.paddingRight + 'rpx',marginTop:cardOption.marginTop+'rpx',borderRadius:cardOption.borderRadius + 'rpx'}">
		<slot></slot>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			cardOption:{
				type:Object,
				default:{
					paddingTop:24,
					paddingBottom:24,
					paddingLeft:24,
					paddingRight:24,
					borderRadius:2
				}
			}
		}
	}
</script>

<style>
	.card{
		background-color:#ffffff;
		box-shadow:4rpx 8rpx 20rpx 1rpx rgba(186,186,186,0.17);
		position: relative;
		z-index:9;
	}
</style>
