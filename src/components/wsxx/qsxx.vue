<!-- 入学准备-完善信息-第二页亲属信息 -->
<template>
	<div class="bgcolor">
		<div class="title">家庭成员信息</div>
		<!-- <qsxxb v-if="item" v-for="item,index in num" :key="item.sfzhm+index" :getSavedData="item" :value="djyz" @childData="getBack" @delChild="delChild"></qsxxb> -->
		<qsxxb v-if="item" v-for="item,index in num" :key="item.sfzhm" :getSavedData="item" :value="djyz" @childData="getBack" @delChild="delChild"></qsxxb>
		<p class="add">
			<span @click="add">添加其他成员信息</span>
		</p>
		<div class="nextpage" @click="toCdxx">
			<mt-button size="large" type="primary">下一步</mt-button>
		</div>
	<!-- 	<transition name="fade">
			<div class="success" v-show="isShow">请录入正确完整的信息后再点击下一页</div>
		</transition> -->
	</div>
</template>

<script>
//导入亲属信息表组件复用
	import qsxxb from "@/components/common/rxzb-wsxx-qsxx-info.vue"
	export default{
		name:'',
		components:{qsxxb},
		data(){
			return {
				//控制添加信息组件
				num:[],
				//点击下一步，向下传值控制子组件将所有信息传上来
				djyz:false,
				//控制提示消息框的弹出
				isShow:false,
				//容器来装子组件返回状态
				container:[],
				//保存所有子组件的数据
				save:[]
			}
		},
		watch:{
			$route( to , from ){
				if(from.path == '/wsxxQsxx' && to.path== '/wsxxCdxx'){
					// this.$store.state.table = true
					// this.cd_boxs()
				}
		       // console.log( to , from )
		        // to , from 分别表示从哪跳转到哪，都是一个对象
		        // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
		     // }
			// '$route'(){
			// 	alert(0)
			}
		},
		methods:{
			toCdxx(){//这里点击并不负责跳转，只是向子组件中传值控制子组件运行
				this.djyz = !this.djyz
				//this.$router.push("/wsxxCdxx")
			},
			add(data){
				this.num.push({"cyxm":"","cygx":"","lxdh":"","cynl":"","gzhxxdw":"","nsr":"","gzhxxdwdz":"","jkzk":"","dwyb":"","sfzhm":"","zy":"","id":(new Date()).getTime()})



				// console.log(this.num);
			},
			//删除当前子组件信息页
			delChild(obj){
				// console.log(this.num)
				// console.log(obj)
				this.num = this.num.filter(item => item!=obj)
				console.log(this.num)

				//let arr = this.num.filter(item => item==obj)
				// this.num = []
				// this.$nextTick(() => {
				// 	this.num = arr
				// })	
				// this.num = this.num.splice(num)
				// if(this.num.length == 1){
				// 	this.num = [];
				// }
			},
			//根据子组件的返回值进行是否跳转等处理
			getBack(val){
				this.container.push(val.zt)
				this.save.push(val.value)
				console.log(this.container.length,this.num.length)
				if(this.container.length==this.num.length){//表单的个数和返回的次数相等时，才表示所有表单验证结果收集到
					//返回true跳转，否则继续提示完善信息
					
					if([...new Set(this.container)][0]==true && [...new Set(this.container)].length == 1){//状态值数组去重为后只有一个True保证全部通过
						//通过后一次性将这个页面数据传到store中保存，同时跳转页面
						var savewsxxPage2 = ""
						//将所有表单数据串在一起
						for(var i = 0;i < this.save.length;i++){
							savewsxxPage2 += this.save[i]
						}
						this.$store.commit("savewsxxPage2",savewsxxPage2)
						this.$router.push("/wsxxCdxx")
						this.container = []
						this.save = []
					}else{
						this.isShow = !this.isShow
						setTimeout(()=>{
							this.isShow = !this.isShow
						},2000)
						//如果失败一定要清除当前获取的状态，下次点击才能正确计算
						this.container = []
						this.save = []
					}

				}
			},
			cd_boxs(){
				var data = this.$store.state.getWsxxData
				
				if(data.qsxx.length==0){
					//根据数组的数据动态创建出表单信息，将数据交到子组件进行展示
					// console.log(data.qsxx)
					// console.log("a");
					this.num = [{"cyxm":"","cygx":"","lxdh":"","cynl":"","gzhxxdw":"","nsr":"","gzhxxdwdz":"","jkzk":"","dwyb":"","sfzhm":"","zy":"","id":2}]
					// console.log(this.num)
				}else{
					// this.$nextTick(() => {
						console.log(data.qsxx)
						// this.num.set(this.num,this.num.qsxx,data.qsxx)
						this.num = data.qsxx
						// console.log(data.qsxx)
						// console.log(this.num)
						// this.$set(this.num,data.qsxx);
					// })
					
					// console.log("bb"); 
				}
			}
		},
		// updated(){
		// 	console.log("updated");
		// 	console.log(this.$store.state.getWsxxData);
		// },
		// beforeUpdate(){
		// 	console.log("beforeUpdate");

		// },
		created(){
			console.log("created",this.$store.state.getWsxxData);
			this.cd_boxs()
		},
		// beforeMount(){
		// 	console.log("beforeMount");
		// // },
		// mounted(){
		// 	console.log("mounted");
		// },
		activated(){
			console.log("activated",this.$store.state.getWsxxData);
			//有数据就显示出来
			if(this.$store.state.table2){
				this.cd_boxs()
				this.$store.commit("changeTable2",false)
			}
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
		.nextpage
			margin:0 0.12rem 2rem
			margin-top:0.2rem
		.add
			display:flex
			height:0.51rem
			justify-content:center
			align-items:center
			background:#fff
			span
				padding-left:0.2rem	
				font-size:0.14rem
				font-family:PingFang-SC-Medium
				color:#408EDB	
				background:url(/yxxt/static/student-index-pictures/add.png) no-repeat
				background-size: .14rem;
				line-height:0.15rem
				height:0.15rem
		.success
			position:fixed
			margin:auto
			top:0
			left:0
			right:0
			bottom:0
			width:3rem
			height:.4rem
			border-radius:.06rem
			background:rgba(0, 0, 0, .7)
			line-height:.4rem
			text-align:center
			font-size:.14rem
			color:#fff
		.fade-enter-active,.fade-leave-active
			transition:opacity .5s
		.fade-enter,.fade-leave-to
			opacity:0
</style>