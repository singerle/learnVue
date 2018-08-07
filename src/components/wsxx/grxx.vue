<!-- 入学准备-完善信息 -->
<template>
	<div class="bgcolor">
		<div class="first">
			<div class="title">学生联系信息</div>
			<div class="content">
				<p>
					<span class="xmmc">出生地</span>
					<input placeholder="请填写省市名称" v-model="csd"></input>
					<span @click="csd=''" class="sctb" v-show="csd!=''"></span>
				</p>
				<p class="seclect">
					<span>户口所在地</span>
					<span @click="hkszd1">{{obj.hkszd?obj.hkszd:'请选择'}}</span>
				</p>
			</div>
		</div>
		<div class="second">
			<div class="content">
				<p>
					<span class="xmmc">联系电话</span>
					<input placeholder="请点击输入" v-model="lxdh" @input="lxdhInput" maxlength="11" @blur="lxdhBlur"></input>
					<span @click="lxdh=''" class="sctb" v-show="lxdh!=''"></span>
				</p>
				<p>
					<span class="xmmc">电子邮件</span>
					<input placeholder="请点击输入" v-model="dzyj"  @blur="dzyjBlur"></input>
					<span @click="dzyj=''" class="sctb" v-show="dzyj!=''"></span>
				</p>
				<p>
					<span class="xmmc">qq号码</span>
					<input placeholder="请点击输入" v-model="qq" @input="qqInput" @blur="qqBlur"></input>
					<span @click="qq=''" class="sctb" v-show="qq!=''"></span>
				</p>
				<p>
					<span class="xmmc">家庭电话</span>
					<input placeholder="请点击输入" v-model="jtdh" @input="jtdhInput" @blur="jtdhBlur"  maxlength="11"></input>
					<span @click="jtdh=''" class="sctb" v-show="jtdh!=''"></span>
				</p>
				<p>
					<span class="xmmc">家庭邮编</span>
					<input placeholder="请点击输入" v-model="jtyb" @input="jtybInput" @blur="jtybBlur" maxlength="6"></input>
					<span @click="jtyb=''" class="sctb" v-show="jtyb!=''"></span>
				</p>
				<p>
					<span class="xmmc">家庭地址</span>
					<input placeholder="请点击输入" v-model="jtdz"></input>
					<span @click="jtdz=''" class="sctb" v-show="jtdz!=''"></span>
				</p>
				<p>
					<span class="xmmc">现住址邮编</span>
					<input placeholder="请点击输入" v-model="xzzyb" @input="xzzybInput" @blur="xzzybBlur" maxlength="6"></input>
					<span @click="xzzyb=''" class="sctb" v-show="xzzyb!=''"></span>
				</p>
				<p>
					<span class="xmmc">现住址</span>
					<input placeholder="请点击输入" v-model="xzz"></input>
					<span @click="xzz=''" class="sctb" v-show="xzz"></span>
				</p>
			</div>
		</div>
		<div class="nextpage">
			<mt-button size="large" type="primary" @click.native="toNextPage">下一页</mt-button>
		</div>
		<transition name="fade">
			<div class="error" v-show="isShow">{{errorMessage}}</div>
		</transition>
		<!-- <mt-datetime-picker
		    ref="picker"
		    type="date"
		    :startDate="new Date('1990/1/1')"
		    :endDate="new Date()"
		    @confirm="handleConfirm"
		    >
		</mt-datetime-picker> -->
	<!-- 	<mt-popup
		  v-model="zzmm"
		  position="bottom">
		  <div class="popupWidth">
		  	<p>
		  		<span class="fl" @click="closepopu('zzmm')">取消</span>
		  		<span class="fr" @click="confirm('zzmm')">确认</span>
		  		<div style="clear: both"></div>
		  	</p>
			<mt-picker :slots="zzmmSlots" ref="zzmm" :visibleItemCount="3"></mt-picker>
		</div>
		</mt-popup> -->

		<cityThree ref="hkszd" @checkValue="getCity"></cityThree>
	<!-- 	<cityThree ref="syd" @checkValue="getCity2"></cityThree> -->
		<!-- <mt-popup
		  v-model="jg"
		  position="bottom">
		  <div class="popupWidth">
		  	<p>
		  		<span class="fl" @click="closepopu('jg')">取消</span>
		  		<span class="fr" @click="confirm('jg')">确认</span>
		  		<div style="clear: both"></div>
		  	</p>
			<mt-picker :slots="jgSlots" ref="jg" :visibleItemCount="3"></mt-picker>
		</div>
		</mt-popup> -->
		<!-- <transition name="fade">
			<div class="failed" v-show="FisShow">{{errorMessage}}</div>
		</transition> -->
	</div>
