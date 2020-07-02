<template>
	<view class="renting" @click="godetail(3)">
		<view class="renting-t">
			<view class="type">{{renting.type}}</view><view class="title">{{renting.dqu}}</view>
		</view>
		<view class="pricetimr">
			<view class="price">{{renting.price}}元/月</view>
			<view class="time">
				签约日期： {{renting.time}}
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			renting:Object,
		},
		data(){
			return{
				
			}
		},
		methods:{
			godetail:function(item){
				this.$emit("godel",item);
			}
		},
		
	}
</script>
<style scoped lang="less">
	.renting{
		margin-bottom: 44rpx;
		margin-top: 40rpx;
		border-bottom: 1rpx solid #EBEBEB;
		}
	.renting-t{
		height: 40rpx;
		line-height: 40rpx;
		margin-bottom: 20rpx;
		display: flex;
		.type{
			width: 80rpx;
			height: 40rpx;
			background:#47CD97 ;
			text-align: center;
			color: #FFFFFF;
			font-size: 26rpx;
			border-radius: 8rpx;
		}
		.title{
			font-size: 30rpx;
			color: #000000;
			margin-left: 15rpx;
		}
	}
	.pricetimr{
		height: 48rpx;
		line-height: 48rpx;
		display: flex;
		margin-bottom: 33rpx;
		// justify-content: space-between;
		.price{
			font-size: 34rpx;
			color:#F83C0A;
		}
		.time{
			font-size:26rpx;
			color: #808080;
			margin-left: 40rpx;
		}
	}


</style>
