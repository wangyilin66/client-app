<template>
	<view class="list" >
		<view class="lintimg">
			<image :src="item.img" mode="widthFix"></image>
			<view class="attention">
				{{item.gz}}人关注
			</view>
		</view>
		<view class="listcon">
			<view class="contt">
				{{item.title}}
			</view>
			<view class="conttxt">
				{{item.text}}
			</view>
			<view class="contprice">
					<text class="price">{{item.price}} <text class="unit">万</text></text><text class="unitprice">{{item.dj}}元/㎡</text>
			</view>
			<view class="conttype">
				<view class="type" v-for="(itm,idx) in item.type" :key="idx">
					{{itm}}
				</view>
			
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
		 methods:{
			 
		 },
		 props:["item"]
			 
	 }
</script>

<style scoped lang="less">
	.list{
		height: 250rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 50rpx;
		.lintimg{
			width: 300rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;
			image{
				width: 100%;
			}
			.attention{
				font-size: 24rpx;
				height: 33rpx;
				line-height: 33rpx;
				color: #FFFFFF;
				position: absolute;
				top: 6rpx ;
				left: 15rpx;
			}
		}
		.listcon{
			width: 390rpx;
			height: 100%;
			.contt{
				height: 42rpx;
				line-height: 42rpx;
				font-size: 30rpx;
				font-weight: 600;
				color: #1d1d1d;
				margin-bottom: 12;
				
			}
			.conttxt{
				font-size: 24rpx;
				color: #1d1d1d;
				margin-bottom: 14rpx;
			}
			.contprice{
				height: 42rpx;
				line-height: 42rpx;
				margin-bottom: 60rpx;
				.price{
					color: #F83C0A;
					font-size: 30rpx;
					align-items: flex-end;
					.unit{
						font-size: 25rpx;
					}
				}
				.unitprice{
					font-size: 24rpx;
					color:#9B9B9B ;
					margin-left: 15rpx;
				}
			}
			.conttype{
				color: #8A8A8A;
				font-size: 22rpx;
				display: flex;
				justify-content: space-between;
				.type{
					height: 40rpx;
					border: 1rpx solid #8A8A8A;
					border-radius: 50rpx;
					box-sizing: border-box;
					padding: 0rpx 20rpx;
				}
				
			}
		}
		
	}
</style>
