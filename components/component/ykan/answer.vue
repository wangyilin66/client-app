<template>
	<view class="answer">
		{{answerdata.text}}
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		props:{
			answerdata:Object
		}
	}
</script>

<style scoped lang="less">
	.answer{
		font-size: 30rpx;
		color: #1d1d1d;
		margin-bottom: 100rpx;
	}
</style>
