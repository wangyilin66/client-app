<template>
	<view class="searchbox">
		<!-- 组件一 -->
		<view class="seach">
			<view class="cancelinput">
				<view class="drop-down" @click="dropdown">
					<view class="font">
						{{data[typeindex]}}
					</view>
					<view class="three">
						
					</view>
					<div class="box" v-show="types" :class="types=false?'hide':''">
						<div class="con-ret"></div>
						<div class="con">
							<view class="conlist" :class="typeindex==index?'ac':''" v-for="(item,index) in data" :key="index" @click="hide(item,index)">
								{{item}}
							</view>
						</div>
					</div>
					
				</view>
				<view class="border">
					
				</view>
				<input type="text" value="" v-model="text" placeholder="请输入楼盘/房源编号" @input="vague"/>
				
			</view>
			<view class="cancel" @click="cancel">
				取消
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				text:"",
				data:[
					"二手房",
					"新房",
					"租房"
				],
				typeindex:0,
				types:false,
			}
		},
		watch:{
			
		},
		methods:{
			cancel(){
				uni.navigateBack({
					delta:1,
				})
			},
			vague(){
				this.$emit("vague",this.text)
			},
			dropdown(){
				this.types=true;
			},
			hide(item,index){
				this.typeindex=index;
				this.types=false;
				// this.$set(this.$data,'types',false)
				// this.$forceUpdate()
				
			},
		
		
		}
	}
</script>

<style scoped lang="less">
	.ac{
		color: #47CD97;
	}
	.hide{
		display: none;
	}
	.seach,.cancelinput{
		display: flex;
		justify-content: space-between;
		align-items: center;
		
	}
	.searchbox{
		height: 120rpx;
		box-sizing: border-box;
		padding: 15rpx 40rpx;
		font-size: 30rpx;
		border-bottom: 1rpx solid #000000;
		.seach{
			
			.cancelinput{
				height: 88rpx;
				border-radius:20rpx ;
				box-shadow: 0px 0px 6rpx 10rpx #E5E5E5;
				.border{
					width: 2rpx;
					height: 35rpx;
					background: gray;
					margin-right: 15rpx;
				}
				.drop-down{
					width:167rpx;
					height: 100%;
					line-height: 88rpx;
					text-align: center;
					display: flex;
					justify-content: space-around;
					align-items: center;
					position: relative;
					.font{
						text-align: center;
						color: #888888;
					}
					.three{
					    width: 0;
					    height: 0;
					    border-left: 10rpx solid transparent;
					    border-right: 10rpx solid transparent;
					    border-top: 12rpx solid #888888;
						border:1px solid rgba(215,215,215,1);
						
					}
					.box{
						height: 220rpx;
						position: absolute;
						bottom: -236rpx;
						left: 0;
						padding-top: 8px;
						
						.con{
							width: 200rpx;
							border-radius: 3px;
							background-color: #FFFFFF;
							box-shadow:0px 0px 20rpx 0px rgba(0, 0, 0, 0.2);
							box-sizing: border-box;
							padding: 0 51rpx;
							.conlist{
								border-bottom: 1rpx solid rgba(215,215,215,1);
								font-size: 30rpx;
								text-align: center;
								font-weight: 600;
								line-height: 90rpx;
							}
							.conlist:nth-child(n+3){
								border: none;
							}
						}
						.con-ret{
							width: 0;
							height: 0;
							border-left: 10rpx solid transparent;
							border-right: 10rpx solid transparent;
							border-bottom: 12rpx solid #FFFFFF;
							position: relative;
							left: 20rpx;
							top:0;
						}
					}
					
				}
				.cancelinput{
					
					input{
						text-indent: 15rpx;
						height: 41rpx;
						font-size: 30rpx;
					}
					input::-webkit-input-placeholder {
						color: #888888;
					}
					
					/* 使用webkit内核的浏览器 */
					input:-moz-placeholder {
						color: #888888;
					}
					
					/* Firefox版本4-18 */
					input::-moz-placeholder {
						color: #888888;
					}
					
					/* Firefox版本19+ */
					input:-ms-input-placeholder {
						color: #888888;
					}
				}
			}
			
		}
		
	}
</style>
