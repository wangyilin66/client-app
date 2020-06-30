<template>
	<view class="set">
		<navber :txtdata="title"></navber>
		<view class="setbox">
			<view class="box1">
				<!-- 推送 -->
				<view class="list"  @click="gopush">
					<view class="left">
						<view class="font">
							推送设置
						</view>
						<view class="img">
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>
				</view>
				<!-- 清理关村 -->
				<view class="list"  @click="clear">
					<view class="left">
						<view class="font">
							清理缓存
						</view>
						<view class="img">
							{{cache}}M
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>
				</view>
				<!-- 推荐设置 -->
				<view class="list"  @click="recommend">
					<view class="left">
						<view class="font">
							推荐设置
						</view>
						<view class="img">
							{{reco?"已开启":"已关闭"}}
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>	
				</view>
			
			
			
			</view>
			<view class="box2">
				<!-- 联系客服 -->
				<view class="list"  @click="contact">
					<view class="left">
						<view class="font">
							联系客服
						</view>
						<view class="img">
							{{kefu}}
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>	
				</view>
				<!-- 在线客服 -->
				<view class="list"  @click="">
					<view class="left">
						<view class="font">
							在线客服
						</view>
						<view class="img">
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>	
				</view>
			</view>
			<view class="box3">
				<!-- 举报违法不良信息 -->
				<view class="list"  @click="inform">
					<view class="left">
						<view class="font">
							举报违法不良信息
						</view>
						<view class="img">
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>	
				</view>
			</view>
			<view class="box4">
				<!-- 关于我门 -->
					<view class="list"  @click="gowe">
						<view class="left">
							<view class="font">
								关于我门
							</view>
							<view class="img">
							</view>
						</view>
					
						<view class="right">
							<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
						</view>	
					</view>
				<!-- 版权信息 -->
				<view class="list"  @click="goversions">
					<view class="left">
						<view class="font">
							版权信息
						</view>
						<view class="img">
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>	
				</view>
				<!-- 去评分 -->
				<view class="list"  @click="">
					<view class="left">
						<view class="font">
							去评分
						</view>
						<view class="img">
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>	
				</view>
				<!-- 用户隐私和规则中心 -->
				<view class="list"  @click="gorule">
					<view class="left">
						<view class="font">
							用户隐私和规则中心
						</view>
						<view class="img">
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>	
				</view>
				<!-- 证照资质中心 -->
				<view class="list"  @click="">
					<view class="left">
						<view class="font">
							证照资质中心
						</view>
						<view class="img">
						</view>
					</view>
				
					<view class="right">
						<image src="../../../static/images/mpage/gengduo.svg" mode=""></image>
					</view>	
				</view>
			</view>
		</view>
		<!-- 推荐弹框 -->
		<emodal :visible.sync="visi" @cancel="handleCancel" >
			<view class="recbox">
				<view class="rectitle">
					是否确认关闭推荐
				</view>
				<view class="reccon">
					<view class="">
						关闭后您将无法接收优品为您专属推荐的禁锢性能房源，
					</view>
					<view class="">
						我们强烈建议您不要关闭
					</view>
				</view>
				<view class="recbtn">
					<view class="left" @click="shut">
						仍要关闭
					</view>
					<view class="right" @click="think">
						我再想想
					</view>
				</view>
			</view>
		</emodal>
		<!-- 举报 -->
		<emodal :visible.sync="form" @cancel="handleCancel" >
			<view class="recbox">
				<view class="reccons">
					<view class="title">
						违法和不良信息举报电话
					</view>
					<view class="cont">
						{{infophone}}  7*24小时
					</view>
				</view>
				<view class="reccons">
					<view class="title">
						违法和不良信息举报邮箱
					</view>
					<view class="cont">
						feohiohihioh@ke.com
					</view>
				</view>
				<view class="recbtn">
					<view class="left" @click="cancel">
						取消
					</view>
					<view class="right" @click="dial">
						拨打举报电话
					</view>
				</view>
			</view>
		</emodal>
		<!-- 联系客服 -->
		<emodal :visible.sync="service" @cancel="handleCancel" >
			<view class="service">
				<view class="" @click="callphone">
					呼叫 {{kefu}}
				</view>
				<view class="" @click="off">
					取消
				</view>
			</view>
		</emodal>
	</view>
</template>

