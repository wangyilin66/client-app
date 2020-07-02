<template>
	<view class="likelist" >
		<view class="lintimg">
			<image :src="list.img" mode="widthFix"></image>
		</view>
		<view class="listcon">
			<view class="title">
				<view class="title1">
					{{list.title}}
				</view>
				<view class="title2">
					<view class="jiang">
						{{list.types}}
					</view>
				</view>
				<view class="price">
					{{list.prices}}<text>万</text>
				</view>
			</view>
			<view class="hint">
				<view class="hint1">
					{{list.text}}
				</view>
				<view class="unitprice">
					{{list.dj}}元/m
				</view>
			</view>
			<view class="location">
				{{list.loctiong}}
			</view>
			<view class="rim">
				<view class="rimlist" v-for="(item,index) in list.type">
					{{item}}
				</view>
			</view>
			<view class="site">
				<view class="siteimg">
					<image src="../../../static/images/mpage/used/location.png" mode=""></image>
				</view>
				<view class="sitetxt">
					{{list.dz}}
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
		 props:["list"]
			 
	 }
</script>

<style scoped lang="less">
	.likelist{
		height: 250rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 50rpx;
		.lintimg{
			width: 300rpx;
			height: 200rpx;
			border-radius: 10rpx;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.listcon{
			width: 390rpx;
			height: 100%;
			.title,.hint{
				display: flex;
				justify-content: space-between;
			}
			.title{
				height: 42rpx;
				line-height: 42rpx;
								.title1{
					font-size: 30rpx;
					font-weight: 600;
					color: #1d1d1d;
				}
				.title2{
					flex:1;
					font-size: 22rpx;
					margin-left: 10rpx;
					.jiang{
						width: 30rpx;
						height:100%;
						background:#EBECF0 ;
						text-align: center;
						color:#F83C0A ;
					}
					
				}
				.price{
					font-size: 30rpx;
					color:#F83C0A;
					text{
						font-size: 25rpx;
					}
				}
			}
			.hint{
				height: 33rpx;
				line-height: 33rpx;
				align-items: center;
				font-size: 24rpx;
				.hint1{
					color: #1D1D1D;
				}
				.unitprice{
					color: #9B9B9B;
				}
			}
			.location{
				height: 33rpx;
				font-size: 24rpx;
				color:#1D1D1D ;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
				margin-bottom: 11rpx;
			}
			.rim{
				display: flex;
				align-items: center;
				margin-bottom: 22rpx;
				.rimlist{
					height: 34rpx;
					line-height: 34rpx;
					background: #EBECF0;
					font-size: 22rpx;
					color: #8A8A8A;
					text-align: center;
					padding: 0 4rpx;
					margin-right: 10rpx;
				}
				
			}
			.site{
				height: 33rpx;
				line-height: 33rpx;
				display: flex;
				font-size: 24rpx;
				color:#9B9B9B ;
				align-items: center;
				.siteimg{
					width:28rpx;
					height: 24rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				
			}
		}
		
	}
</style>
