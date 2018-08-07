<!-- 入学准备-完善信息-第二页亲属信息模块 -->
<template>	
	<div class="qsxx">
		<div class="xxxx">
			<!-- <p><span>姓名</span><input placeholder="请输入信息" v-model="xm"></input><span @click="xm=''"></span></p>
			<p>
				<span>关系</span>
				<span @click="gx=true">{{obj.gx?obj.gx:'请选择'}}</span>
			</p>
			<p><span>联系电话</span><input placeholder="请输入信息" v-model="lxdh"></input><span @click="lxdh=''"></span></p>
			<p><span>年龄</span><input placeholder="请输入信息" v-model.number="nl"></input><span @click="nl=''"></span></p>
			<p><span>工作单位</span><input placeholder="请输入信息" v-model="gzdw"></input><span @click="gzdw=''"></span></p>
			<p>
				<span>所在地区</span>
				<span @click="szdq1">{{obj.szdq?obj.szdq:'请选择'}}</span>
			</p>
			<p><span>职位</span><input placeholder="请输入信息" v-model="zw"></input><span @click="zw=''"></span></p>
			<p>
				<span>政治面貌</span>
				<span @click="zzmm=true">{{obj.zzmm?obj.zzmm:'请选择'}}</span>
			</p> -->
			<!-- <cityThree></cityThree> -->
			<p>
				<span>成员姓名</span>
				<input placeholder="主要联系人" v-model="cyxm"></input>
				<span @click="cyxm=''" v-show="cyxm!=''"></span>
			</p>
			<p>
				<span>成员年龄</span>
				<input placeholder="请输入信息" @input="handleInput" v-model="cynl" maxlength="3"></input>
				<span @click="cynl=''" v-show="cynl!=''"></span>
			</p>
			<p class="seclect">
				<span>成员关系</span>
				<span @click="cygx=true">{{obj.cygx?obj.cygx:'请选择'}}</span>
			</p>
			<p>
				<span class="xmmc">工作或学习单位</span>
				<input placeholder="请输入信息" v-model="gzhxxdw"></input>
				<span @click="gzhxxdw=''" v-show="gzhxxdw!=''"></span>
			</p>
			<p>
				<span class="xmmc">工作或学习单位地址</span>
				<input placeholder="请输入信息" v-model="gzhxxdwdz"></input>
				<span @click="gzhxxdwdz=''" v-show="gzhxxdwdz!=''"></span>
			</p>
			<p>
				<span>单位邮编</span>
				<input placeholder="请输入信息" v-model="dwyb" @input="dwybInput" maxlength="6" @blur="dwybBlur"></input>
				<span @click="dwyb=''" v-show="dwyb!=''"></span>
			</p>
			<p>
				<span>身份证号码</span>
				<input placeholder="请输入信息" v-model="sfzhm"  @input="sfzhmInput" maxlength="18" @blur="sfzhmBlur"></input>
				<span @click="sfzhm=''" v-show="sfzhm!=''"></span>
			</p>
			<p>
				<span>联系电话</span>
				<input placeholder="请输入信息" v-model="lxdh" @input="lxdhInput" @blur="lxdhBlur" maxlength="11"></input>
				<span @click="lxdh=''" v-show="lxdh!=''"></span>
			</p>
			<p>
				<span>职业</span>
				<input placeholder="请输入信息" v-model="zy"></input>
				<span @click="zy=''" v-show="zy!=''"></span>
			</p>
			<p class="seclect">
				<span>年收入</span>
				<span @click="nsr=true">{{obj.nsr?obj.nsr:'请选择'}}</span>
			</p>
			<p class="seclect">
				<span>健康状况</span>
				<span @click="jkzk=true">{{obj.jkzk?obj.jkzk:'请选择'}}</span>
			</p>
			<mt-popup
			  	v-model="cygx"
			  	position="bottom">
			  	<div class="popupWidth">
			  		<p>
			  			<b class="fl" @click="closepopu('cygx')">取消</b>
			  			<b class="fr" @click="confirm('cygx')">确认</b>
			  		</p>
					<mt-picker :slots="cygxSlots" ref="cygx" :visibleItemCount="3"></mt-picker>
				</div>
			</mt-popup>
			<mt-popup
			  	v-model="nsr"
			  	position="bottom">
			  	<div class="popupWidth">
			  		<p>
			  			<b class="fl" @click="closepopu('nsr')">取消</b>
			  			<b class="fr" @click="confirm('nsr')">确认</b>
			  		</p>
					<mt-picker :slots="nsrSlots" ref="nsr" :visibleItemCount="3"></mt-picker>
				</div>
			</mt-popup>
			<mt-popup
			  	v-model="jkzk"
			  	position="bottom">
			  	<div class="popupWidth">
			  		<p>
			  			<b class="fl" @click="closepopu('jkzk')">取消</b>
			  			<b class="fr" @click="confirm('jkzk')">确认</b>
			  		</p>
					<mt-picker :slots="jkzkSlots" ref="jkzk" :visibleItemCount="3"></mt-picker>
				</div>
			</mt-popup>
			<!-- <mt-popup
			  	v-model="gx"
			  	position="bottom">
			  	<div class="popupWidth">
			  		<p>
			  			<b class="fl" @click="closepopu('gx')">取消</b>
			  			<b class="fr" @click="confirm('gx')">确认</b>
			  		</p>
					<mt-picker :slots="gxSlots" ref="gx" :visibleItemCount="3"></mt-picker>
				</div>
			</mt-popup> -->
			<!-- <mt-popup
			  	v-model="zzmm"
			  	position="bottom">
			  	<div class="popupWidth">
			  		<p>
			  			<b class="fl" @click="closepopu('zzmm')">取消</b>
			  			<b class="fr" @click="confirm('zzmm')">确认</b>
			  		</p>
					<mt-picker :slots="zzmmSlots" ref="zzmm" :visibleItemCount="3"></mt-picker>
				</div>
			</mt-popup> -->
			<cityThree ref="szdq" @checkValue="getCity"></cityThree>
		</div>
		<div class="del">
			<span @click="del">删除</span>
		</div>
		<transition name="fade">
			<div class="error" v-show="FisShow">{{errorMessage}}</div>
		</transition>
	</div>
