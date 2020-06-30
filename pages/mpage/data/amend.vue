<template>
	<view class="amend">
		<navber :txtdata="title"></navber>
		<view class="amendbox">
			<view class="amendcon">
				<view class="ipbox">
					<input type="text" v-model="ymms"  value="" placeholder="请输入原密码"/>
				</view>
				<view class="hint" v-if="ym==false">
					原密码输入错误
				</view>
				
				<view class="ipbox">
					<input type="text" v-model="newpaswold" value="" placeholder="请输入新密码(最少8位,数字+字母)"/>
				</view>
				<view class="ipbox">
					<input type=""	v-model="newpaswolds"  value="" placeholder="重复新密码"/>
				</view>
				<view class="hint" v-if="xm==false">
					两次的密码不一样
				</view>
			</view>
			<view class="amendbtn" @click="amendbtn">
				提交
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
				title:"修改密码",
				ymm:"123456789+...",
				ymms:"",
				newpaswold:"",
				newpaswolds:"",
				ym:true,
				xm:true,
			}
		},
		methods:{
			amendbtn(){
				if(this.ymms==this.ymm){
					this.ym=true
					if(this.newpaswold.length<8){
						uni.showToast({
						    title: '请输入8位及以上的新密码',
							icon:"none",
							position :"top"
						});
					}else{
						if(this.newpaswolds==""){
							uni.showToast({
							    title: '请输入重复密码',
								icon:"none",
							});
						}else{
							if(this.newpaswold==this.newpaswolds){
								this.xm=true
								uni.showToast({
								    title: '修改成功',
									icon:"none",
									success() {
										setTimeout(()=>{
											uni.redirectTo({
												url:"./personage"
											})
										},1500)
									}
								});
							}else{
								this.xm=false
							}
						}
						
					}
		
		
		
		
				}else if(this.ymms==""){
					uni.showToast({
					    title: '请输入原密码',
						icon:"none"
					});
				}else{
					this.ym=false
				}
				
				
			}
		}
	}
</script>

<style scoped lang="less">
	.hint{
		font-size: 32rpx;
		color: red;
	}
	.amendbox{
		box-sizing: border-box;
		padding: 0 24rpx;
		.amendcon{
			margin-top: 26rpx;
			margin-bottom:146rpx;
			.ipbox{
				border-bottom: 1rpx solid #E5E5E5;
				height: 88rpx;
				line-height: 88rpx;
			}
			input{
				height: 100%;
				font-size: 32rpx;
				color: #000000;
			}
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
			
		}
		.amendbtn{
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
	}
</style>
