<template>
	<view class="index">
		<view>
		      <view class="status_bar">
		          <!-- 这里是状态栏 -->
		      </view>
		  </view>
		<view class="container">
			<view class="header">
				<view class="userimg">
					<!-- <image src="../../static/images/ykan/20160831002034_FVid3.jpeg" mode=""></image> -->
					<u-avatar :src="src"></u-avatar>
				</view>
				<view class="usernumber" v-show="log==true" >
					<view class="phone">
						{{phone}}
					</view>
					<view class="compile" @click="gopersonage">
						编辑个人自资料
					</view>
				</view>
				<view class="usernumber" @click="login()"  v-show="log==false">
					<view class="phone">
						请登录
					</view>
					<view class="compile">
						您现在未登录
					</view>
				</view>
		
		
				<view class="set" @click="goset">
					<image src="../../static/images/mpage/mine_shezhi_icon.png" mode=""></image>
				</view>
		
			</view>
			<view class="background">
			</view>
			<!-- 背景色 -->
			<!-- <view class="" @click="login()">
					手机号登陆
			</view> -->
			<view class="navbox">
				<view class="navlist" v-for="(item,index) in data" :key="index" @click="goitem(item)">
					<view class="navimg">
						<image :src="item.img" mode=""></image>
					</view>
					<view class="navtext">
						{{item.text}}({{item.unmber}})
					</view>
				</view>
			</view>
			<!-- 我的服务 -->
			<view class="containerbox">
				<view class="mytitle">
					<view class="titlefont">
						我的服务
					</view>
					<view class="text">
					</view>
				</view>
				<view class="serve">
					<view class="mynav">
						<view class="navlist" v-for="(item,index) in datas" :key="index">
							<view class="listimg">
								<image :src="item.img" mode=""></image>
		
							</view>
							<view class="listtext">
								{{item.text}}
							</view>
						</view>
					</view>
				</view>
				<!-- 我的房子 -->
				<view class="mytitle">
					<view class="titlefont">
						我的房子
					</view>
					<view class="text">
						<text>添加房产</text><text class="text">></text>
					</view>
				</view>
				<view class="myhouse">
					<view class="houseleft">
						<view class="leftimg">
							<image src="../../static/images/ykan/20160831002034_FVid3.jpeg" mode=""></image>
						</view>
					</view>
					<view class="houseright">
						<view class="right">
							查看房屋估值走势
						</view>
						<view class="rightcon">
							随时掌握小区均价
						</view>
						<view class="rightbtn">
							立即查看
						</view>
					</view>
				</view>
				<!-- 我是业主 -->
				<view class="mytitle">
					<view class="titlefont">
						我的业主
					</view>
					<view class="text">
						<text>更多服务</text><text class="text">></text>
					</view>
				</view>
				<view class="owner">
					<view class="ownerbox" v-for="(item,index) in url" :key="index">
						<image :src="item.img" mode=""></image>
					</view>
				</view>
				<!-- 钱包 -->
				<view class="mytitle">
					<view class="titlefont">
						我的钱包
					</view>
					<view class="text">
						<text>进入钱包</text><text class="texts">></text>
					</view>
				</view>
				<view class="wallet">
					<view class="walletbox" :style="{backgroundImage:'url(' + item.img + ')', backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}"
					 v-for="(item,index) in font" :key="index">
						<view class="wallet-t">
							{{item.text}}
						</view>
						<view class="wallet-con">
							{{item.text2}}
						</view>
		
					</view>
		
				</view>
				<view class="invite">
					加入优品 轻松招租 优品邀您 <text>入住平台</text>
				</view>
			</view>
		</view>
		<status-bar></status-bar>
		
	</view>

</template>

<script>
	import statusBar from '@/components/component/status-bar/status-bar.vue'
	export default {
		data() {
			return {
				src: '',
				data: [{
						"img": "../../static/images/mpage/mine_ershoufang.png",
						"text": "二手房",
						"unmber": 12
					},
					{
						"img": "../../static/images/mpage/mine_xinfang.png",
						"text": "新房",
						"unmber": 8
					},
					{
						"img": "../../static/images/mpage/mine_zufang.png",
						"text": "租房",
						"unmber": 1
					},
					{
						"img": "../../static/images/mpage/mine_shangpu.png",
						"text": "商业",
						"unmber": 3
					},
					{
						"img": "../../static/images/mpage/mine_xiaoqu.png",
						"text": "小区",
						"unmber": 6
					},
					{
						"img": "../../static/images/mpage/mine_liulan.png",
						"text": "浏览",
						"unmber": 9
					},
					{
						"img": "../../static/images/mpage/mine_sousuo.png",
						"text": "搜索",
						"unmber": 10
					}
				],
				datas: [{
						"img": "../../static/images/mpage/mine_jingjiren_icon@2x.png",
						"text": "专属经济人"
					},
					{
						"img": "../../static/images/mpage/mine_jiaoyi-icon@2x.png",
						"text": "交易"
					},
					{
						"img": "../../static/images/mpage/mine_dianping_icon@2x.png",
						"text": "我的点评"
					},
					{
						"img": "../../static/images/mpage/mine_wenda_icon@2x.png",
						"text": "我的额问答"
					},
					{
						"img": "../../static/images/mpage/mine_fangkanguanli_icon@2x.png",
						"text": "看房管理"
					}
				],
				url: [{
						"img": "../../static/images/mpage/mine_yz_wdwt@2x.png"
					},
					{
						"img": "../../static/images/mpage/mine_yz_wycz@2x.png"
					},
					{
						"img": "../../static/images/mpage/mine_yz_wymf@2x.png"
					}
				],
				font: [{
						"text": '优惠券',
						"text2": "立即使用",
						"img": "../../static/images/mpage/mine_qianbao_yhq.png"
					},
					{
						"text": '现金奖励',
						"text2": "立即领取",
						"img": "../../static/images/mpage/mine_qianbao_xjjl.png"
					}
				],
				log:false,
				phone:""
				
			}
		},
		onLoad() {
						console.log(this.$u.get())
						// 带上header(对象形式)，由于header为第三个参数，如果不需要请求参数，第二个参数传一个空对象"{ }"即可
						this.$u.get('http://192.168.1.101/app/system/getMsgCode?phone=17695921500', {}, {
						}).then(res => {
							console.log(res);
						}).catch(err=>{
							console.log(err)
						});
			if(!uni.getStorageSync("phone")){
				this.log=false
			}else{
				this.log=true;
				this.phone=uni.getStorageSync("phone")
			}
			
		},
		
		methods: {
			login() {
				uni.navigateTo({
					url: "../login/logindex"
				})
			},
			gopersonage(){
				uni.navigateTo({
					url: "./data/personage"
				})
			},
			goset(){
				uni.navigateTo({
					url:"./set/index"
				})
			},
			goitem(item){
				switch (item.text){
					case "二手房":
					uni.navigateTo({
						url:"./usedhouse/index"
					});
					break;
				}
			}
			
		},
		components:{
			statusBar
		}
	}
