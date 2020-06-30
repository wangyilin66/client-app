<template>
	<view class="particulars" >
		<navbertherr @visib="visib"></navbertherr>
		<view class="particbox">
			<view class="">
				<!-- 详情内容 -->
				<view class="boxtitle">
					<view class="title">
						{{title.title}}
					</view>
					<view class="titleb">
						<view class="titleuser">
							<text>优品找房原创：</text>{{title.user}}
						</view>
						<view class="titletime">
							{{title.time}}
						</view>
					</view>
					
				</view>
				<view class="boxcon" v-for="(item,index) in  date" :key="index">
					<view class="contitle">
						{{item.title}}
					</view>
					<view class="context">
						{{item.text}}
					</view>
				</view>
				
			</view>
		</view>
		<view class="praise" @click="praic">
			<view class="praiseimg">
				<image src="../../static/images/ykan/yk_dianzan@2x.png" mode=""></image>
				<view class="praisenumber">
					{{praise.unmber}}
				</view>
			</view>
			
		</view>
		<!-- <emodal v-if="visi"></emodal> -->
		<emodal :visible.sync="visi" @cancel="handleCancel">
			<view class="share">
				<view class="sharetitle">
					分享到
				</view>
				<view class="shareimage">
					<view class="image">
						<image src="../../static/images/ykan/yk_weixng@2x.png" mode=""></image>
					</view>
					<view class="image">
						<image src="../../static/images/ykan/yk_pyq@2x.png" mode=""></image>
					</view>
					<view class="image">
						<image src="../../static/images/ykan/yk_qq@2x.png" mode=""></image>
					</view>
				</view>
			</view>
		</emodal>
	</view>
</template>

<script>
		import navbertherr from "@/components/component/nav/navbertherr.vue"
		import emodal from "../../components/component/e-modal/e-modal.vue"
		export default{
			components:{
				navbertherr,
				emodal
			},
			data(){
				return{
					title:{
						"title":"女性租房应该注意哪些问题？女性租房应该注意哪些问题？",
						"user":"古天乐",
						"time":"2020-03-29 18:00"
					},
					date:[
						{"title":"我从三冬来，世界一片雪白，有些问题已不再","text":"女性租房应该注意：在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，"},
						{"title":"我从三冬来，世界一片雪白，有些问题已不再","text":"女性租房应该注意：在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，"},
						{"title":"我从三冬来，世界一片雪白，有些问题已不再","text":"女性租房应该注意：在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，"},
						{"title":"我从三冬来，世界一片雪白，有些问题已不再","text":"女性租房应该注意：在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，在签合同时业主在场签，"}
						
						],
					praise:{
						"unmber":0,
						"type":false
					},
					visi:null,
					
				}
			},
			methods:{
				praic:function(){
					if(this.praise.type===false){
						this.praise.unmber++;
						this.praise.type=true
					}else{
						this.praise.unmber--;
						this.praise.type=false
					}
				},
				visib:function(item){
					item=true;
					this.visi=item;
				},
				handleCancel:function(){
					console.log('modal关闭')
				}
			}
		}
</script>

<style scoped lang="less">
	.particbox{
		box-sizing: border-box;
		padding: 34rpx 40rpx 0 30rpx;
		.boxtitle{
			.title{
				font-size: 38rpx;
				font-weight: 600;
				color: #000000;
			}
			.titleb{
				color: #BBBBBB;
				font-size: 24rpx;
				margin-top: 28rpx;
				margin-bottom: 60rpx;
				display: flex;
				justify-content: space-between;
			}
		}
		.boxcon{
			.contitle{
				color: #1D1D1D;
				font-size: 30rpx;
				
			}
			.context{
				font-size: 30rpx;
				margin-top: 25rpx;
				margin-bottom: 53rpx;
			}
			
		}

	}
	.share{
		width: 100%;
		background: #FFFFFF;
		height:292rpx;
		box-sizing: border-box;
		padding: 32rpx 84rpx 0;
		position: fixed;
		bottom: 0;
		left:0;
		.sharetitle{
			height: 42rpx;
			font-size: 30rpx;
			color: #1D1D1D;
			text-align: center;
		}
		.shareimage{
			margin-top: 40rpx;
			display: flex;
			justify-content: space-between;
			.image{
				width: 90rpx;
				height: 129rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.praise{
		height: 120rpx;
		margin: 0 auto;
		color: #47CD97;
		box-sizing: border-box;
		padding-top: 20rpx;
		display: flex;
		justify-content: space-around;
		
		.praiseimg{
			width:120rpx;
			height: 120rpx;
			position: relative;
			
			image{
				width: 100%;
				height:100%,
			}
			
			.praisenumber{
				width: 120rpx;
				position: absolute;
				bottom: 0;
				text-align: center;
			}
		}
		
		
		
	}
</style>
