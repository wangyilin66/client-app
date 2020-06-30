<template>
	<view class="dyue">
		<navbersix></navbersix>
		<view class="dyuebox">
			<view class="boxlist" v-for="(item,index) in data " :key='index' @click="go">
				<view class="img">
					<image :src="item.img" mode=""></image>
				</view>
				<view class="textinfo">
					<view class="title">
						<view class="">
							{{item.title}}
						</view>
						<view class="time">
							{{item.time}}
						</view>
					</view>
					
					<view class="hint">
						北京碧桂园预售30000元/平
					</view>
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	import navbersix from  "@/components/component/nav/navbersix.vue"
	export default{
		components:{
			navbersix
		},
		data(){
			return{
				data:[
					{"title":"新房精选","img":"../../../static/images/news/xx_xfyx@2x.png","img2":"../../../static/images/index/home_fangzi_pic.png"},
					{"title":"新房精选","img":"../../../static/images/news/xx_xfyx@2x.png","img2":"../../../static/images/index/home_fangzi_pic.png"},
					{"title":"新房精选","img":"../../../static/images/news/xx_xfyx@2x.png","img2":"../../../static/images/index/home_fangzi_pic.png"}
				],
				newinfo:"新房优选"
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="less">
	.dyuebox{
		box-sizing: border-box;
		padding:0 24rpx;
		.boxlist{
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 40rpx 0 64rpx;
			
			.img{
				width: 96rpx;
				height: 96rpx;image{
					width: 100%;
					height: 100%;
				}
			}
			.textinfo{
				flex: 1;
				box-sizing: border-box;
				padding: 3rpx;
				margin-left: 15rpx;
				.title{
					font-size: 30rpx;
					display: flex;
					justify-content: space-between;
				
				}
				.time{
					font-size: 22rpx;
					color: #808080;
					
				}
				.hint{
					font-size: 26rpx;
					margin-top: 9rpx;
					color: #808080;
				}
			}
		}
	}
</style>
