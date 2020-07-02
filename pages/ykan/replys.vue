<template>
	<view class="replys">
		<navbers></navbers>
		<view class="replysbox">
			<reply v-for="(item,index) in date" @godetail="godetail" :replydata="item"></reply>
		</view>
	</view>
</template>

<script>
	import navbers from "../../components/component/nav/navbers.vue";
	import reply from "../../components/component/ykan/reply.vue";
	import beltsee from "../../components/component/ykan/beltsee.vue"
	export default{
		data(){
			return{
				date:[
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？","name":"角门动力","time":"2020-03-29","all":"20"},
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？","name":"角门动力","time":"2020-03-29","all":"20"},
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？","name":"角门动力","time":"2020-03-29","all":"20"},
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？","name":"角门动力","time":"2020-03-29","all":"20"},
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？","name":"角门动力","time":"2020-03-29","all":"20"},
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？","name":"角门动力","time":"2020-03-29","all":"20"},
					{"text":"【东南小区】 小区的优势有哪些？小区的优势有哪些？小区的优势有哪些？","name":"角门动力","time":"2020-03-29","all":"20"}
				]
			}
		},
		methods:{
			godetail:function(item){
				console.log(item,1111)
				uni.navigateTo({
					url:"./detaisl"
				})
			},
		},
		components:{
			reply,
			navbers
		}
	}
</script>

<style scoped lang="less">
	.replysbox{
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	
</style>
