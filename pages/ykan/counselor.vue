<template>
	<view class="counselor">
		<navber class="nav"></navber>
		<!-- <navber></navber> -->
		<!-- 经纪人信息  -->
		<view class="header">
			<view class="heab">

			</view>
			<view class="userinfo">
				<view class="info-title">
					<view class="title-image">
						<image :src="userinfo.image" mode=""></image>
					</view>
					<view class="title-name">
						<view class="name">
							{{userinfo.name}}
						</view>
						<view class="getjob">
							{{userinfo.option}}
						</view>
					</view>
					<view class="title-level">
						<text>5.0分</text>
						<text class="level">100人评论</text>
					</view>
				</view>
				<view class="info-con">
					<view class="" v-for="(item,index) in item">
						<view class="con-number">
							{{item.number}}
						</view>
						<view class="con-text">
							{{item.text}}
						</view>
					</view>
				</view>

			</view>
		</view>
		<view class="counselorbox">
			<!-- 精选房源 -->
			<view class="coutitle">
				<view class="coutitleleft">
					精选房源
				</view>
				<view class="coutitright">
					更多》
				</view>
			</view>
			<view class="house-list">
				<view class="container">
					
					<view class="list-add" v-for="house in 3">
						<!-- 照片 -->
						<view class="list-image">
							<image src="../../static/images/ykan/20160831002034_FVid3.jpeg" mode=""></image>
						</view>
						<view class="list-t">
							暴力乐佳花园 2室一厅一吃以为
						</view>
						<view class="list-type">
							2室1厅/140m
						</view>
						<view class="list-price">
							<view class="allprice">
								<text>5000</text>元/月
							</view>
							<view class="price">
								24000元/平
							</view>
						
							
						</view>
					</view>
				</view>
				
			</view>
			<!-- TA熟悉的小区 -->
			<view class="coutitle">
				<view class="coutitleleft">
					TA熟悉的小区
				</view>
				<view class="coutitright">
					更多》
				</view>
			</view>
			<view class="house-list">
				<view class="container">
					
					<view class="list-add" v-for="house in 3">
						<!-- 照片 -->
						<view class="list-image">
							<image src="../../static/images/ykan/20160831002034_FVid3.jpeg" mode=""></image>
						</view>
						<view class="list-t">
							暴力乐佳花园 2室一厅一吃以为
						</view>
						<view class="list-type">
							2室1厅/140m
						</view>
						<view class="list-price">
							<view class="allprice">
								<text>5000</text>元/月
							</view>
							<view class="price">
								24000元/平
							</view>
						
							
						</view>
					</view>
				</view>
				
			</view>
			<!-- TA的 二手房 -->
			<view class="coutitle">
				<view class="coutitleleft">
					TA的二手房
				</view>
				<view class="coutitright">
					更多》
				</view>
			</view>
			<!-- TA的租房(30套) -->
			<view class="coutitle">
				<view class="coutitleleft">
					TA的租房(30套)
				</view>
				<view class="coutitright">
					更多》
				</view>
			</view>
			<!-- 近一年的租凭成交记录(30套) -->
			<view class="coutitle">
				<view class="coutitleleft">
					近一年的租凭成交记录(30套)
				</view>
				<view class="coutitright" @click="gorecord">
					更多》
				</view>
			</view>
			<view class="deal">
				<renting @godel="godel" :renting="item" v-for="(item,index) in zuf"></renting>
			</view>
			<!-- 问答 -->
			<view class="coutitle">
				<view class="coutitleleft">
					TA的问答
				</view>
				<view class="coutitright" @click="gomore">
					更多》
				</view>
			</view>
			<view class="answerbox">
				<answer v-for="(item,index) in answer" :answerdata="item"></answer>
			</view>
			<!-- 带看记录 -->
			<view class="coutitle">
				<view class="coutitleleft">
					带看记录
				</view>
				<view class="coutitright" @click="gomorebie()">
					更多》
				</view>
			</view>
			<view class="beltseebox">
				<beltsee :beltdata="item" v-for="(item,index) in bele"></beltsee>
			</view>
			
		</view>
		<!-- 联系经纪人 -->
		<view class="middleman">
			<view class="middlemanimage">
				<image src="../../static/images/ykan/yk_phone@2x.png" mode=""></image>
			</view>
			<view class="">
				联系该经纪人
			</view>
		</view>
	</view>
</template>

