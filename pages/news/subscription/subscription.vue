<template>
	<view class="subscription">
		<subnaver></subnaver>
		<view class="subbox">
			<view class="sublist" v-for="(item,index) in data" :key="index"  @click="godyue()">
				<view class="titlebox">
					<view class="ico">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="title">
						{{item.title}}
					</view>
					<view class="titletime">
						03月11日 18:30
					</view>
				</view>
				<view class="img">
					<image :src="item.img2" mode=""></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import subnaver from  "@/components/component/nav/subnavber.vue"
	export default{
		components:{
			subnaver
		},
		data(){
			return{
				data:[
					{"title":"新房精选","img":"../../../static/images/news/xx_xfyx@2x.png","img2":"../../../static/images/index/home_fangzi_pic.png"},
					{"title":"新房精选","img":"../../../static/images/news/xx_xfyx@2x.png","img2":"../../../static/images/index/home_fangzi_pic.png"},
					{"title":"新房精选","img":"../../../static/images/news/xx_xfyx@2x.png","img2":"../../../static/images/index/home_fangzi_pic.png"}
				],
				title:"新房优选"
				
			}
		},
		methods:{
			godyue(){
				console.log(111);
				uni.navigateTo({
					url:"./dyue?title="+this.title
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.subbox{
		box-sizing: border-box;
		padding:0 24rpx;
		.sublist{
			.titlebox{
				height: 104rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.ico{
					width: 56rpx;
					height: 56rpx;
					image{
						width: 100%;
						height: 100%;
					}
				}
				.title{
					font-size: 30rpx;
					flex: 1;
					margin-left: 21rpx;
					font-weight: 600;
				}
				.titletime{
					font-size: 26rpx;
					color: #808080;
				}
			}
			.img{
				height: 371rpx;
				border-radius: 8rpx;
				overflow: hidden;
				margin-bottom: 50rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
