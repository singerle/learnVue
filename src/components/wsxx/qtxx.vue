<!-- 入学准备-完善信息-第三页曾读学校 -->
<template>
	<div class="bgcolor">
		<div class="title">学生基本信息</div>
		<cdxxb v-for="(item,index) in num" :key="item.cym+index" :getSavedData="item" :value="djyz" @childData="getBack"></cdxxb>
		<!-- <p class="add">
			<span @click="add">添加</span>
		</p> -->
		<div class="nextpage">
			<mt-button size="large" type="primary" @click.stop="complete">完成</mt-button>
		</div>
		<transition name="fade">
			<div class="success" v-show="FisShow">{{errorMessage}}</div>
		</transition>
		<!-- <transition name="fade">
			<div class="success" v-show="TisShow">操作成功</div>
		</transition> -->
	</div>
</template>

<script>
//导入曾读学校表组件复用
	import cdxxb from "@/components/common/rxzb-wsxx-cdxx-info.vue"
	// import {setHjStu} from "student/api/getHjxx.js"
	// import {sendWsxxData} from "student/api/wsxx.js"
	export default{
		name:'',
		components:{cdxxb},
		data(){
			return {
				TisShow:false,
				num:[{id:1}],
				//点击下一步，向下传值控制子组件将所有信息传上来
				djyz:false,
				//控制信息验证没通过时提示消息框的弹出
				FisShow:false,
				//新建一个状态用来装子组件的成功失败状态
				container:[],
				//错误消息
				errorMessage:"请完善信息后提交",
				//存子组件的数据
				save:[],
			}
		},
		methods:{
			complete(){//这里点击并不负责跳转，只是向子组件中传值控制子组件运行
				this.djyz = !this.djyz
				console.log("aaaa",this.djyz)
			},
			// add(){
			// 	this.num.push({id:(new Date()).getTime()})
			// },
			//delChild(obj){
				// this.num = this.num.splice(str)
				// console.log(obj);
				//this.num = this.num.filter(item => item.id!=obj.id)
				// this.num = []
				// this.$nextTick(() => {
				// 	this.num = arr
				// })	
				// this.num = this.num.splice(num)
				// if(this.num.length == 1){
				// 	this.num = [];
				// }
			//},
			//根据子组件的返回值进行是否跳转等处理
			getBack(val){
				//要多个子组件返回的val都为true才能算成功，因此将每子组件传过来的值放到数组中，最后进行分析
				this.container.push(val.zt)
				this.save.push(val.value)
				console.log(val.zt,val.value)

				//在所有子组件的返回结果到达后再进行判定跳转传值问题
				console.log(this.container.length==this.num.length);
				console.log(this.container.length,this.num.length);
				// if(this.container.length==this.num.length){
					//要全为true，去重后只有一个元素且为true
					if([...new Set(this.container)][0]==true&&[...new Set(this.container)].length==1){//返回true跳转，否则继续提示完善信息
						var savewsxxPage3 = ""
						//将所有表单数据串在一起
						for(var i = 0;i < this.save.length;i++){
							savewsxxPage3 += this.save[i]
						}
						//this.$store.commit("savewsxxPage3",savewsxxPage3)
						//整理好要传入的参数
						var string1 = this.$store.state.wsxxPage1
						var string2 = this.$store.state.wsxxPage2
						//var string3 = this.$store.state.wsxxPage3
						console.log("ppppp");
						//要提交的所有数据的字符串
						var value = string1 +'"qsxx":['+ string2.substring(0,string2.length-1) +'],"cdxx":'+ savewsxxPage3.substring(0,savewsxxPage3.length-1) +'}}'
						//字符串转json，json再转码，提交
						console.log(value);
						//调用学生端完善信息接口，上传所填写的表单信息
						let formData = new FormData()
						formData.append('param',encodeURI(value))
						// formData.append('param',"aadfsdf")
						//formData.param = encodeURI(value)
						// console.log(formData.param);
						sendWsxxData(formData).then((res) => {
							console.log(res);
							if(res.code === '40001'){
								//调用接口传递已完成状态
								// completeProcess({"processId":"1"}).then((res) => {
								// })
								console.log(this.$store.getters.getHjid);
								console.log("成功")
								var timer = null
								this.errorMessage = "保存成功"
								this.FisShow = true
								setHjStu({pauId: this.$store.getters.getHjid}).then((res) => {console.log(res.message);})
								timer = setTimeout(()=>{
									//弹出成功消息
									console.log('成功');
									this.FisShow = false
								},1000)
								var timer1 = null
								timer1 = setTimeout(()=>{
									//成功上传，2秒后跳转到首页
									this.$router.go(-3)
								},2000)
								this.container = []
								this.save = []
							}else{
								this.errorMessage = "请检查其他页面信息是否填写完整"
								this.FisShow=!this.FisShow
								var timer = null
								timer = setTimeout(()=>{
									this.FisShow = !this.FisShow
								},2000)
								console.log("send error")
								this.container = []
								this.save = []
							}
						})
					}else{
						this.container = []
						this.save = []
					}
				// }
			},

		},
		activated(){
		// 	//有数据就显示出来
		// 	console.log((new Date()).getTime());
		// 	var data = this.$store.state.getWsxxData
		// 	console.log(data);
		// 	if(data.cdxx.length){//数组长度不为0时通过数据加载表单
		// 		//根据数组的数据动态创建出表单信息，将数据交到子组件进行展示
		// 		this.num = data.cdxx
		// 	}else{
		// 		this.num = [{"xmpy":"","cym":"","sg":"","tz":"","tc":"","jkzk":"","hkxz":"","xx":"","hyzk":"","zjxy":"","drbgb":"","jtjg":"","ccqj":"","sfpkx":""}]
		// 	}
			if(this.$store.state.table3){
				
				// var data = this.$store.state.getWsxxData
				console.log(data);
				// if(data.cdxx.length){//数组长度不为0时通过数据加载表单
					//根据数组的数据动态创建出表单信息，将数据交到子组件进行展示
					// this.num = data.cdxx
				// }else{
				// 	this.num = [{"xmpy":"","cym":"","sg":"","tz":"","tc":"","jkzk":"","hkxz":"","xx":"","hyzk":"","zjxy":"","drbgb":"","jtjg":"","ccqj":"","sfpkx":""}]
				// }
				// this.$store.commit("changeTable3",false)
			}
		},
		created(){
		  	console.log((new Date()).getTime());
			var data = this.$store.state.getWsxxData
			console.log(data);
			if(data.cdxx.length){//数组长度不为0时通过数据加载表单
				//根据数组的数据动态创建出表单信息，将数据交到子组件进行展示
				this.num = data.cdxx
			}else{
				this.num = [{"xmpy":"","cym":"","sg":"","tz":"","tc":"","jkzk":"","hkxz":"","xx":"","hyzk":"","zjxy":"","drbgb":"","jtjg":"","ccqj":"","sfpkx":""}]
			}
		},
		mounted(){
			console.log(this.$store.state.wsxxPage1)
			console.log(this.$store.state.wsxxPage2)
		},
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.bgcolor
		position:fixed
		top:0
		bottom:0
		width:100%
		background:#f7f7f7
		overflow:auto
		.title
			font-size:0.13rem
			font-family:PingFang SC
			font-weight:bold
			line-height:0.31rem
			text-indent:0.12rem
			color:#333
		.cdxx //曾读学校
			border-top:0.01rem solid #e9e9e9
			margin-bottom:0.1rem
			.xxxx //详细信息
				padding:0 0.12rem
				background:#fff
				p
					border-bottom:0.01rem solid #e9e9e9
					font-size:0.16rem
					font-family:PingFang-SC-Medium
					color:#333
					line-height:0.44rem
					display:flex
					justify-content:space-between
					align-items:center
					input
						outline:none
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#555
						margin-left:-1rem
					span:first-child
						width:0.81rem
					span:last-child
						width:0.18rem
						height:0.18rem
						background:url(/yxxt/static/student-index-pictures/delete-hui.png)
				p:last-child
					border-bottom:0
				p:nth-of-type(2),p:first-child
					background:url(/yxxt/static/student-index-pictures/more-hui@2x.png) right center no-repeat 
					span:last-child
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#333
						margin-right:0.15rem
						background:none
						width:auto
						height:auto
		.nextpage
			margin:0 0.12rem 1rem
			margin-top:0.2rem
		.success
			position:fixed
			margin:auto
			top:0
			left:0
			right:0
			bottom:0
			width:calc(100% - .24rem)
			height:.4rem
			border-radius:.06rem
			background:rgba(0, 0, 0, .7)
			line-height:.4rem
			text-align:center
			font-size:.14rem
			color:#fff
		// .add
		// 	display:flex
		// 	height:0.51rem
		// 	justify-content:center
		// 	align-items:center
		// 	background:#fff
		// 	span
		// 		padding-left:0.2rem	
		// 		font-size:0.14rem
		// 		font-family:PingFang-SC-Medium
		// 		color:#408EDB	
		// 		background:url(/yxxt/static/student-index-pictures/add.png) no-repeat
		// 		background-size: .14rem .14rem;
		// 		line-height:0.15rem
		// 		height:0.15rem	
		// .success,.failed
		// 	position:fixed
		// 	margin:auto
		// 	top:0
		// 	left:0
		// 	right:0
		// 	bottom:0
		// 	width:1.08rem
		// 	height:.4rem
		// 	border-radius:.06rem
		// 	background:rgba(0, 0, 0, .7)
		// 	line-height:.4rem
		// 	text-align:center
		// 	font-size:.14rem
		// 	color:#fff
		// .failed
		// 	width:3rem
		.fade-enter-active,.fade-leave-active
			transition:opacity .5s
		.fade-enter,.fade-leave-to
			opacity:0
</style>