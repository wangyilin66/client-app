<template>
	<view class="record">
		<navber class="nav"></navber>
		<view class="recordbox">
			<renting :renting="item" @godel="godel" v-for="(item,index) in zuf" ></renting>
		</view>
	</view>
</template>

<script>
	import navber from "../../components/component/nav/navbar.vue"
	import renting from "../../components/component/ykan/renting.vue"
	export default {
		components:{
			navber,
			renting
		},
		data() {
			return {
				zuf:[
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"},
					{"type":"租房","dqu":"中关村 东南小区 2室1厅/140平","price":"8000元/月","time":"2020-03-29"}
				],
				}
		},
		methods:{
			godel:function(item){
				console.log(item)
				uni.navigateTo({
					url:"./detaisl"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.recordbox{
		box-sizing: border-box;
		padding: 0 24rpx;
	}

</style>