<script>
	import navber from "../../components/component/nav/navbar.vue"
	import renting from "../../components/component/ykan/renting.vue"
	import answer from "../../components/component/ykan/answer.vue"
	import beltsee from "../../components/component/ykan/beltsee.vue"
	export default {
		components:{
			renting,
			answer,
			beltsee,
			navber
		},
		data() {
			return {
				house:{
					"image":"../../static/images/ykan/20160831002034_FVid3.jpeg",
					"title":"暴力乐佳花园 2室一厅一吃以为",
					"type":"2室1厅/140m",
					"price":"5000"
				},
				item: [{
						"number": 12,
						"text": "买卖成交"
					},
					{
						"number": 21,
						"text": "租凭成交"
					},
					{
						"number": 16,
						"text": "30天凭租带看"
					},
					{
						"number": 469,
						"text": "关注人数"
					}
				],
				zuf:[
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"}
				],
				answer:[
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？"},
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？"},
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？"}
				],
				bele:[
					{"year":"2020","date":"03-29","quyu":"星河湾2号院","type":"租房"},
					{"year":"2020","date":"03-29","quyu":"星河湾2号院","type":"租房"},
					{"year":"2020","date":"03-29","quyu":"星河湾2号院","type":"租房"}

				],
				userinfo:null,
			
			}
		},
		onLoad(option) {
			console.log(this.userinfo=JSON.parse(option.item))
			
		},
		methods: {
			counselor(item) {
				console.log(111)
			},
			gomore:function(){
				uni.navigateTo({
					url:"./replys"
				})
			},
			gorecord:function(){
				uni.navigateTo({
					url:"./record"
				})
			},
			godel:function(item){
				console.log(item)
				uni.navigateTo({
					url:"./detaisl"
				})
			},
			gomorebie:function(){
				uni.navigateTo({
					url:"./bietsee"
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
	.counselor {
		.header {
			height: 430rpx;
			background: #FFFFFF;
			position: relative;

			.heab {
				content: "";
				height: 160rpx;
				background: #47CD97;
			}

			.userinfo {
				box-sizing: border-box;
				padding: 30rpx 25rpx;
				width: 700rpx;
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				height: 300rpx;
				background: #FFFFFF;
				border-radius: 2rpx;

				.info-title {
					display: flex;
					justify-content: space-between;
					margin-bottom: 30rpx;

					.title-image {
						width: 90rpx;
						height: 90rpx;
						border-radius: 50%;
						overflow: hidden;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.title-name {
						flex: 1;
						margin-left: 15rpx;

						.name {
							font-size: 30rpx;
							color: #000000;
							margin-bottom: 10rpx;
						}

						.getjob {
							font-size: 24rpx;
							color: #808080;
						}
					}

					.title-level {
						font-size: 26rpx;
						color: #000000;

						.level {
							margin-left: 20rpx;
						}
					}
				}

				.info-con {
					display: flex;
					justify-content: space-around;
					text-align: center;

					.con-number {
						font-size: 40rpx;
						color: #000000;
					}

					.con-text {
						font-size: 24rpx;
						color: #808080;
					}
				}
			}

		}
		.counselorbox {
			box-sizing: border-box;
			padding: 0 0 0 24rpx;

			.coutitle {
				height: 56rpx;
				display: flex;
				align-items: flex-end;
				justify-content: space-between;
				margin-bottom: 33rpx;
				color: #000000;

				.coutitleleft {
					font-size: 40rpx;
				}

				.coutitright {
					font-size: 30rpx;
					margin-right: 24rpx;
				}
			}
			.house-list{
				// flex-direction: row;
				// border-radius: 8rpx;
				// flex-wrap: nowrap;
				// display:flex;
				// overflow-x: auto;
				margin-bottom: 90rpx;
				.container{
					display: flex;
					// flex-direction: row;
					overflow-x: auto;
				}
				.list-add{
					width: 300rpx;
					margin-right: 24rpx;
					// height: 280rpx;
					.list-image{
						height: 200rpx;
						overflow: hidden;
						margin-bottom: 14rpx;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.list-t{
						font-size: 30rpx;
						height: 42rpx;
						line-height: 42rpx;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
					}
					.list-type{
						height: 33rpx;
						line-height: 33rpx;
						font-size: 24rpx;
						color:#808080;
						margin-bottom: 22rpx;
					}
					.list-price{
						height: 48rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin-bottom: 21rpx;
						.allprice{
							color:#F83C0A;
							font-size: 24rpx;
							text{
								font-size: 34rpx;
							}
						}
						.price{
							color: #808080;
							font-size: 24rpx;
						}
					}
				}
				
			}
			.deal{
				margin-bottom: 80rpx;
			}
			.answerbox{
				box-sizing: border-box;
				padding: 46rpx 24rpx 0;
			}
			.beltseebox{
				
			}
		}
		.middleman{
			height: 100rpx;
			color: #FFFFFF;
			font-size:26rpx ;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #47CD97;
				.middlemanimage{
					width:60rpx ;
					height: 60rpx;
					z-index: 1;
					image{
						width: 100%;
						height: 100%;
					}
				}
		}
	}
</style>
