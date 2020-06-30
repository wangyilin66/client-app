<template>
	<view class="reply" @click="godetail(2)">
		<view class="text">
			{{replydata.text}}
		</view>
		<view class="cont">
			<view class="area">
				{{replydata.name}}
			</view>
			<view class="time">
				{{replydata.time}}
			</view>
			<view class="allreply">
				共{{replydata.all}}个回答
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			replydata:Object
		},
		methods:{
			godetail:function(item){
				this.$emit("godetail",item)
			}
		}
	}
</script>

<style scoped lang="less">
	.reply{
		box-sizing: border-box;
		padding: 30rpx 0;
		border-bottom: 1rpx solid #EBEBEB;
		.text{
			font-size: 30rpx;
			color: #1d1d1d;
			margin-bottom: 30rpx;
		}
		.cont{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.area{
				font-size: 26rpx;
				color: #5F8AB8;
			}
			.time{
				font-size: 24rpx;
				color:#BBBBBB;
			}
			.allreply{
				font-size:24rpx;
				color:#47CD97;
				
			}
		}
	}
</style>
