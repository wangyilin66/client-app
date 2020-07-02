<template>
	<view class="options">
		<view class="topsearch"  v-show="noticeidx==0">
			<view class="list" v-for="(item,index) in data">
				<view class="number">
					{{index+1}}
				</view>
				<view class="content">
					<view class="title">
						{{item.name}}
					</view>
					<view class="site">
						{{item.site}}
					</view>
				</view>
				<view class="unitprice">
					{{item.price}}元/㎡
				</view>
			</view>
			
		</view>
		<view class="popularity"  v-show="noticeidx==1">
			<view class="list" v-for="(item,index) in datas">
				<view class="number">
					{{index+1}}
				</view>
				<view class="content">
					<view class="title">
						{{item.name}}
					</view>
					<view class="site">
						{{item.site}}
					</view>
				</view>
				<view class="unitprice">
					{{item.price}}元/㎡
				</view>
			</view>
		</view>
		<view class="deal"  v-show="noticeidx==2">
			<view class="list" v-for="(item,index) in list">
				<view class="number">
					{{index+1}}
				</view>
				<view class="content">
					<view class="title">
						{{item.name}}
					</view>
					<view class="site">
						{{item.site}}
					</view>
				</view>
				<view class="unitprice">
					{{item.price}}元/㎡
				</view>
			</view>
		</view>
		
	</view>
</template>

<script> 
export default{
	name:"options",
	data(){
		return{
			data:[
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"},
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"},
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"},
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"},
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"},
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"},
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"},
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"},
				{"site":"武清·体育中心","name":"凤丹天城","price":"26378"}
			],
			datas:[
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"}
			],
			list:[
				{"site":"武清·体育中心","name":"天下奇观","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"},
				{"site":"武清·体育中心","name":"火焰天都","price":"26378"}
			]
		}
	},
	methods:{
		
	},
	props:["noticeidx"]
}
</script>

<style scoped lang="less">
	.options{
	
		.list:nth-child(-n+3) .number{
			color: #F53E0C;
		}
		
	}
	.list{
		height: 70rpx;
		display: flex;
		justify-content: space-between;
		color: #444444;
		margin-bottom: 50rpx;
		.number{
			font-size: 42rpx;
			font-weight: 600;
			line-height: 70rpx;
		}
	}
	.content{
		flex: 1;
		margin-left: 37rpx;
		.title{
			height: 46rpx;
			font-size: 28rpx;
		}
		.site{
			height: 34rpx;
			font-size: 24rpx;
			color: #999999;
		}
		
	}
	.unitprice{
		font-size: 28rpx;
		height: 100%;
		line-height: 70rpx;
	}
</style>
