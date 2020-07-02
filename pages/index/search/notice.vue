<template>
	<view class="">
		<view class="notice">
			<view class="item" :class="noticeidx==index?'ac':''" v-for="(item,index) in list" @click="notice(index)">
				{{item.name}}
			</view>
		
		</view>
		<options :noticeidx="noticeidx"></options>
	</view>
	
</template>

<script>
	import options from "./options.vue"
	export default{
		name:"notice",
		components:{
			options
		},
		data(){
			return{
				list:[
					{"name":"热搜榜","chec":false},
					{"name":"人气榜","chec":false},
					{"name":"成交榜","chec":false}
					],
					noticeidx:0
				
			}
		},
		methods:{
			notice(index){
				console.log(index)
				this.noticeidx=index
			}
			
		}
	}
</script>

<style scoped lang="less">
	.notice{
		display: flex;
		font-size: 38rpx;
		color:#999999;
		margin-bottom: 39rpx;
		font-weight: 600;
		.item{
			margin-right: 40rpx;
		}
	}
	.ac{
		color: #444444;
	}
</style>
