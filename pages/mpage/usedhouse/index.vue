<template>
	<view class="used">
		<navber style="background: red;" class="nav"></navber>
		<!-- <tapber class="pop" :tab="pop"></tapber> -->
		<!-- <toppop class="pop" :popupTab="pop" :poplist="propst" @tabclick="tabclick"> -->
		<!-- </toppop> -->
		<toppopcopy class="pop" :popupTab="pop" :poplist="propst" @tabclick="tabclick">
		</toppopcopy>
		<view class="usedbox">
			<list :item="item" v-for="(item,index) in list" :key="index"></list>
			<view class="guess">
				猜你喜欢
			</view>
			<likelist :list="item" v-for="(item,index) in lists" ></likelist>
			
		</view>
	</view>
</template>

<script>
	import navber from "./nav.vue"
	import list from "@/components/component/usedhouse/list.vue"
	import likelist from "@/components/component/usedhouse/likelist.vue"
	import tapber from "@/components/component/usedhouse/topber.vue"
	import toppop from "@/components/component/usedhouse/top-popup.vue"
	import toppopcopy from "@/components/component/usedhouse/top-popupcopy.vue"
	export default{
		name:"used",
		components:{
			navber,
			list,
			likelist,
			tapber,
			toppop,
			toppopcopy
		},
		data(){
			return{
				title:"我关注的二手房",
				list:[
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园 3室2厅 140㎡","text":"朝阳区/中楼层/共20层/东 南","price":"470","type":["历史动态","找相似","VR带看"],"gz":"20","dj":"14000"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园 3室2厅 140㎡","text":"朝阳区/中楼层/共20层/东 南","price":"470","type":["历史动态","找相似","VR带看"],"gz":"20","dj":"14000"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园 3室2厅 140㎡","text":"朝阳区/中楼层/共20层/东 南","price":"470","type":["历史动态","找相似","VR带看"],"gz":"20","dj":"14000"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园 3室2厅 140㎡","text":"朝阳区/中楼层/共20层/东 南","price":"470","type":["历史动态","找相似","VR带看"],"gz":"20","dj":"14000"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园 3室2厅 140㎡","text":"朝阳区/中楼层/共20层/东 南","price":"470","type":["历史动态","找相似","VR带看"],"gz":"20","dj":"14000"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园 3室2厅 140㎡","text":"朝阳区/中楼层/共20层/东 南","price":"470","type":["历史动态","找相似","VR带看"],"gz":"20","dj":"14000"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园 3室2厅 140㎡","text":"朝阳区/中楼层/共20层/东 南","price":"470","type":["历史动态","找相似","VR带看"],"gz":"20","dj":"14000"}
				],
				lists:[
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园","text":"朝阳区/140m/东 南","price":"470","type":["满五年","近地铁","VR带看","商圈多"],"dz":"海淀区 中关村","dj":"14000","types":"降","prices":"800","loctiong":"地铁瀛海站西中等装修超大阳台好噶速度和"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园","text":"朝阳区/140m/东 南","price":"470","type":["满五年","近地铁","VR带看","商圈多"],"dz":"海淀区 中关村","dj":"14000","types":"降","prices":"800","loctiong":"地铁瀛海站西中等装修超大阳台好噶速度和"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园","text":"朝阳区/140m/东 南","price":"470","type":["满五年","近地铁","VR带看","商圈多"],"dz":"海淀区 中关村","dj":"14000","types":"降","prices":"800","loctiong":"地铁瀛海站西中等装修超大阳台好噶速度和"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园","text":"朝阳区/140m/东 南","price":"470","type":["满五年","近地铁","VR带看","商圈多"],"dz":"海淀区 中关村","dj":"14000","types":"降","prices":"800","loctiong":"地铁瀛海站西中等装修超大阳台好噶速度和"},
					{"img":"../../../static/images/ykan/20160831002034_FVid3.jpeg","title":"新华联锦园","text":"朝阳区/140m/东 南","price":"470","type":["满五年","近地铁","VR带看","商圈多"],"dz":"海淀区 中关村","dj":"14000","types":"降","prices":"800","loctiong":"地铁瀛海站西中等装修超大阳台好噶速度和"}
				],
				pop:["小区","房型","状态","排序"],
				props:[
					
						[
							{
								name:'不限',
								check:false
							},
							{
								name:'万科里',
								check:false
							},
							{
								name:'碧桂园',
								check:false
							},
							{
								name:'朝阳新城',
								check:false
							},
						],
						[
							{
								name:'不限',
								check:false
							},
							{
								name:'1室1厅',
								check:false
							},
							{
								name:'2室1厅',
								check:false
							},
							{
								name:'3室1厅',
								check:false
							}
						],
						[
							{
								name:'不限',
								check:false
							},
							{
								name:'在售',
								check:false
							},
							{
								name:'已售',
								check:false
							},
							{
								name:'未售',
								check:false
							}
						],
						[
							{
								name:'不限',
								check:false
							},
							{
								name:'价格低到高',
								check:false
							},
							{
								name:'价格高到低',
								check:false
							}
							
						]
				],		
				propst:[
					{"options":[{"name":"不限","check":false},{"name":"万科里","check":false},{"name":"碧桂园","check":false},{"name":"农科院","check":false}]},
					{"options":[{"name":"不限","check":false},{"name":"1室1厅","check":false},{"name":"2室1厅","check":false},{"name":"3室1厅","check":false}]},
					{"options":[{"name":"不限","check":false},{"name":"在售","check":false},{"name":"已售","check":false},{"name":"未售","check":false}]},
					{"options":[{"name":"不限","check":false},{"name":"低到高","check":false},{"name":"高到低","check":false}]}
				]
			}
		},
		methods:{
			tabclick(idx){
				console.log(idx)
				this.index=idx
			},
			
		
		},
	}
</script>

<style scoped lang="less">
	.ac{
		color: blue;
	}
	.poplist{
		height: 91rpx;
		font-size: 30rpx ;
		line-height: 91rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
	}
	.nav{
		z-index: 200;
	}
	.pop{
		width: 100%;
		position: fixed;
		top: 88rpx;
		left: 0;
		z-index: 20;
	}
	.usedbox{
		box-sizing: border-box;
		padding: 100rpx 24rpx 0;
		.guess{
			font-size: 40rpx;
			font-weight: 600;
			height: 56rpx;
			line-height: 56rpx;
			margin-bottom: 52rpx;
		}
	}
</style>
