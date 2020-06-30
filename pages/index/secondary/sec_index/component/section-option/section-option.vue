<template>
	<view>
		<view class="section-box" v-for="(item,index) in sectionData" :key="index">
			<view class="section-til" v-if="item.til">{{item.til}}</view>
			<view class="section-input" v-if="item.hasIpt">
				<u-field type="number" :clearable="false" v-model="item.iptMin" input-align="center" :placeholder="item.iptMinPlacehoder" :label-width="0"></u-field>
				<view style="padding:0 20rpx">至</view>
				<u-field type="number" :clearable="false" v-model="item.valMax" input-align="center" :placeholder="item.iptMaxPlacehoder"  :label-width="0"></u-field>
			</view>
			<view class="section">
				<view class="section-item u-line-1" v-for="(optionItem,idx) in item.option" :key="idx" @click="sectionChange(idx)" :class="{'active':optionItem.checked}">{{optionItem.val}}</view>
				<view class="section-item-add" v-for="(add,idx) in itemadd[index]">{{add}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iptMin: '',
				valMax: '',
				itemadd:[],
				
			}
		},
		methods: {
			sectionChange(idx){
				this.$emit('sectionChange',idx);
			}
		},
		props: {
			sectionData: {
				type: Array,
				require: true
			}
		},
		created() {
			let that = this;
			that.sectionData.forEach((item,idx) => {
				let add = new Array;
				let itemlen = item.option.length % 4
					for(let a = 0;a < itemlen; a++){
						add.push('')
					}
				that.itemadd.push(add)
			})
		}
	}
</script>

<style lang="scss" scoped>
.section-box{
	padding:20rpx 024rpx;
	display: flex;
	flex-direction: column;
	
	.section-til{
		font-size:36rpx;
		font-weight: bold;
		padding-bottom:20rpx;
	}
	.section-input{
		display:flex;
		flex-direction: row;
		align-items: center;
		.uni-input-wrapper{
			border-bottom:2rpx solid $u-border-color;
		}
	}
	.section{
		padding:20rpx 0;
		display:flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		
		.section-item,.section-item-add{
			flex:0 0 24%;
			line-height:60rpx;
			font-size:28rpx;
			text-align: center;
			margin:16rpx 0;
		}
		.section-item{
			background-color:$u-bg-color;
		}
		.active{
			color:$u-type-primary-disabled;
			background-color:$u-type-primary-light;
		}
	}
}

</style>
