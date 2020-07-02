<template>
	<view class="history">
		<find></find>
		<notice></notice>
	</view>
</template>

<script> 
import find from "./find.vue"
import notice from "./notice.vue"
export default{
	name:"history",
	components:{
		find,
		notice
	},
	data(){
		return{
			
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="less">
	.history{
		box-sizing: border-box;
		padding:0 40rpx;
		
	}
</style>
