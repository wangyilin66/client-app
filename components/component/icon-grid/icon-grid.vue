<template>
	<view class='icon-grid' v-bind:style="{'--flexWrap':flexWrap,fontSize:fontSize+'rpx','--rowNum':rowNum}">
		<view v-for="(item,index) in gridData" :key="index" class="grid-item" @click="iconChange(index)">
			<image :src="item.icon" v-bind:style="{width:imgSize+'rpx',height:imgSize+'rpx'}"/>
			<text>{{item.text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			iconChange(idx){
				this.$emit('navToGo',idx);
			}
		},
		props: {
			gridData: {
				type: Array,
				required: true
			},
			flexWrap:{
				type:String,
				default:'nowrap'
			},
			rowNum:{
				type:Number,
				required:true
			},
			fontSize:{
				type:Number,
				default:26
			},
			imgSize:{
				type:Number,
				required:true
			}
		}
	}
</script>

<style>
	.icon-grid {
		display: flex;
		flex-direction: row;
		flex-wrap: var(--flexWrap);
		justify-content: space-around;
		align-items: center;
		align-content: space-around;
	}
	
	.grid-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-basis:calc(100%/var(--rowNum));
		padding-top:16rpx;
		padding-bottom:16rpx;
	}
	.grid-item uni-image{
		margin-bottom:12rpx;
	}
</style>
