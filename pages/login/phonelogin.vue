<template>
	<view class="phonelogin">
		<!-- 返回 -->
		<view class="black" @click="back()">
			<image src="../../static/images/login/daohang_black_icon@2x.png" mode=""></image>
		</view>
		<!-- 标题 -->
		<view class="headline">
			手机快捷登录
		</view>
		<!-- 内容 -->
		<view class="loginbox">
			<!-- 手机号验证码 -->
			<view class="phoneverify">
				<!-- 获取验证码 -->
				<view class="phone">
					<input type="number" @blur="isPoneAvailable(phone)" value="" v-model="phone" placeholder="请输入手机号" maxlength="11" />
					<view v-if="time==5" class="verifynumber" @click="getprivacy">
						获取验证码
					</view>
					<view v-else class="verifynumber" d>
						{{time}}后从新获取
					</view>
					<view v-if="phoneverify==false" class="">
						手机号错误
					</view>
				</view>
				<!-- 手机验证码 -->
				<view class="verify">
					<input type="number" value="" v-model="verify" placeholder="请输入短信验证码" />
				</view>
			</view>
			<!-- 协议提示和登录-->
			<view class="hintlogin">
				<view class="hint">
					<view class="hintt">
						为保障您的个人隐私权益，请在点击同意按钮前认真阅读下方协议：
					</view>
					<view class="hintcon">
						《<text @click="privacy()">优品隐私政策</text>》及《<text @click="deal()">优品用户服务协议</text>》
					</view>
				</view>
				<view class="consent">
					<view class="" @click="login">
						同意协议并登录
					</view>

				</view>

			</view>


		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				verify: '',
				time: 5,
				phoneverify:true,
				
			}
		},
		onLoad() {
		},
		methods: {
			// 定时器
			out() {
				clearInterval(timing);
				var timing = setInterval(function() {
					if (this.time > 1) {
						this.time = this.time - 1;
					} else {
						clearInterval(timing);
						this.time = 5
					}
				}.bind(this), 1000);
			},
			// 隐私
			privacy() {
				console.log(1111)
			},
			// 协议
			deal() {
				console.log(2222)
			},
			// 登陆
			login() {
				console.log(this.verify)
				if(this.phone==""){
					uni.showToast({
					    title: '请输入手机号',
					    duration: 2000
					});
				}else{
					console.log(this.phone)
					uni.setStorageSync('phone', this.phone);
					uni.switchTab({
						url:"/pages/mpage/index"
					})
				}
				
				
			},
			// 验证手机号
			isPoneAvailable(val) {
				var myreg = /^1[34578]\d{9}$/;
				if (!myreg.test(val)) {
					this.phoneverify=false;
				} else {
					this.phoneverify=true;
				}
			},
			// 获取验证码
			getprivacy(){
				
				setTimeout(function(){
					console.log(1111)
				},1000)
				// var  timer=null;
				// if(timer != null){
				// 	clearTimeout(timer);
				// }
				//  timer=setTimeout(function(){
				// 	this.out()	
				// }.bind(this),3000)
			},
			back:function(){
				uni.navigateBack({
					 delta: 1
				})
			}
		},
		components: {}
	}
</script>
<style lang="less" scoped>
	.phonelogin {

		// 返回
		.black {
			height: 88rpx;
			box-sizing: border-box;
			padding: 0 24rpx 0;
			border-bottom: 1rpx solid #E5E5E5;
			position: relative;

			image {
				width: 30rpx;
				height: 34rpx;
				position: absolute;
				bottom: 11rpx;
			}
		}

		.headline {
			box-sizing: border-box;
			height: 170rpx;
			line-height: 170rpx;
			padding: 0 18rpx 0;
			font-size: 50rpx;
		}

		.loginbox {
			.phoneverify {
				box-sizing: border-box;
				padding: 0 9rpx 0;

				view {
					height: 116rpx;
					box-sizing: border-box;
					padding: 0 9rpx 0;
					font-size: 32rpx;
					color: #888888;

					input {
						height: 100%;
						border: none;
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

					/* IE浏览器 */
				}

				.phone {
					position: relative;
					border-bottom: 1rpx solid #E5E5E5;

					.verifynumber {
						display: inline-block;
						height: 45rpx;
						line-height: 45rpx;
						position: absolute;
						bottom: 32rpx;
						right: 9rpx;
					}

				}

				.verify {
					border-bottom: 1rpx solid #E5E5E5;
				}

			}

			.hintlogin {
				.hint {
					box-sizing: border-box;
					padding: 47rpx 50rpx 0;
					font-size: 26rpx;
					color: #888888;

					.hintt {
						height: 68rpx;
						margin-bottom: 20rpx;
					}

					.hintcon {
						height: 74rpx;

						text {
							color: #47CD97;
						}
					}
				}

				.consent {
					box-sizing: border-box;
					padding: 0 64rpx;

					view {
						height: 100rpx;
						font-size: 40rpx;
						line-height: 100rpx;
						text-align: center;
						border-radius: 60rpx;
						margin-bottom: 40rpx;
						background: #47CD97;
						color: #FFFFFF;
					}

				}
			}
		}
	}
</style>
