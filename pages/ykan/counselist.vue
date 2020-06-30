<template>
	<view class="counselist">
		<navbers></navbers>
		<view class="counselistbox">
			<view class="list" v-for="(item,index) in data" :key="index" @click="gocouselor(item)">
				<view class="list-image">
					<image :src="item.image" mode=""></image>
				</view>
				<view class="list-con">
					<view class="con-name">
						{{item.name}}
					</view>
					<view class="con-con">
						{{item.option}}
					</view>
					<view class="con-con">
						已帮助<text>{{item.number}}</text>人解答
					</view>
				</view>
				<view class="list-phone">
					<image :src="item.image2" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navbers from "../../components/component/nav/navbers.vue"
	export default{
		components:{
			navbers,
		},
		data(){
			return{
				data:[
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"},
					{"image":"../../static/images/ykan/20160831002034_FVid3.jpeg","name":'周星星',"option":"海淀区-中关村旗舰店-3年","number":600,"image2":"../../static/images/ykan/yk_phone_1@2x.png"}
				]
			}
		},
		methods:{
			gocouselor:function(item){
				console.log(item)
				item=JSON.stringify(item)
				uni.navigateTo({
					url:"./counselor?item="+item
				})
			}
			
		}
	}
</script>

<style scoped lang="less">
	.counselistbox{
		box-sizing: border-box;
		padding: 0 36rpx;
		.list{
			height: 150rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.list-image{
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
				overflow: hidden;
				margin-bottom: 2rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.list-con{
				flex: 1;
				margin-left: 20rpx;
				.con-name{
					font-size: 30rpx;
					color: #000000;
				}
				.con-con{
					color: #BBBBBB;
					font-size: 24rpx;
					text{
						color: #47CD97;
					}
				}
			}
			.list-phone{
				width: 28rpx;
				height: 28rpx;
				image{
					width: 100%;
					height: 100%;
					
				}
			}
		}
		
	}
</style>
