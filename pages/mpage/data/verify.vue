<template>
	<view class="verify">
		<navber></navber>
		<view class="verifybox" v-if="none==true">
			<view class="boxtitle">
				验证原手机号
			</view>
			<view class="phonebox">
				<view class="phone">
					<input type="number" v-model="phone" value="" maxlength="11" />
				</view>
				<view class="phonenumber">
					<input type="number" value="" v-model="yzm" maxlength="4" placeholder="请输入验证码"/>
				<!-- 	<button class="photext" size="20% " size="mini" @click="getverify" >
						获取验证码
					</button> -->
					  <button class="mini-btn photext" plain="true" type="default" size="mini"  :disabled="disabled"  @click="getverify">{{disabled==false?'获取验证码':'已发送('+n+'s)'}}</button>
				</view>
			</view>
			<view class="phonebtn" @click="verify">
				验证
			</view>
		</view>
		<view class="bindingbox" v-else>
			<view class="boxtitle">
				绑定新手机号
			</view>
			<view class="phonebox">
				<view class="phone">
					<input type="number" v-model="phone" value="" maxlength="11" placeholder="情输入手机号"/>
				</view>
				<view class="phonenumber">
					<input type="number" value="" v-model="yzm" maxlength="4" placeholder="请输入验证码"/>
				<!-- 	<button class="photext" size="20% " size="mini" @click="getverify" >
						获取验证码
					</button> -->
					  <button class="mini-btn photext" plain="true" type="default" size="mini"  :disabled="disabled"  @click="getverify">{{disabled==false?'获取验证码':'已发送('+n+'s)'}}</button>
				</view>
			</view>
			<view class="phonebtn" @click="verify">
				验证
			</view>
			<view class="danger">
				<view class="dangert">
					<view class="img">
						<image src="../../../static/images/mpage/my_geren_gantanhao@2x.png" mode=""></image>
					</view>
					<view class="hints">
						换号风险
					</view>
				</view>
				<view class="hint">
					换号后您的历史带看记录、交易记录、优惠券、委托记录将会消失、且无法找回
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import navber from "../mymavber/navber.vue"
	export default{
		components:{
			navber
		},
		data(){
			return{
				yz:5488,
				phone:"",
				yzm:"",
				disabled:false,
				n:30,
				none:true
				
				
			}
		},
		onLoad(option) {
			console.log(option.phone)
			if(option.phone!=""){
				this.phone=option.phone
				this.none=true
			}else{
				this.none=false
			}
			
		},
		methods:{
			verify(){
				if(this.yzm==this.yz){
					uni.showToast({
						title: '验证成功',
						icon:"none",
						success:function(){
							setTimeout(()=>{
								uni.navigateTo({
									url:"./personage"
								})
							},1000)
							
						}
					});
				}else{
					uni.showToast({
						title: '验证码错误',
						icon:"none",
					});
				}
				
			},
			getverify(){
				this.disabled=true;
				let that =this;
				if(this.n==30){
					var out=setInterval(function(){
						that.n--;
						if(that.n>30&&that.n>0){
						}else if(that.n==0){
							that.disabled=false;
							clearInterval(out);
							that.n=30;
						}
					},1000)
				}
			
				
				
			}
		}
	}
</script>

<style scoped lang="less">
	.verifybox,.bindingbox{
		box-sizing: border-box;
		padding: 0 24rpx;
	}
	.boxtitle{
		box-sizing: border-box;
		padding: 50rpx 0 20rpx;
		font-size: 45rpx;
		font-weight: 600;
	}
	.phonebox{
		border-bottom: 1rpx solid #E5E5E5;
		font-size: 32rpx;
		margin-bottom: 78rpx;
		input{
			border: none;
			outline: none;
		}
		.phone{
			height: 116rpx;
			
			input{
				height: 100%;
				line-height: 116rpx;
			}
		}
		.phonenumber{
			height: 116rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			input{
				height: 100%;
				width: 70%;
				color: #000000;
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
			.photext{
				color: #47CD97;
				border: none;
				outline: none;
			}
		}
	}
	.phonebtn{
		width: 621rpx;
		height: 100rpx;
		background: #47CD97;
		color: #FFFFFF;
		line-height: 100rpx;
		text-align: center;
		margin: 0 auto;
		border-radius: 50rpx;
		margin-bottom: 89rpx;
	}
	.danger{
		width:621rpx;
		margin: 0 auto;
		image{
			width: 100%;
			height: 100%;
		}
		.dangert{
			display: flex;
			margin-bottom: 16rpx;
			align-items: center;
			.img{
				width: 36rpx;
				height: 36rpx;
				border-radius: 50%;
				overflow: hidden;
			}
			.hints{
				font-size: 30rpx;
				font-weight: 600;
				margin-left: 13rpx;
			}
		}
		.hint{
			box-sizing: border-box;
			padding: 0 0 0 50rpx;
			color:#888888 ;
			font-size: 26rpx;
		}
		
	}	
</style>