</script>

<style scoped lang="less">
	 .status_bar {
	      height: var(--status-bar-height);
	      width: 100%;
		  background: #000000;
	  }
	.container {
		box-sizing: border-box;
		padding: 0 24rpx;
		position: relative;
		background: none;

		.background::after {
			content: '';
			position: absolute;
			left: -10%; //椭圆左边隐藏10%，右边隐藏10%
			top: 0;
			width: 110%;
			z-index: -1;
			height: 400rpx;
			background: #47CD97;
		}

		.header {
			box-sizing: border-box;
			padding: 30rpx 0 84rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
			z-index: 1 !important;

			.userimg {
				width: 90rpx;
				height: 90rpx;
				border-radius: 50%;
				overflow: hidden;

				image {
					width: 100%;
					height: 100%;
				}

			}

			.usernumber {
				color: #FFFFFF;
				flex: 1;
				margin-left: 45rpx;

				.phone {
					height: 56rpx;
					line-height: 56rpx;
					font-size: 40rpx;
				}

				.compile {
					font-size: 26rpx;
					height: 37rpx;
					line-height: 37rpx;
				}

			}

			.set {
				width: 38rpx;
				height: 40rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.navbox {
			display: flex;
			flex-wrap: wrap;
			border-radius: 18rpx;
			overflow: hidden;
			z-index: 1 !;
			background: #FFFFFF;
			margin-bottom: 56rpx;

			.navlist {
				width: 25%;
				height: 162rpx;
				z-index: 1;
				box-sizing: border-box;
				padding-top: 17rpx;

				.navimg {
					width: 68rpx;
					height: 68rpx;
					border-radius: 50%;
					overflow: hidden;
					margin: auto;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.navtext {
					font-size: 26rpx;
					height: 37rpx;
					line-height: 37rpx;
					text-align: center;
					margin-top: 16rpx;
				}
			}
		}

		.mytitle {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.titlefont {
				font-size: 38rpx;
				font-weight: 600;
			}

			.text {
				font-size: 26rpx;
				color: #808080;

			}
		}

		.serve {
			box-sizing: border-box;
			padding: 54rpx 0;

			.mynav {
				height: 104rpx;
				display: flex;
				justify-content: space-between;

				.navlist {
					width: 20%;

					.listimg {
						width: 44rpx;
						height: 44rpx;
						margin: 0 auto;

						image {
							width: 100%;
							height: 100%;
						}
					}

					.listtext {
						font-size: 26rpx;
						color: #1D1D1D;
						text-align: center;
						margin-top: 23rpx;
					}
				}
			}
		}

		.myhouse {
			height: 300rpx;
			box-sizing: border-box;
			padding: 56rpx 0;
			display: flex;
			text-align: center;

			.houseleft {
				width: 50%;
				height: 100%;

				.leftimg {
					width: 314rpx;
					height: 173rpx;

					image {
						width: 100%;
						height: 100%;

					}
				}

			}

			.houseright {
				width: 50%;
				margin-bottom: 80rpx;

				.right {
					font-size: 32rpx;
					font-weight: 600;
					margin-bottom: 6rpx;
				}

				.rightcon {
					font-size: 26rpx;
					margin-bottom: 29rpx;
				}

				.rightbtn {
					width: 194rpx;
					height: 60rpx;
					font-size: 26rpx;
					line-height: 60rpx;
					color: #47CD97;
					border: 1rpx solid #47CD97;
					border-radius: 30rpx;
					margin: auto;
				}
			}
		}

		.owner {
			display: flex;
			margin-top: 28rpx;
			margin-bottom: 51rpx;

			.ownerbox {
				width: 33%;
				height: 132rpx;
				border: 1rpx dashed #808080;

				image {
					width:100%;
					height:100%;
				}
			}
		}

		.wallet {
			display: flex;
			justify-content: space-between;
			margin-top: 28rpx;
			margin-bottom: 49rpx;

			.walletbox {
				width: 50%;
				height: 200rpx;
				box-sizing: border-box;
				padding: 50rpx 0 0 40rpx;

				.wallet-t {
					font-size: 34rpx;
					height: 48rpx;
					line-height: 48rpx;
					margin-bottom: 2rpx;
				}

				.wallet-con {
					height: 37rpx;
					font-size: 26rpx;
					line-height: 37rpx;
				}
			}
		}

		.invite {
			font-size: 26rpx;
			color: #808080;
			margin-bottom: 64rpx;

			text {
				color: #47CD97;
			}
		}
	}
</style>
