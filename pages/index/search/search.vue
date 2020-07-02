<template>
	<view class="seach">
		<search @vague="vague"></search>
		<view class="contbox">
			<find @seach="seach"></find>
			<notice></notice>
		</view>
	</view>
</template>

<script>
	import search from "./seachmodule.vue"
	import history from "./history.vue"
	import find from "./find.vue"
	import notice from "./notice.vue"
	export default{
		components:{
			search,
			find,
			notice
		},
		data(){
			return{
				
			}
		},
		methods:{
			cancel(){
				uni.navigateBack({
					delta:1
				})
			},
			vague(data){
				console.log(data)
			},
			seach(item){
				console.log(item)
			}
		}
	}
</script>

<style scoped lang="less">
	.contbox{
		box-sizing: border-box;
		padding:0 40rpx;
	}
</style>
