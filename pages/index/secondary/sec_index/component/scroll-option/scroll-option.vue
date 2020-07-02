<template>
	<view class="scroll-box">
		<scroll-view scroll-y="true" class="first-list-box list-box">
			<block v-for="(item,idx) in firstList" :key="idx">
				<view :class="{'active':item.checked && firstList.length != 1}" class="u-line-1" @click="firstClick(idx)">{{item.val}}</view>
			</block>
		</scroll-view>
		<scroll-view scroll-y="true" class="second-list-box list-box">
			<block v-for="(item,idx) in secondList" :key="idx">
				<view :class="{'active':item.checked && secondList.length != 1}"  class="u-line-1" @click="secondClick(idx)">{{item.val}}</view>
			</block>
		</scroll-view>
		<scroll-view scroll-y="true" class="thirdly-list-box list-box">
			<block v-for="(item,idx) in thirdlyList" :key="idx">
				<view class="checkbox-group" :class="{'checked':item.checked && isCheck} " @click="check(idx)">
					<view :class="{'active':item.checked && thirdlyList.length != 1 && !isCheck}" class="checkbox-text  u-line-1">{{item.name}}</view>
					<view class="checkbox" :class="{'ischeckbox':item.disabled}" v-if="isCheck"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			check(idx){
				this.$emit('check',idx)
			},
			firstClick(idx){
				this.$emit('firstClick',idx)
				this.firstIsActive = idx
			},
			secondClick(idx){
				this.$emit('secondClick',idx)
				this.secondIsActive = idx
			},
			check(idx){
				this.$emit('check',idx)
				this.thirdlyIsActive = idx
			},
		},
		props:{
			firstList:{
				type:Array,
				required:true
			},
			secondList:{
				type:Array,
				required:true
			},
			thirdlyList:{
				type:Array,
				required:true
			},
			isCheck:{
				type:Boolean,
				default:false
			}
		}
	}
</script>

<style lang="scss">
	.scroll-box {
		height: 654rpx;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;

		.list-box {
			display: flex;
			flex-direction: column;
			padding: 20rpx 0rpx;
			text-align: center;
			line-height: 92rpx;
		}

		.first-list-box {
			background-color: #F0F0F0;
			width: 20%;
		}

		.second-list-box {
			background-color: #F8F8F8;
			width: 32%;
		}

		.thirdly-list-box {
			width: 50%;

			.checkbox-group {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				
				.checkbox-text{
					width:60%;
					overflow: hidden;
				}
				
				.checkbox {
					width: 24rpx;
					height: 24rpx;
					border: 2rpx solid $u-border-color;
					border-radius: 50%;
				}
				.ischeckbox{
					border:none;
				}
			}
			.checked{
				color:$u-type-primary;
				.checkbox {
					width: 24rpx;
					height: 24rpx;
					border: 2rpx solid $u-type-primary;
					background-color: $u-type-primary;
					border-radius: 50%;
				}
			}
		}

		.active {
			background-color: rgba(255, 255, 255, 0.6);
			color:$u-type-primary
		}
	}
</style>