<script>
	import emodal from "@/components/component/e-modal/e-modal.vue"
	import navber from "../mymavber/bernav.vue"
	export default{
		components:{
			emodal,
			navber
		},
		data(){
			return{
				title:"设置",
				cache:50,
				visi:false,
				reco:true,
				form:false,
				service:false,
				kefu:"11093000",
				infophone:"010-8888888"
			}
		},
		methods:{
			handleCancel:function(){
				console.log('modal关闭')
			},
			gopush:function(){
				uni.navigateTo({
					url:"./pushset"
				})
			},
			clear:function(){
				let that=this;
				uni.showToast({
					icon:"none",
				    title: '已清除'+this.cache+"M",
					success() {
						setTimeout(()=>{
							that.cache=0;
						},1000)
					}
				});
				
			},
			recommend:function(){
				if(this.reco==true){
					this.visi=true
				}else{
					this.reco=true;
					uni.showToast({
						icon:"none",
					    title: '已开启',
					});
				}
				
			},
			shut:function(){
				this.visi=false;
				this.reco=false
			},
			think:function(){
				this.visi=false
			},
			inform:function(){
				this.form=true;
			},
			cancel:function(){
				this.form=false;
			},
			dial:function(){
				uni.makePhoneCall({
				    phoneNumber: this.infophone //仅为示例
				});
			},
			contact:function(){
				this.service=true;
			},
			callphone:function(){
				console.log(1111)
				uni.makePhoneCall({
				    phoneNumber: this.kefu //仅为示例
				});
			},
			off:function(){
				console.log(111)
				this.service=false;
			},
			gowe:function(){
				uni.navigateTo({
					url:"./we"
				})
			},
			goversions:function(){
				uni.navigateTo({
					url:"./versions"
				})
			},
			gorule:function(){
				uni.navigateTo({
					url:"./rule"
				})
			},
		}
		
	}
</script>

<style scoped lang="less">
	.setbox{
		box-sizing: border-box;
		padding: 26rpx 0;
	}
	.box1,.box2,.box3,.box4{
		box-sizing: border-box;		padding: 0 18rpx;
		border-top:  1rpx solid #E5E5E5;
		margin-bottom: 26rpx;
	}
	.box4{
		.list:nth-child(n+2){
			border-bottom: 1rpx solid #E5E5E5 ;
		}
	}
	.list {
		display: flex;
		height: 97rpx;
		justify-content: space-between;
		align-items: center;
		// border-bottom: 1rpx solid #E5E5E5;
	
		.left {
			width: 90%;
			display: flex;
			justify-content: space-between;
	
			.font {
				font-size: 32rpx;
			}
	
			.img {
				font-size: 32rpx;
				color: #888888;
	
				.imgs {
					width: 66rpx;
					height: 66rpx;
				}
			}
		}
	
		.right {
			width: 46rpx;
			height: 54rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	// 推荐弹框
	.recbox{
		box-sizing: border-box;
		padding: 50rpx 0  0;
		text-align: center;
		.rectitle{
			font-size: 34rpx;
			font-weight: 600;
			height: 50rpx;
			line-height: 50rpx;
			margin-bottom: 18rpx;
		}
		.reccon{
			box-sizing: border-box;
			padding: 0 30rpx;
			color: #888888;
			font-size: 30rpx;
			margin-bottom: 52rpx;
		}
		.reccons{
			box-sizing: border-box;
			padding: 0 30rpx;
			font-size: 30rpx;
			.title{
				font-size: 34rpx;
				font-weight: 600;
				height: 50rpx;
				line-height: 50rpx;
			}
			.cont{
				font-size: 30rpx;
				color: #888888;
				margin-bottom: 30rpx;
			}
		}
		.recbtn{
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 35rpx;
			font-weight: 600;
			border-top: 1rpx solid #E5E5E5;
			.left,.right{
				width: 50%;
				height: 100%;
				line-height: 100rpx;
				
			}
			.right{
				color: #47CD97;
				border-left: 1rpx solid #E5E5E5;
			}
		}
	}
	// 客服弹框
	.service{
		width: 100%;
		box-sizing: border-box;
		padding: 0 17rpx;
		position: fixed;
		bottom: 20rpx;
		left: 0;
		view{
			width: 100%;
			height:84rpx;
			background: #FFFFFF;
			border-radius: 50rpx;
			color:#47CD97;
			font-size: 36rpx;
			line-height: 84rpx;
			text-align: center;
			margin-bottom: 20rpx;
		}
	}
</style>
