<template>
	<view class="beltsee">
		<view class="beltseeleft">
			<view class="timer">
				<view class="symbol">
					<view class="">
						
					</view>
				</view>
				<view class="date">
					{{beltdata.date}}
				</view>
			</view>
			<view class="timer">
				<view class="symbol">
				
				</view>
				<view class="year">
					{{beltdata.year}}
				</view>
			</view>
			
		</view>
		<view class="beltseeright">
			<view class="right-t">
				{{beltdata.quyu}}
			</view>
			<view class="right-type">
				{{beltdata.type}}
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
			beltdata:Object,
		}
	}
</script>

<style scoped lang="less">
	.beltsee{
		display: flex;
		margin-bottom: 45rpx;
		.beltseeleft{
			width: 140rpx;
			margin-right: 80rpx;
			.timer{
				display: flex;
				// justify-content: space-between;
				height: 42rpx;
				align-items: center;
				margin-bottom: 14rpx;
				.symbol{
					width: 40rpx;
					view{
						width:20rpx;
						height: 20rpx;
						border-radius: 50%;
						background:#47CD97;
					}
				}
				.date{
					font-size: 30rpx;
				}
			}
			.year{
				font-size:30rpx;
				color: #BBBBBB;
				text-align: center;
			}
		
		}
		.beltseeright{
			width: 285rpx;
			height: 96rpx;
			box-sizing: border-box;
			padding: 11rpx 17rpx;
			background: #47CD97;
			color: #FFFFFF;
			border-radius: 8rpx;
			.right-t{
				font-size: 30rpx;
				height: 40rpx;
				line-height: 40rpx;
			}
			.right-type{
				font-size: 26rpx;
				height: 30rpx;
				line-height: 30rpx;
			}
		}
	}
</style>
