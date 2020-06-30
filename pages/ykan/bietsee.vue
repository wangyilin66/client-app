<template>
	<view class="beltsee">
		<navber></navber>
		<view class="beltseebox">
			<beltsee :beltdata="item" v-for="(item,index) in bele"></beltsee>
		</view>
	</view>
</template>
		
<script>
	import navber from "../../components/component/nav/navbar.vue"
	import beltsee from "../../components/component/ykan/beltsee.vue"
	export default{
		components:{
			beltsee,
			navber
		},
		data(){
			return{
				bele:[
					{"year":"2020","date":"03-29","quyu":"星河湾2号院","type":"租房"},
					{"year":"2020","date":"03-29","quyu":"星河湾2号院","type":"租房"},
					{"year":"2020","date":"03-29","quyu":"星河湾2号院","type":"租房"}
				
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="less">
	.beltseebox{
		box-sizing: border-box;
		padding: 42rpx 24rpx 0 ;
	}
</style>