</template>

<script>
	import cityThree from '@/base/cityThree/cityThree'
	var cygxArr = [{"code":51,"value":"父亲"},{"code":52,"value":"母亲"},{"code":57,"value":"继父或养父"},{"code":58,"value":"继母或养母"},{"code":61,"value":"祖父"},{"code":62,"value":"祖母"},{"code":63,"value":"外祖父"},{"code":64,"value":"外祖母"},{"code":71,"value":"兄"},{"code":73,"value":"弟"},{"code":75,"value":"姐姐"},{"code":77,"value":"妹妹"}]
	var Arr = []
	for(var a=0;a<cygxArr.length;a++){
		Arr = Arr.concat(cygxArr[a].value)
	}
	// console.log(Arr);

	var jkzkArr = [{"code":10,"value":"健康或良好"},{"code":20,"value":"一般或较弱"},{"code":30,"value":"有慢性病"},{"code":31,"value":"心血管病"},{"code":32,"value":"脑血管病"},{"code":33,"value":"慢性呼吸系统病"},{"code":34,"value":"慢性消化系统病"},{"code":35,"value":"慢性肾炎"},{"code":36,"value":"结核病"},{"code":37,"value":"糖尿病"},{"code":38,"value":"神经或精神疾病"},{"code":41,"value":"癌症"},{"code":49,"value":"其他慢性病"},{"code":60,"value":"残疾"},{"code":61,"value":"视力残疾"},{"code":62,"value":"听力残疾"},{"code":63,"value":"言语残疾"},{"code":64,"value":"肢体残疾"},{"code":65,"value":"智力残疾"},{"code":66,"value":"精神残疾"},{"code":67,"value":"多重残疾"},{"code":69,"value":"其他残疾"}]
	var Arr1 = []
	for(var a=0;a<jkzkArr.length;a++){
		Arr1 = Arr1.concat(jkzkArr[a].value)
	}
	// console.log(Arr1);
	// var gxData = ["父子","父女","母子","母女","兄弟","姐妹","其他"]
	// var arr = [ '健康', '良好', '一般', '不健康']
	var nsr = ["50000元以下","50000-80000元","80000-10000元","10000-150000元","150000元以上"]
	export default{
		name:'qsxx',
		components:{cityThree},
		data(){
			return {
				pd_true:true,
				cyxm:'',//姓名
				cygx:false,//关系
				cynl:'',//年龄
				gzhxxdw:'',
				gzhxxdwdz:'',
				dwyb:'',
				sfzhm:'',
				lxdh:'',
				zy:'',
				errorMessage:'',
				nsr:false,
				jkzk:false,
				FisShow:false,
				obj:{
					cygx:'',
					nsr:'',
					jkzk:''
				},
				cygxSlots: [
				    {
				        values: Arr,
				        className: 'slot1',
				        textAlign: 'center',
				        defaultIndex: 1
			        }
				],
				nsrSlots: [
				    {
				        values: nsr,
				        className: 'slot1',
				        textAlign: 'center',
				        defaultIndex: 1
			        }
				],
				jkzkSlots: [
				    {
				        values: Arr1,
				        className: 'slot1',
				        textAlign: 'center',
				        defaultIndex: 1
			        }
				],
		        //返回给父组件一个数据，判定是否跳转下一页
		        toParent:false,
			}
		},
		methods:{
			handleInput(e){//年龄，控制只能输入数字且为1~150,首位数字不为0
				this.cynl=e.target.value.replace(/[^\d]/g,'');
				if(this.cynl==0){
					this.cynl = ''
				}else if(this.cynl>150){
					this.cynl = Math.floor(this.cynl/10)
				}
			},
			dwybInput(e){
				this.dwyb=e.target.value.replace(/[^\d]/g,'');
				if(this.dwyb.length>=7){
					this.dwyb = Math.floor(this.cynl/10)
				}
			},
			sfzhmInput(e){
				var val = e.target.value;
				var p = /[a-z]/i;//true,说明有英文字母。
				// if(parseInt(val).toString().length == val.toString()){

				// }else{
					if(val.toString().length <= 17){
						if(p.test(val)){
							this.sfzhm=val.replace(/[^\d]/g,'');
						}
					}else{
						console.log(val.indexOf("x") == 17)
						if(val.indexOf("x") == 17|| parseInt(val).toString().length == 18){
							this.sfzhm = e.target.value;
						}else if(p.test(val[val.length-1])){ 
							this.sfzhm = val.toString().replace(val.toString()[17],'')
						}
					
					}
				// }
				if(this.sfzhm==0){
					this.sfzhm = ''
				}
			},
			lxdhInput(e){
				this.lxdh=e.target.value.replace(/[^\d]/g,'');
			},
			dwybBlur(){
			// 	if(this.dwyb.length!=6){
			// 		this.FisShow = true
			// 		this.errorMessage = "单位邮编验证未通过，请重新输入"
			// 		setTimeout(()=>{
			// 			this.FisShow = !this.FisShow
			// 		},2000)
			// 	}
			},
			sfzhmBlur(){
			// 	var a = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
			// 	if(!a.test(this.sfzhm)){
			// 		this.FisShow = true
			// 		this.errorMessage = "身份证号码验证未通过，请重新输入"
			// 		setTimeout(()=>{
			// 			this.FisShow = !this.FisShow
			// 		},2000)
			// 	}
			},
			lxdhBlur(){
				// var zuoji = /0\d{10}/
				// var phoneNumberReg = /^[1][3,4,5,7,8,9][0-9]{9}$/
				// console.log(zuoji.test(this.lxdh)||phoneNumberReg.test(this.lxdh));
				// if(!(zuoji.test(this.lxdh)||phoneNumberReg.test(this.lxdh))){
				// 	this.FisShow = true
				// 	this.errorMessage = "联系电话验证未通过，请重新输入"
				// 	setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			confirm(key){
				this[key] = false
				this.obj[key] = this.$refs[key].values[0]
			},
			closepopu(popu) {
				this[popu] = false
			},
			szdq1(){
				this.$refs.szdq.choseAdd()
			},
			getCity(address){
				this.obj.szdq = address
			},
			del(){
				this.$emit("delChild",this.getSavedData)
			},
			cd_boxs(){
				console.log(this.getSavedData.id);
				console.log(this.getSavedData);
				var data = this.getSavedData
				// this.$nextTick(() => {
					this.cyxm = data.cyxm?data.cyxm:''
					this.obj.cygx = data.cygx?data.cygx:'请选择'
					this.lxdh = data.lxdh?data.lxdh:''
					this.cynl = data.cynl?data.cynl:''
					this.gzhxxdw = data.gzhxxdw?data.gzhxxdw:''
					this.gzhxxdwdz = data.gzhxxdwdz?data.gzhxxdwdz:''
					this.obj.nsr = data.nsr?data.nsr:'请选择'
					this.obj.jkzk = data.jkzk?data.jkzk:'请选择'
					this.zy = data.zy?data.zy:''
					this.sfzhm = data.sfzhm?data.sfzhm:''
					this.dwyb = data.dwyb?data.dwyb:''
					var savewsxxPage2 = `{"cyxm":"${this.cyxm}","cygx":"${this.obj.cygx}","lxdh":"${this.lxdh}","cynl":"${this.cynl}","gzhxxdw":"${this.gzhxxdw}","nsr":"${this.obj.nsr}","gzhxxdwdz":"${this.gzhxxdwdz}","jkzk":"${this.obj.jkzk}","dwyb":"${this.dwyb}","sfzhm":"${this.sfzhm}","zy":"${this.zy}"},`
				// console.log(savewsxxPage2);
				// })
			},
		},
		props:{
			//监听value变化进行操作
			value:Boolean,
			//获取已有的数据读取出来
			getSavedData:Object
		},
		watch:{
			getSavedData(val){
				console.log(val)
				var data = val
				// this.$nextTick(() => {
					this.cyxm = data.cyxm?data.cyxm:''
					this.obj.cygx = data.cygx?data.cygx:'请选择'
					this.lxdh = data.lxdh?data.lxdh:''
					this.cynl = data.cynl?data.cynl:''
					this.gzhxxdw = data.gzhxxdw?data.gzhxxdw:''
					this.gzhxxdwdz = data.gzhxxdwdz?data.gzhxxdwdz:''
					this.obj.nsr = data.nsr?data.nsr:'请选择'
					this.obj.jkzk = data.jkzk?data.jkzk:'请选择'
					this.zy = data.zy?data.zy:''
					this.sfzhm = data.sfzhm?data.sfzhm:''
					this.dwyb = data.dwyb?data.dwyb:''
					var savewsxxPage2 = `{"cyxm":"${this.cyxm}","cygx":"${this.obj.cygx}","lxdh":"${this.lxdh}","cynl":"${this.cynl}","gzhxxdw":"${this.gzhxxdw}","nsr":"${this.obj.nsr}","gzhxxdwdz":"${this.gzhxxdwdz}","jkzk":"${this.obj.jkzk}","dwyb":"${this.dwyb}","sfzhm":"${this.sfzhm}","zy":"${this.zy}"},`
				// console.log(savewsxxPage2);
				// })
			},
			value(){//只要监听父组件点击下一页改变传递的值，这个时候验证填的信息是否可以提交。不为空就提交到store中，并给父组件传递信息，以确定是否跳转下一页
				//手机号码验证
				var phoneNumberReg = /^[1][3,4,5,7,8,9][0-9]{9}$/
				//邮编格式验证
				var dwybYz = /^[0-9]{6}$/
				//身份证号码格式验证
				var isIDCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/
				//中国座机号码验证
				var zuoji = /0\d{10}/
				// console.log(dwybYz.test(this.dwyb))
				var sfzYz = isIDCard.test(this.sfzhm)
				var yxYz = dwybYz.test(this.dwyb)
				var sjhYz = phoneNumberReg.test(this.lxdh)
				var zjYz = zuoji.test(this.lxdh)
				// console.log(this.cyxm!='');
				// console.log(this.obj.cygx!='请选择');
				// console.log(this.obj.cygx!='');
				// console.log((sjhYz||zjYz));
				// console.log(this.cynl!='');
				// console.log(this.gzhxxdw!='');
				// console.log(this.obj.nsr!='请选择 ');
				// console.log(this.gzhxxdwdz!='');
				// console.log(this.obj.jkzk!='请选择');
				// console.log(this.obj.jkzk!='');
				// console.log(yxYz);
				// console.log(sfzYz);
				// console.log(this.zy!='');
				if(this.cyxm!=''&&this.obj.cygx!='请选择'&&this.obj.cygx!=''&&(sjhYz||zjYz)&&this.cynl!=''&&this.gzhxxdw!=''&&this.obj.nsr!='请选择 '&&this.gzhxxdwdz!=''&&this.obj.jkzk!='请选择'&&this.obj.jkzk!=''&&yxYz&&sfzYz&&this.zy!=''){
					var savewsxxPage2 = `{"cyxm":"${this.cyxm}","cygx":"${this.obj.cygx}","lxdh":"${this.lxdh}","cynl":"${this.cynl}","gzhxxdw":"${this.gzhxxdw}","nsr":"${this.obj.nsr}","gzhxxdwdz":"${this.gzhxxdwdz}","jkzk":"${this.obj.jkzk}","dwyb":"${this.dwyb}","sfzhm":"${this.sfzhm}","zy":"${this.zy}"},`
					//console.log(savewsxxPage2);
					//验证通过就将该页信息保存到store中
					//this.$store.commit("savewsxxPage2",savewsxxPage2)
					//并且发送一个消息，父组件获取这个消息进行跳转到下一个页面
					this.toParent = true
					this.$emit("childData",{zt:this.toParent,value:savewsxxPage2})
				}else{//验证不通过,传值false
					if(this.obj.jkzk =='请选择'){
						this.errorMessage = "请选择健康状况"
					}
					if(this.obj.nsr =='请选择'){
						this.errorMessage = "请选择年收入"
					}
					if(this.zy == ''){
						this.errorMessage = "职业不能为空"
					}
					if(!phoneNumberReg.test(this.lxdh)){
						this.errorMessage = "联系电话请输入正确的11位手机号码"
					}
					if(!isIDCard.test(this.sfzhm)){
						this.errorMessage = "请输入正确的身份证号码"
					}
					if(this.dwyb.length!=6){
						this.errorMessage = "单位邮编请输入6位邮编号码"
					}
					if(this.gzhxxdwdz == ''){
						this.errorMessage = "工作或学习单位地址不能为空"
					}
					if(this.gzhxxdw ==''){
						this.errorMessage = "工作或学习单位不能为空"
					}
					if(this.obj.cygx =='请选择'){
						this.errorMessage = "请选择成员关系"
					}
					if(this.cynl == ''){
						this.errorMessage = "成员年龄不能为空"
					}
					if(this.cyxm == ''){
						this.errorMessage = "成员姓名不能为空"
					}
					var timer = null
					this.FisShow=!this.FisShow
					timer = setTimeout(()=>{
						this.FisShow = !this.FisShow
						clearTimeout(timer)
					},1000)
					this.toParent = false
					this.$emit("childData",{zt:this.toParent,value:""})
				}
			}
		},
		created(){
			this.cd_boxs()
		},
		activated(){
			// console.log(1,this.getSavedData)
			// this.cd_boxs()
	// 		console.log('activated',this.getSavedData);
	// 		// if(this.pd_true){
	// 			//this.$nextTick(() => {
	// 				//如果有数据就显示
	// 					var data = this.getSavedData
	// 					// console.log(data);
	// 					this.cyxm = data.cyxm?data.cyxm:''
	// 					this.obj.cygx = data.cygx?data.cygx:'请选择'
	// 					this.lxdh = data.lxdh?data.lxdh:''
	// 					this.cynl = data.cynl?data.cynl:''
	// 					this.gzhxxdw = data.gzhxxdw?data.gzhxxdw:''
	// 					this.gzhxxdwdz = data.gzhxxdwdz?data.gzhxxdwdz:''
	// 					this.obj.nsr = data.nsr?data.nsr:'请选择'
	// 					this.obj.jkzk = data.jkzk?data.jkzk:'请选择'
	// 					this.zy = data.zy?data.zy:''
	// 					this.sfzhm = data.sfzhm?data.sfzhm:''
	// 					this.dwyb = data.dwyb?data.dwyb:''
	// 					var savewsxxPage2 = `{"cyxm":"${this.cyxm}","cygx":"${this.obj.cygx}","lxdh":"${this.lxdh}","cynl":"${this.cynl}","gzhxxdw":"${this.gzhxxdw}","nsr":"${this.obj.nsr}","gzhxxdwdz":"${this.gzhxxdwdz}","jkzk":"${this.obj.jkzk}","dwyb":"${this.dwyb}","sfzhm":"${this.sfzhm}","zy":"${this.zy}"},`
	// 				// console.log(savewsxxPage2);
	// 			//})
	// 		// }
		},
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
		.qsxx //亲属信息
			border-top:0.01rem solid #e9e9e9
			margin-bottom:0.1rem
			.xxxx //详细信息
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
				.seclect:last-child
					border-bottom:0
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
					span:first-child
						width:0.81rem
					span:last-child
						width:0.18rem
						height:0.18rem
						background:url(/yxxt/static/student-index-pictures/delete-hui.png)
						background-size:.18rem
				p:last-child
					border-bottom:0
				p:nth-of-type(4)
					input
						width:calc(100% - 1.49rem)
					.xmmc
						width:1.3rem
				p:nth-of-type(5)
					input
						width:calc(100% - 1.84rem)
					.xmmc
						width:1.65rem
				p:nth-of-type(7)
					span:nth-child(1)
						width:.97rem
					input
						width:calc(100% - 1.16rem)
				p:nth-of-type(3),p:nth-of-type(10),p:nth-of-type(11)
					
					background:url(/yxxt/static/student-index-pictures/more-hui@2x.png) right center no-repeat 
					span:last-child
						font-size:0.14rem
						font-family:PingFang-SC-Medium
						color:#333
						margin-right:0.15rem
						background:none
						width:auto
						height:auto
	.del
		display:flex
		height:0.51rem
		justify-content:center
		align-items:center
		background:#fff
		margin-bottom:.1rem
		border-top:.03rem solid #f7f7f7
		span
			padding-left:0.2rem	
			font-size:0.14rem
			font-family:PingFang-SC-Medium
			color:#408EDB	
			background:url(/yxxt/static/student-index-pictures/del.png) no-repeat
			background-size: .14rem;
			line-height:0.15rem
			height:0.15rem
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
		justify-content:space-between
</style>