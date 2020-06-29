<template>
	<view class="house-list">
		<view class="list-item" v-for="(item,index) in listData" :key='index' @click="listChange(index)">
			<view class='img-left'>
				<image :src="item.imgUrl" mode="widthFix"></image>
			</view>
			<view class='info-box'>
				<view class="info-row">
					<view class="info-row-top">
						<view class="info-row-til">{{item.til}}</view>
						<view class="info-row-info info-tips">{{item.infos}}</view>
						<view class="info-row-info info-light">{{item.tips}}</view>
					</view>
					<view class="info-row-price">{{item.price}}元/㎡</view>
				</view>
				<view class='info-heart'  @click.prevent.stop="heartChage(index)">
					<u-icon :name="item.isHeart?'heart-fill':'heart'" size="42" :color="item.isHeart?'#f83c0a':'#1d1d1d'" style="position:sticky;"></u-icon>
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
		props:{
			listData:{
				type:Array,
				required:true
			}
		},
		methods:{
			heartChage(idx){
				this.$emit('heart',idx)
			},
			listChange(idx){
				this.$emit('listChange',idx)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.house-list{
		padding:0 24rpx;
	}
	.list-item {
		width: 702rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding-top: 12rpx;
		padding-bottom: 12rpx;
	}
	
	.img-left uni-image {
		width: 300rpx;
		display: block;
	}
	
	.info-box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 382rpx;
		
		.info-row{
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			align-content: center;
			justify-content: space-between;
			
			.info-row-top{
				line-height:46rpx;
				.info-row-til {
					font-size: 30rpx;
					font-weight: bold;
					color:$u-main-color;
				}
				
				.info-row-info {
					font-size: 24rpx;
				}
				.info-tips{
					color:$u-tips-color;
				}
				.info-light{
					color:$u-light-color;
				}
			}
			
			.info-row-price{
				font-size:30rpx;
				font-weight:bold;
				color:$u-type-error;
				line-height:100%;
			}
		}
		
		.info-heart{
			align-self: center;
		}
		
		.u-iconfont{
		}
	}
	
	
	
</style>
