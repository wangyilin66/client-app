<template>
	<view class="cyclopedia">
		<view class="cycheader">
			<view class="option" :class="ac==index?'ac':''" v-for="(item,index) in date" @click="cut(index)">
				{{item}}
			</view>
		</view>
		<view class="cycbox">
			<buyhouse></buyhouse>
		</view>
		
	</view>
</template>

<script>
	import buyhouse from "@/components/component/cyclopedia/buyhouse.vue"
	export default{
		components:{
			buyhouse
		},
		data(){
			return{
				date:["买房","租房","卖房","新房","更多>"],
				ac:0
			}
		},
		methods:{
			cut:function(index){
				this.ac=index;
				
			}
		}
	}
</script>

<style scoped lang="less">
	.cyclopedia{
		box-sizing: border-box;
		padding: 0 30rpx;
		.cycheader{
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding: 40rpx 0;
			.option{
				width: 120rpx;
				height: 49rpx;
				line-height: 49rpx;
				text-align: center;
				color:#808080;
				font-size: 30rpx;
				border-radius: 25rpx;
			}
			.ac{
				color: #FFFFFF;
				background:#47CD97 ;
			}
		}
		
	}
	
</style>
