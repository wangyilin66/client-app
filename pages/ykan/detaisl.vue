<template>
	<view class="askdetails">
		<navber class="nav"></navber>
		<view class="container">
			<view class="">
			<!-- 头部 -->
			<view class="header">
				<!-- biaoti -->
				<view class="header-title">
					{{item.query}}
				</view>
				<!-- 问题类型 -->
				<view class="type">
					<view class="typeunm">
						租房
					</view>
				</view>
				<view class="quiz">
					<view class="quizuser">
						提问者：<text>优家小助手</text>
					</view>
					<view class="quiztime">
						{{item.updateTime}}
					</view>
				</view>
			</view>
			<!-- 所有的回答-->
			<view class="detabox">
				<!-- 所有的回答 -->
				<view class="allquiz">
					共20个回答
				</view>
				<view class="quizlist"  @click="goparticulars">
					<!-- 头像及昵称 -->
					<view class="quizlist-title">
						<view class="title-image">
							<image src="../../static/images/ykan/20160831002034_FVid3.jpeg" mode=""></image>
						</view>
						<view class="title-name">
							刘德华
						</view>
						<view class="phone">
							<image src="../../static/images/ykan/yk_phone@2x.png" mode=""></image>
						</view>
					</view>
					<!-- 内容 -->
					<view class="quizlist-con">
						{{item.answer}}	
					</view>
					<view class="updateTime">
						{{item.updateTime}}
					</view>
					
				</view>
				<view class="quizlist" >
					<!-- 头像及昵称 -->
					<view class="quizlist-title">
						<view class="title-image">
							<image src="../../static/images/ykan/20160831002034_FVid3.jpeg" mode=""></image>
						</view>
						<view class="title-name">
							刘德华
						</view>
						<view class="phone">
							<image src="../../static/images/ykan/yk_phone@2x.png" mode=""></image>
						</view>
					</view>
					<!-- 内容 -->
					<view class="quizlist-con">
						{{item.answer}}	
					</view>
					<view class="updateTime">
						{{item.updateTime}}
					</view>
					
				</view>
				<view class="quizlist" >
					<!-- 头像及昵称 -->
					<view class="quizlist-title">
						<view class="title-image">
							<image src="../../static/images/ykan/20160831002034_FVid3.jpeg" mode=""></image>
						</view>
						<view class="title-name">
							刘德华
						</view>
						<view class="phone">
							<image src="../../static/images/ykan/yk_phone@2x.png" mode=""></image>
						</view>
					</view>
					<!-- 内容 -->
					<view class="quizlist-con">
						{{item.answer}}	
					</view>
					<view class="updateTime">
						{{item.updateTime}}
					</view>
					
				</view>
			
			
			
			
			</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import navber from "../../components/component/nav/navbar.vue"
	export default{
		components:{
			navber
		},
		data(){
			return{
				n:6,
				item: {
					answer: "女性租房应该注意：在签合同时业主在场签,女性租房应该注意：在签合同时业主在场签,女性租房应该注意：在签合同时业主在场签,",
					answerNum: 8,
					query: "女性租房应该注意哪些问题？",
					updateTime: "2020-03-02 18:00",
				}
			}
		},
		methods:{
			goparticulars:function(){
				uni.navigateTo({
					url:"./particulars"
				})
			}
			
		},
		
	}
</script>

<style lang="less" scoped>
	// .nav{
	// 	width: 100%;
	// 	position: fixed;
	// 	top: 0;
	// 	z-index: 10;
	// }
	.askdetails{
		display: flex;
		flex-direction: column;
		.container{
			flex: 1;
			overflow-y: auto;
			.header{
				box-sizing: border-box;
				padding: 32rpx 30rpx 0;
				.header-title{
					font-size: 40rpx;
					color: #000000;
				}
				.type{
					height: 42rpx;
					margin-top: 27rpx;
					font-size: 26rpx;
					color: #5F8AB8;
				}
				.quiz{
					margin-top:31rpx;
					color: #BBBBBB;
					font-size: 24rpx;
					display: flex;
					justify-content: space-between;
					text{
						margin-left: 15rpx;
					}
					
				}
			}
			.detabox{
				box-sizing: border-box;
				padding: 0 20rpx 0 28rpx;
				.allquiz{
					height: 100rpx;
					line-height: 100rpx;
					font-size: 26rpx;
					color: #1D1D1D;
					
				}
				.quizlist{
					.quizlist-title{
						border-top: 1rpx solid #EBEBEB;
						box-sizing: border-box;
						padding: 30rpx 0 30rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.title-image{
							width: 90rpx;
							height: 90rpx;
							border-radius: 50%;
							overflow: hidden;
							image{
								width: 100%;
								height: 100%;
							}
						}
						.title-name{
							font-size: 30rpx;
							color: #000000;
							flex: 1;
							margin-left: 20rpx;
							font-weight: 600;
						}
						.phone{
							width: 60rpx;
							height: 60rpx;
							border-radius: 50%;
							overflow: hidden;
							image{
								width: 100%;
								height: 100%;
							}
						}
					}
					.quizlist-con{
						box-sizing: border-box;
						padding-right:45rpx ;
						margin-bottom: 30rpx;
						color: #171717;
						font-size:30rpx;
					}
					.updateTime{
						margin-bottom: 30rpx;
						font-size: 24rpx;
						color: #BBBBBB;
					}
				}
				
			}
		}
		
	}
	
</style>
