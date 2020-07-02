<template>
	<view class="findbox">
		<view class="title">
			<view class="titletxt">
				搜索历史
			</view>
			<view class="image" @click="del">
				<image src="../../../static/images/index/shanchu@2x.png" mode="widthFix"></image>
				<slot></slot>
			</view>
		</view>
		<view class="lists">
			<view class="list" v-for="(item,index) in data" :key="index" @click="seach(item)">
				{{item}}
			</view>
		</view>
		<view class="title">
			<view class="titletxt">
				搜索发现
			</view>
			<view class="image" @click="refresh">
				<image src="../../../static/images/index/shuaxin@2x.png" mode="widthFix"></image>
				<slot></slot>
			</view>
		</view>
		<view class="lists">
			<view class="list" v-for="(itm,idx) in discover" :key="idx" @click="seach(itm)"> 
				{{itm}}
			</view>
			
		</view>
	</view>
</template>

<script> 
export default{
	name:"history",
	components:{
		
	},
	data(){
		return{
			data:["天下","翡翠","天涯","明艳"],
			discover:["龙都城","黄河郡","衡山涯"]
		}
	},
	methods:{
		refresh:function(){
			console.log("refresh")
			this.discover=["一天","两天","三天"]
		},
		del:function(){
			this.data=[]
		},
		seach:function(itm){
			this.$emit("seach",itm )
		},
		record:function(itm){
			console.log(itm)
			this.$emit("record",itm )
		}
	}
}
</script>

<style scoped lang="less">
	.findbox{
		.title{
			height:139rpx;
			line-height: 139rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.titletxt{
				font-size: 38rpx;
				color:#444444;
				box-sizing: border-box;
				padding:10rpx 0;
			}
			.image{
				width: 36rpx;
				height: 36rxp;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.lists{
			display: flex;
			flex-wrap: wrap;
			margin-bottom:80rpx;
			.list{
				height: 60rpx;
				line-height: 60rpx;
				padding:0 30rpx;
				font-size: 24rpx;
				color:#444444 ;
			}
		}
	}
</style>