</template>

<script>
// var arr = [ '健康', '良好', '一般', '不健康']
// var arr1 = [ 'O型', 'A型', 'B型' , 'AB型']
// var arr2 = [ '农村户口','城镇户口']
// var jg = ["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区"]

//导入三联动省市区地区选择的全国数据
import cityThree from '@/base/cityThree/cityThree'
// import myaddress from '@/../static/pca.json'
// import {getWsxxcxData} from 'student/api/wsxx.js'
	export default{
		name:'',
		components:{cityThree},
		data(){     
			return {
				//xh:'23423',
				csd:'',
				lxdh:'',
				dzyj:'',
				qq:'',
				jtdh:'',
				jtyb:'',
				jtdz:'',
				xzzyb:'',
				xzz:'',
				wx:'',
				errorMessage:'',
				//FisShow:false,
				//zzmm:false,
				//qq/微信的值
				//wx:'23423',
				//电子邮箱的值
				//email:'',
				//何时入党团的值
				//pickerValue:'请选择',
				//健康选定值
				//jkzk:false,
				//血型选定值
				//blood:false,
				//户口性质选定值
				//hkxz:false,
				//籍贯选定值
				//jg:false,
				hkszd:false,
				//syd:false,
				//要向store中提交的本页信息
				page1:'',
				obj:{
					//syd:'',
					//zzmm:'',
					//jg:'',
					hkszd:''
				},
				//政治面貌
				// zzmmSlots: [
				//     {
				//         values: ["党员","共青团员","群众"],
				//         className: 'slot1',
				//         textAlign: 'center',
				//         defaultIndex: 1
			 //        }
				// ],
				// sydSlots: [
				//     {
				//         values: ["党员","共青团员","群众"],
				//         className: 'slot1',
				//         textAlign: 'center',
				//         defaultIndex: 1
			 //        }
				// ],
				// //健康选择
				// jkzkSlots: [
				//     {
				//         values: arr,
				//         className: 'slot1',
				//         textAlign: 'center',
				//         defaultIndex: 1
			 //        }
				// ],
				// //血型选择
				// bloodSlots: [
				//     {
				//         values: arr1,
				//         className: 'slot1',
				//         textAlign: 'center',
				//         defaultIndex: 1
			 //        }
				// ],
				//户口性质选择
				// hkxzSlots: [
				//     {
				//         values: arr2,
				//         className: 'slot1',
				//         textAlign: 'center',
				//         defaultIndex: 2
			 //        }
				// ],
				//籍贯选择
				// jgSlots: [
				//     {
				//         values: jg,
				//         className: 'slot1',
				//         textAlign: 'center',
				//         defaultIndex: 1
			 //        }
				// ],
				//地区选择器
				// myAddressSlots: [
				//           {
				//             flex: 1,
				//             defaultIndex: 1,    
				//             values: Object.keys(myaddress),  //省份数组
				//             className: 'slot1',
				//             textAlign: 'left'
				//           },
				//           {
				//             flex: 1,
				//             values: Object.keys(myaddress),
				//             className: 'slot2',
				//             textAlign: 'center'
				//           },
				//           {
				//             flex: 1,
				//             values: [],
				//             className: 'slot3',
				//             textAlign: 'right'
				//           }
				//         ],
		  //       myAddressProvince:'省',
		  //       myAddressCity:'市',
		  //       myAddresscounty:'区/县',
		  //       //户口所在地（省市区合并）
		  //       //控制验证不通过提示
		        isShow:false,
		  //       //要上传的时间格式
		  //       formatTime:'',
		    }
		},
		watch:{
			$route( to , from ){
				if(from.path == '/index' && to.path== '/rxzb/wsxx'){
					this.$store.commit("changeTable1",true)
					this.$store.commit("changeTable2",true)
					this.$store.commit("changeTable3",true)
					this.getData()
				}
		       // console.log( to , from )
		        // to , from 分别表示从哪跳转到哪，都是一个对象
		        // to.path  ( 表示的是要跳转到的路由的地址 eg: /home );
		     // }
			// '$route'(){
			// 	alert(0)
			}
		// 	pickerValue(val){
		// 		val.substring(0,4)
		// 		var n = val.split('年');
		// 		var y = n[1].split('月');
		// 		var r = y[1].split('日');
		// 		if(y[0].toString().length==1){
		// 			y[0] = '0'+y[0]
		// 		}	
		// 		if(r[0].toString().length==1){
		// 			r[0] = '0'+r[0]
		// 		}
		// 		this.formatTime = n[0] + y[0] + r[0]
		// 	}
		},
		methods:{
			closepopu(popu) {
				this[popu] = false
			},
			// openPicker() {
			//     this.$refs.picker.open();
			// },
			lxdhInput(e){
				this.lxdh=e.target.value.replace(/[^\d]/g,'');
				if(this.lxdh==0){
					this.lxdh = ''
				}
			},
			qqInput(e){
				this.qq=e.target.value.replace(/[^\d]/g,'');
				if(this.qq==0){
					this.qq = ''
				}
			},
			jtdhInput(e){
				this.jtdh=e.target.value.replace(/[^\d]/g,'');
			},
			jtybInput(e){
				this.jtyb=e.target.value.replace(/[^\d]/g,'');
			},
			xzzybInput(e){
				this.xzzyb=e.target.value.replace(/[^\d]/g,'');
			},
			qqBlur(){
				console.log('qq');
				// var reg = /[1-9][0-9]{4,14}/
				// if(!reg.test(this.qq)){
				// 	this.errorMessage = "请输入5-15位qq号码"
				// 	this.FisShow = true
				// 	var timer = null
				// 	timer = setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			dzyjBlur(){
				console.log('电子邮件');
				// var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
				// if(!reg.test(this.dzyj)){
				// 	this.FisShow = true
				// 	this.errorMessage = "请输入正确的邮箱帐号"
				// 	var timer = null
				// 	timer = setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			lxdhBlur(){
				console.log('联系电话');
				// var phoneNumberReg = /^[1][3,4,5,7,8,9][0-9]{9}$/
				// if(!phoneNumberReg.test(this.lxdh)){
				// 	this.FisShow = true
				// 	this.errorMessage = "联系电话请输入正确的11位手机号码"
				// 	var timer = null
				// 	timer = setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			jtdhBlur(){
				console.log('家庭电话');
				// var zuoji = /0\d{10}/
				// var phoneNumberReg = /^[1][3,4,5,7,8,9][0-9]{9}$/
				// console.log(zuoji.test(this.jtdh)||phoneNumberReg.test(this.jtdh));
				// if(!(zuoji.test(this.jtdh)||phoneNumberReg.test(this.jtdh))){
				// 	this.FisShow = true
				// 	this.errorMessage = "家庭电话请输入正确的11位手机号码或者座机号"
				// 	var timer = null
				// 	timer = setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			jtybBlur(){
				console.log('家庭邮编');
				// if(this.jtyb.length!=6){
				// 	this.FisShow = true
				// 	this.errorMessage = "家庭邮编请输入6位邮编号码"
				// 	var timer = null
				// 	timer = setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			xzzybBlur(){
				console.log('现住址邮编');
				// if(this.xzzyb.length!=6){
				// 	this.FisShow = true
				// 	this.errorMessage = "现住址邮编请输入6位邮编号码"
				// 	var timer = null
				// 	timer = setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			// handleConfirm(pickerValue){
			// 	console.log(pickerValue)
			// 	//要显示的格式
			// 	this.pickerValue = pickerValue.getFullYear()+"年"+(pickerValue.getMonth()+1)+"月"+pickerValue.getDate()+'日'
			// 	//要上传的格式 20130913
			// 	var year = pickerValue.getFullYear()
			// 	var month = pickerValue.getMonth()+1
			// 	var day = pickerValue.getDate()
			// 	if(month < 10){
			// 		month = '0'+month
			// 	}
			// 	if(day < 10){
			// 		day = '0' + day
			// 	}
			// 	this.formatTime = year + month + day
			// },
			hkszd1(){
				this.$refs.hkszd.choseAdd()
			},			
			// syd1(){
			// 	this.$refs.syd.choseAdd()
			// },
			getCity(address){
				this.obj.hkszd = address
			},
			// getCity2(address){
			// 	this.obj.syd = address
			// },
			confirm(key){
				this[key] = false
				this.obj[key] = this.$refs[key].values[0]
			},
			closepopu(popu) {
				this[popu] = false
			},
			toNextPage(){//点击下一页按钮将要在这里发生些事儿
				//电子邮件验证
				var dzyj = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
				//手机号码验证
				var phoneNumberReg = /^[1][3,4,5,7,8,9][0-9]{9}$/
				//qq号验证5~15位，纯数字不以0开头
				var qqReg = /^[1-9][0-9]{4,14}$/
				//座机验证
				var zuoji = /0\d{10}/
				//邮编格式验证
				var jtybReg = /^[0-9]{6}$/
				var dzyjYz = dzyj.test(this.dzyj)
				var sjhYz = phoneNumberReg.test(this.lxdh)
				var sjh2Yz = phoneNumberReg.test(this.jtdh)
				var qqYz = qqReg.test(this.qq)
				var zjYz = zuoji.test(this.jtdh)
				var jtybYz = jtybReg.test(this.jtyb)
				var xzzybYz = jtybReg.test(this.xzzyb)
				var flag = "请选择"
				var jtdhYz = sjh2Yz||zjYz
				
				// console.log(xzzybYz)
				// console.log(jtybYz)
				// console.log(jtdhYz)
				// console.log(qqYz);
				// console.log(sjhYz);
				// console.log(dzyjYz);
				// console.log(this.pickerValue!=flag);
				// console.log(this.pickerValue!='');
				// console.log(this.obj.hkszd!=flag);
				// console.log(this.csd!='');
				// console.log(this.jtdz!='');
				// console.log(this.xzz!='');
				// console.log(this.xh!='');

				if(xzzybYz&&jtybYz&&jtdhYz&&qqYz&&sjhYz&&dzyjYz&&this.pickerValue!=flag&&this.pickerValue!=''&&this.obj.hkszd!=flag&&this.obj.hkszd!=''&&this.csd!=''&&this.jtdz!=''&&this.xzz!=''){
					this.page1 = `{"grxx":{"qq":"${this.qq}","dzyj":"${this.dzyj}","hkszd":"${this.obj.hkszd}","jtdz":"${this.jtdz}","csd":"${this.csd}","lxdh":"${this.lxdh}","jtdh":"${this.jtdh}","jtyb":"${this.jtyb}","xzzyb":"${this.xzzyb}","xzz":"${this.xzz}"},`
					//提交当前页的内容到vuex的store中保存，state为wsxxPage1
					// console.log(this.page1)
					this.$store.commit("savewsxxPage1",this.page1)
					this.$router.push("/wsxxQsxx")
					// console.log(this.$store.state.wsxxPage1)
				}else{
					// console.log(this.obj.hkszd);
					if(this.csd==''){
						this.errorMessage = "出生地不能为空"
					}else if(this.obj.hkszd=="请选择" || this.obj.hkszd==""){
						this.errorMessage = "户口所在地未选择"
					}else if(!phoneNumberReg.test(this.lxdh)){
						this.errorMessage = "联系电话请输入正确的11位手机号码"
					}else if(!dzyj.test(this.dzyj)){
						this.errorMessage = "请输入正确的邮箱帐号"
					}else if(!qqReg.test(this.qq)){
						this.errorMessage = "请输入5-15位qq号码"
					}else if(!(zuoji.test(this.jtdh)||phoneNumberReg.test(this.jtdh))){
						this.errorMessage = "家庭电话请输入正确的11位手机号码或者座机号"
					}else if(this.jtyb.length!=6){
						this.errorMessage = "家庭邮编请输入6位邮编号码"
					}else if(this.jtdz==''){
						this.errorMessage = "家庭地址不能为空"
					}else if(this.xzzyb.length!=6){
						this.errorMessage = "现住址邮编请输入6位邮编号码"
					}else if(this.xzz==''){
						this.errorMessage = "现住址不能为空"
					}
					this.isShow=!this.isShow
					setTimeout(()=>{
						this.isShow = !this.isShow
					},1000)
				}
			},
			getData(){
				//每次点击完善信息，就会调用接口。
				//没有数据，显示全部需要填的空白页面（即最初设计的），补全后提交
				//有数据，就显示出来，可再次修改补全后提交
				getWsxxcxData().then((res) => {
					if(res.code == "40001"){
						console.log(res.message)
						console.log(res);
						//变量goodData装得到的数据，修改好后提交到store
						//var goodData = ""
						var goodData = res.content
						console.log(goodData);
						//封装一个函数Formattime将13位的时间戳转化为如“2018年6月28日”这样的字符串格式
						function Formattime(num){
							//时间戳转化为Date对象
							var date = new Date(num)
							return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+'日'
						}
						//处理传过来的全部数据
						//将没有数据（得到的值是null或者“null”）的选项设置成初始值
						//将已有的数据展示出来

						//savedData1为第一页数据对象，这里并没有修改goodData,是当前页直接手动改了页面应当要显示的值
						var savedData1 = goodData.grxx
						//var savedData1 = {}
						console.log(goodData.grxx);
						if(savedData1){
							for(var j = 0;j < Object.keys(savedData1).length;j++){
								var arr = Object.keys(savedData1) //arr就是一个对象key值组成的数组
								if(savedData1[arr[j]]===null||savedData1[arr[j]]==="null"){
									//区分是显示“请选择”还是“”,列举出来
									if(arr[j]=="hkszd"){
										savedData1[arr[j]] = "请选择"
									}else{
										savedData1[arr[j]] = ""
									}
								}else if(arr[j]=="hkszd"){
									this.obj.hkszd = savedData1[arr[j]]
									}else{
									this[arr[j]] = savedData1[arr[j]]
								}
								
							}
						}
						this.csd = savedData1.csd?savedData1.csd:''
						this.obj.hkszd = savedData1.hkszd?savedData1.hkszd:'请选择'
						this.lxdh = savedData1.lxdh?savedData1.lxdh:''
						this.dzyj = savedData1.dzyj?savedData1.dzyj:''
						this.qq = savedData1.qq?savedData1.qq:''
						this.jtdh = savedData1.jtdh?savedData1.jtdh:''
						this.jtyb = savedData1.jtyb?savedData1.jtyb:''
						this.jtdz = savedData1.jtdz?savedData1.jtdz:''
						this.xzzyb = savedData1.xzzyb?savedData1.xzzyb:''
						this.xzz = savedData1.xzz?savedData1.xzz:''
						

						//第二页数据处理
						//var savedData2 = [{}]
						var savedData2 = goodData.qsxx  //是一个对象组成的数组
						for(var i = 0;i < savedData2.length;i++){
							var obj = savedData2[i]
							obj.id = i
							for(var j = 0;j < Object.keys(savedData2[i]).length;j++){
								var arr = Object.keys(savedData2[i]) //arr就是一个对象key值组成的数组
								if(obj[arr[j]]===null||obj[arr[j]]==="null"){
									//区分是显示“请选择”还是“”,列举出来
									if(arr[j]=="cygx"||arr[j]=="nsr"||arr[j]=="jkzk"){
										obj[arr[j]] = "请选择"
									}else{
										obj[arr[j]] = ""
									}
								}
							}
						}

						//第三页数据处理
						//var savedData3 =[{}]
						var savedData3 = goodData.cdxx  //是一个对象组成的数组
						for(var i = 0;i < savedData3.length;i++){
							var obj = savedData3[i]
							obj.id = i
							for(var j = 0;j < Object.keys(savedData3[i]).length;j++){
								var arr = Object.keys(savedData3[i]) //arr就是一个对象key值组成的数组
								if(obj[arr[j]]===null||obj[arr[j]]==="null"){
									//区分是显示“请选择”还是“”,列举出来
									if(arr[j]=="jkzk"||arr[j]=="hkxz"||arr[j]=="xx"||arr[j]=="hyzk"||arr[j]=="zjxy"||arr[j]=="jtjg"||arr[j]=="ccqj"||arr[j]=="sfpkx"){
										obj[arr[j]] = "请选择"
									}else{
										obj[arr[j]] = ""
									}
								}
							}
						}
						//将所有获取的数据处理好后存到store中，后面两个页面直接获取展示，无需处理
						console.log(goodData)
						this.$store.commit("saveWsxxDate",goodData)
						console.log(this.$store.state.getWsxxData);
					}
						
				})
			}
		},
		// activated(){
			
		// },
		// beforeRouteLeave(to,from,next){alert()
			
		// 	if(to.path=="/rxzb/wsxx" && from.path =="/wsxxQsxx"){
		// 		this.getData()

		// 	}
		// 	// this.getData()
		// 	next()
		// },
		// beforeEach(to,from,next){alert(11)
		// 	next()
		// },
		// afterEach(){
		// 	alert()
		// },
		created(){
			this.getData()
		}

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
		.first
			border-top:0.01rem solid #e9e9e9
		.first,.second
			.title
				font-size:0.13rem
				font-family:PingFang SC
				font-weight:bold
				line-height:0.31rem
				text-indent:0.12rem
				color:#333
			.content 
				padding:0 0.12rem
				background:#fff
				.seclect
					border-bottom:0.01rem solid #e9e9e9
					font-size:0.16rem
					font-family:PingFang-SC-Medium
					color:#333
					line-height:0.44rem
					display:flex
					justify-content:space-between
					background:url(/yxxt/static/student-index-pictures/more-hui@2x.png) right center no-repeat 
					span:last-child
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#333
						margin-right:0.15rem
						min-width:1rem
						text-align:right
				// .seclect:last-child
				// 	border-bottom:0
				p
					border-bottom:0.01rem solid #e9e9e9
					font-size:0.16rem
					font-family:PingFang-SC-Medium
					color:#333
					line-height:0.44rem
					display:flex
					align-items:center
					input
						outline:none
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#555
						width:calc(100% - 1rem) 
					.xmmc //项目名称
						width:.81rem
					.sctb //删除图标
						width:0.18rem
						height:0.18rem
						background:url(/yxxt/static/student-index-pictures/delete-hui.png)
						background-size:.18rem
				p:nth-of-type(7)
					span:nth-child(1)
						width:.97rem
					input
						width:calc(100% - 1.16rem)
		.second
			.content
				p:last-child
					border-bottom:0
		// .second
		// 	.title
		// 		font-size:0.13rem
		// 		font-family:PingFang SC
		// 		font-weight:bold
		// 		line-height:0.31rem
		// 		text-indent:0.12rem
		// 		color:#333
			// .content
			// 	padding:0 0.12rem
			// 	background:#fff
			// 	p
			// 		border-bottom:0.01rem solid #e9e9e9
			// 		font-size:0.16rem
			// 		font-family:PingFang-SC-Medium
			// 		color:#333
			// 		line-height:0.44rem
			// 		display:flex
			// 		justify-content:space-between
			// 		background:url(/yxxt/static/student-index-pictures/more-hui@2x.png) right center no-repeat 
			// 		span:last-child
			// 			font-size:0.14rem
			// 			font-family:PingFang-SC-Medium
			// 			color:#333
			// 			margin-right:0.15rem
			// 			min-width:1rem
			// 			text-align:right
			// 	p:last-child
			// 		border-bottom:0
		.nextpage
			margin:0 0.12rem
			margin-top:0.2rem
		.error
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
			//color:red
		.fade-enter-active,.fade-leave-active
			transition:opacity .5s
		.fade-enter,.fade-leave-to
			opacity:0
.mint-popup
	width: 100%
.popupWidth
	>p
		font-size: 16px
		padding: .1rem
		text-align: center
</style>