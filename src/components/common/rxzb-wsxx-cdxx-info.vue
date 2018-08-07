<!-- 入学准备-完善信息-第三页曾读学校表模块 -->
<template>
	<div class="cdxx">
		<div class="xxxx">
			<p>
				<span>姓名拼音</span>
				<input placeholder="输入信息" v-model="xmpy" :style="xmpy==''?{'color':'gray'}:{'color':'#000'}" @input="xmpyyz"></input>
				<span @click="xmpy=''" v-show="xmpy!=''"></span>
			</p>
			<p>
				<span>曾用名</span>
				<input placeholder="若没有填无" v-model="cym" :style="cym==''?{'color':'gray'}:{'color':'#000'}"></input>
				<span @click="cym=''" v-show="cym!=''"></span>
			</p>
			<p>
				<span>身高</span>
				<input placeholder="输入信息，单位：cm" v-model="sg" :style="sg==''?{'color':'gray'}:{'color':'#000'}"  @input="sgyz" @blur="sgyzBlur"></input>
				<span @click="sg=''" v-show="sg!=''"></span>
			</p>
			<p>
				<span>体重</span>
				<input placeholder="输入信息，单位：kg" v-model="tz" :style="tz==''?{'color':'gray'}:{'color':'#000'}"  @input="tzyz" @blur="tzyzBlur"></input>
				<span @click="tz=''" v-show="tz!=''"></span>
			</p>
			<p>
				<span>特长</span>
				<input placeholder="若没有填无" v-model="tc" :style="tc==''?{'color':'gray'}:{'color':'#000'}"></input>
				<span @click="tc=''" v-show="tc!=''"></span>
			</p>
			<p class="seclect">
				<span>健康状况</span>
				<span @click="jkzk=true">{{obj.jkzk?obj.jkzk:'请选择'}}</span>
			</p>
			<p class="seclect">
				<span>户口性质</span>
				<span @click="hkxz=true">{{obj.hkxz?obj.hkxz:'请选择'}}</span>
			</p>
			<p class="seclect">
				<span>血型</span>
				<span @click="xx=true">{{obj.xx?obj.xx:'请选择'}}</span>
			</p>
			<p class="seclect">
				<span>婚姻状况</span>
				<span @click="hyzk=true">{{obj.hyzk?obj.hyzk:'请选择'}}</span>
			</p>
			<p class="seclect">
				<span>宗教信仰</span>
				<span @click="zjxy=true">{{obj.zjxy?obj.zjxy:'请选择'}}</span>
			</p>
			<p>
				<span>担任班干部</span>
				<input placeholder="若没有填无" v-model="drbgb" :style="drbgb==''?{'color':'gray'}:{'color':'#000'}"></input>
				<span @click="drbgb=''" v-show="drbgb!=''"></span>
			</p>
			<p class="seclect">
				<span>家庭结构</span>
				<span @click="jtjg=true">{{obj.jtjg?obj.jtjg:'请选择'}}</span>
			</p>
			<p class="seclect">
				<span>乘车区间</span>
				<span @click="ccqj=true">{{obj.ccqj?obj.ccqj:'请选择'}}</span>
			</p>
			<p class="seclect">
				<span>是否贫困县</span>
				<span @click="sfpkx=true">{{obj.sfpkx?obj.sfpkx:'请选择'}}</span>
			</p>
		</div>
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
		<mt-popup
		  	v-model="hkxz"
		  	position="bottom">
		  	<div class="popupWidth">
		  		<p>
		  			<b class="fl" @click="closepopu('hkxz')">取消</b>
		  			<b class="fr" @click="confirm('hkxz')">确认</b>
		  		</p>
				<mt-picker :slots="hkxzSlots" ref="hkxz" :visibleItemCount="3"></mt-picker>
			</div>
		</mt-popup>
		<mt-popup
		  	v-model="xx"
		  	position="bottom">
		  	<div class="popupWidth">
		  		<p>
		  			<b class="fl" @click="closepopu('xx')">取消</b>
		  			<b class="fr" @click="confirm('xx')">确认</b>
		  		</p>
				<mt-picker :slots="xxSlots" ref="xx" :visibleItemCount="3"></mt-picker>
			</div>
		</mt-popup>
		<mt-popup
		  	v-model="hyzk"
		  	position="bottom">
		  	<div class="popupWidth">
		  		<p>
		  			<b class="fl" @click="closepopu('hyzk')">取消</b>
		  			<b class="fr" @click="confirm('hyzk')">确认</b>
		  		</p>
				<mt-picker :slots="hyzkSlots" ref="hyzk" :visibleItemCount="3"></mt-picker>
			</div>
		</mt-popup>
		<mt-popup
		  	v-model="zjxy"
		  	position="bottom">
		  	<div class="popupWidth">
		  		<p>
		  			<b class="fl" @click="closepopu('zjxy')">取消</b>
		  			<b class="fr" @click="confirm('zjxy')">确认</b>
		  		</p>
				<mt-picker :slots="zjxySlots" ref="zjxy" :visibleItemCount="3"></mt-picker>
			</div>
		</mt-popup>
		<mt-popup
		  	v-model="jtjg"
		  	position="bottom">
		  	<div class="popupWidth">
		  		<p>
		  			<b class="fl" @click="closepopu('jtjg')">取消</b>
		  			<b class="fr" @click="confirm('jtjg')">确认</b>
		  		</p>
				<mt-picker :slots="jtjgSlots" ref="jtjg" :visibleItemCount="3"></mt-picker>
			</div>
		</mt-popup>
		<mt-popup
		  	v-model="ccqj"
		  	position="bottom">
		  	<div class="popupWidth">
		  		<p>
		  			<b class="fl" @click="closepopu('ccqj')">取消</b>
		  			<b class="fr" @click="confirm('ccqj')">确认</b>
		  		</p>
				<mt-picker :slots="ccqjSlots" ref="ccqj" :visibleItemCount="3"></mt-picker>
			</div>
		</mt-popup>
		<mt-popup
		  	v-model="sfpkx"
		  	position="bottom">
		  	<div class="popupWidth">
		  		<p>
		  			<b class="fl" @click="closepopu('sfpkx')">取消</b>
		  			<b class="fr" @click="confirm('sfpkx')">确认</b>
		  		</p>
				<mt-picker :slots="sfpkxSlots" ref="sfpkx" :visibleItemCount="3"></mt-picker>
			</div>
		</mt-popup>
	<!-- 	<div class="del">
			<span @click="del">删除</span>
		</div> -->
		<transition name="fade">
			<div class="error" v-show="FisShow">{{errorMessage}}</div>
		</transition>
	</div>
</template>

<script>
var arr = [ '健康', '良好', '一般', '不健康']
var arr1 = [ 'O型', 'A型', 'B型' , 'AB型']
var hkxzArr = [{"code":1,"value":"农业户口"},{"code":2,"value":"非农业户口"}]
var Arr = []
for(var a=0;a<hkxzArr.length;a++){
	Arr = Arr.concat(hkxzArr[a].value)
}
var jkzkArr = [{"code":10,"value":"健康或良好"},{"code":20,"value":"一般或较弱"},{"code":30,"value":"有慢性病"},{"code":31,"value":"心血管病"},{"code":32,"value":"脑血管病"},{"code":33,"value":"慢性呼吸系统病"},{"code":34,"value":"慢性消化系统病"},{"code":35,"value":"慢性肾炎"},{"code":36,"value":"结核病"},{"code":37,"value":"糖尿病"},{"code":38,"value":"神经或精神疾病"},{"code":41,"value":"癌症"},{"code":49,"value":"其他慢性病"},{"code":60,"value":"残疾"},{"code":61,"value":"视力残疾"},{"code":62,"value":"听力残疾"},{"code":63,"value":"言语残疾"},{"code":64,"value":"肢体残疾"},{"code":65,"value":"智力残疾"},{"code":66,"value":"精神残疾"},{"code":67,"value":"多重残疾"},{"code":69,"value":"其他残疾"}]
var Arr1 = []
for(var a=0;a<jkzkArr.length;a++){
	Arr1 = Arr1.concat(jkzkArr[a].value)
}

var xxArr = [{"code":0,"value":"未知血型"},{"code":1,"value":"A血型"},{"code":2,"value":"B血型"},{"code":3,"value":"AB血型"},{"code":4,"value":"O血型"},{"code":5,"value":"RH阳性血型"},{"code":6,"value":"RH阴性血型"},{"code":7,"value":"HLA血型"},{"code":8,"value":"未定血型"},{"code":9,"value":"其他血型"}]
var Arr2 = []
for(var a=0;a<xxArr.length;a++){
	Arr2 = Arr2.concat(xxArr[a].value)
}

var hyzkArr = [{"code":10,"value":"未婚"},{"code":20,"value":"已婚"},{"code":21,"value":"初婚"},{"code":22,"value":"再婚"},{"code":23,"value":"复婚"},{"code":30,"value":"丧偶"},{"code":40,"value":"离婚"},{"code":90,"value":"未说明的婚姻状况"}]
var Arr3 = []
for(var a=0;a<hyzkArr.length;a++){
	Arr3 = Arr3.concat(hyzkArr[a].value)
}

var zjxyArr = [{"code":0,"value":"无宗教信仰"},{"code":10,"value":"佛教"},{"code":20,"value":"喇嘛教"},{"code":30,"value":"道教"},{"code":40,"value":"天主教"},{"code":50,"value":"基督教"},{"code":60,"value":"东正教"},{"code":70,"value":"伊斯兰教"},{"code":99,"value":"其他"}]
var Arr4 = []
for(var a=0;a<zjxyArr.length;a++){
	Arr4 = Arr4.concat(zjxyArr[a].value)
}

var jtjgArr = [{"code":1,"value":"双亲健全"},{"code":2,"value":"孤儿"},{"code":3,"value":"单亲（父母一方去世）"},{"code":4,"value":"父母离异"},{"code":5,"value":"双亲有残疾"},{"code":6,"value":"本人残疾"},{"code":7,"value":"军烈属或优抚对象"},{"code":8,"value":"重病"},{"code":9,"value":"五保户"}]
var Arr5 = []
for(var a=0;a<jtjgArr.length;a++){
	Arr5 = Arr5.concat(jtjgArr[a].value)
}
 var arr3 = ['是','否']
// var hyzkArr = ['已婚','未婚','丧偶','离婚']
// var zjxyArr = ['基督教','无','伊斯兰教','佛教','道教','天主教']
 var jtjgArr = ['主干家庭','核心家庭','联合家庭','其他家庭']
 var jg = ["北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区"]
	export default{
		name:'cdxx',
		data(){
			return {
				xmpy:'',
				cym:'',
				sg:'',
				tz:'',
				tc:'',
				errorMessage:'',
				jkzk:false,
				hkxz:false,
				xx:false,
				hyzk:false,
				zjxy:false,
				drbgb:'',
				jtjg:false,
				ccqj:false,
				sfpkx:false,
				FisShow:false,
				obj:{
					jkzk:'',
					hkxz:'',
					xx:'',
					hyzk:'',
					zjxy:'',
					jtjg:'',
					ccqj:'',
					sfpkx:''
				},
				xxSlots: [
				    {
				        values: Arr2,
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
				hkxzSlots: [
				    {
				        values: Arr,
				        className: 'slot1',
				        textAlign: 'center',
				        defaultIndex: 1
			        }
				],
				hyzkSlots: [
				    {
				        values: Arr3,
				        className: 'slot1',
				        textAlign: 'center',
				        defaultIndex: 1
			        }
				],
				zjxySlots: [
				    {
				        values: Arr4,
				        className: 'slot1',
				        textAlign: 'center',
				        defaultIndex: 1
			        }
				],
				jtjgSlots: [
				    {
				        values: Arr5,
				        className: 'slot1',
				        textAlign: 'center',
				        defaultIndex: 1
			        }
				],
				ccqjSlots: [
				    {
				    	//flex:1,
				        values: jg,
				        className: 'slot1',
				        textAlign: 'right',
				        defaultIndex: 1
			        },
			        {
			        	//flex:1,
				        values: jg,
				        className: 'slot2',
				        textAlign: 'left',
				        defaultIndex: 1
			        }
				],
				sfpkxSlots: [
				    {
				        values: arr3,
				        className: 'slot1',
				        textAlign: 'center',
				        //defaultIndex: 1
			        }
				],
				//返回给父组件一个数据，判定是否跳转下一页
				toParent:false,
			}
		},
		methods:{
			// openPicker1() {
			//     this.$refs.picker1.open();
			// },
			// openPicker2() {
			//     this.$refs.picker2.open();
			// },
			sgyz(e){
				this.sg=e.target.value.replace(/[^\d]/g,'');
				if(this.sg == 0){
					this.sg = '' 
				}
			},
			tzyz(e){
				this.tz=e.target.value.replace(/[^\d]/g,'');
				if(this.tz == 0){
					this.tz = '' 
				}
			},
			xmpyyz(e){
				this.xmpy=e.target.value.replace(/[^a-z]/g,'');
			},
			sgyzBlur(){
				// if(this.sg > 250||this.sg < 100){
				// 	this.FisShow = true
				// 	this.errorMessage = "身高验证未通过，请重新输入"
				// 	setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			tzyzBlur(){
				// if(this.tz > 300||this.tz < 20){
				// 	this.FisShow = true
				// 	this.errorMessage = "体重验证未通过，请重新输入"
				// 	setTimeout(()=>{
				// 		this.FisShow = !this.FisShow
				// 	},2000)
				// }
			},
			confirm(key){
				this[key] = false
				if(key=="ccqj"){
					this.obj[key] = this.$refs[key].values[0] +"—" + this.$refs[key].values[1]
				}else{
					this.obj[key] = this.$refs[key].values[0]
				}
			},
			closepopu(popu) {
				this[popu] = false
			},
			// del(){
			// 	this.$emit("delChild",this.getSavedData)
			// }
		},
		props:{
			value:Boolean,
			getSavedData:Object,
		},
		watch:{
			getSavedData(val){
				console.log("created");
				console.log(this.getSavedData.id==1);
				if(val.id!=1){
					var data = val
					//封装一个函数Formattime将13位的时间戳转化为如“2018年6月28日”这样的字符串格式
					function Formattime(num){
						//时间戳转化为Date对象
						var date = new Date(num)
						return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+'日'
					}
					//将已有的数据展示出来
					// if(data.kssj == "请选择"||data.kssj == undefined){
					// 	this.startValue = "请选择"
					// }else this.startValue = Formattime(data.kssj)
					// if(data.jssj == "请选择" || data.jssj == undefined){
					// 	this.overValue = "请选择"
					// }else this.overValue = Formattime(data.jssj)
					//console.log(this.startValue)
					this.cym = data.cym?data.cym:''
					this.xmpy = data.xmpy?data.xmpy:''
					this.sg = data.sg?data.sg:''
					this.tz = data.tz?data.tz:''
					this.tc = data.tc?data.tc:''
					this.obj.jkzk = data.jkzk?data.jkzk:'请选择'
					this.obj.hkxz = data.hkxz?data.hkxz:'请选择'
					this.obj.xx = data.xx?data.xx:'请选择'
					this.obj.hyzk = data.hyzk?data.hyzk:'请选择'
					this.obj.zjxy = data.zjxy?data.zjxy:'请选择'
					this.drbgb = data.drbgb?data.drbgb:''
					this.obj.jtjg = data.jtjg?data.jtjg:'请选择'
					this.obj.ccqj = data.ccqj?data.ccqj:'请选择'
					this.obj.sfpkx = data.sfpkx?data.sfpkx:'请选择'
				}
			},
			value(){
				var flag = "请选择"
				console.log("bb")
				console.log(this.xmpy!='');
				console.log(this.cym!='');
				console.log(this.sg!='');
				console.log(this.tz!='');
				console.log(this.tc!='');
				console.log(this.obj.jkzk!=flag);
				console.log(this.obj.hkxz!=flag);
				console.log(this.obj.xx!=flag);
				console.log(this.obj.hyzk!=flag);
				console.log(this.obj.zjxy!=flag);
				console.log(this.drbgb!='');
				console.log(this.obj.jtjg!=flag);
				console.log(this.obj.ccqj!=flag);
				console.log(this.obj.sfpkx!=flag);
				console.log(this.xmpy!=''&&this.cym!=''&&this.sg<250&&this.sg>100&&this.tz>20&&this.tz<300&&this.tc!=''&&this.obj.jkzk!=flag&&this.obj.hkxz!=flag&&this.obj.xx!=flag&&this.obj.hyzk!=flag&&this.obj.zjxy!=flag&&this.drbgb!=''&&this.obj.jtjg!=flag&&this.obj.ccqj!=flag&&this.obj.sfpkx!=flag);
				if(this.xmpy!=''&&this.cym!=''&&this.sg<250&&this.sg>100&&this.tz>20&&this.tz<300&&this.tc!=''&&this.obj.jkzk!=flag&&this.obj.hkxz!=flag&&this.obj.xx!=flag&&this.obj.hyzk!=flag&&this.obj.zjxy!=flag&&this.drbgb!=''&&this.obj.jtjg!=flag&&this.obj.ccqj!=flag&&this.obj.sfpkx!=flag){
					//填入信息验证通过后将信息写入vuex中
					// for(var i=0;i < hkxzArr.length;i++){
					// 	if(hkxzArr[i].value == this.obj.hkxz){
					// 		 var hkxz=hkxzArr[i].code
					// 		 console.log(hkxz);
					// 	}
					// }
					// for(var i=0;i < jkzkArr.length;i++){
					// 	if(jkzkArr[i].value == this.obj.jkzk){
					// 		 var jkzk=jkzkArr[i].code
					// 		 console.log(jkzk);
					// 	}
					// }
					// for(var i=0;i < xxArr.length;i++){
					// 	if(xxArr[i].value == this.obj.xx){
					// 		 var xx=xxArr[i].code
					// 		 console.log(xx);
					// 	}
					// }
					// this.errorMessage = "保存成功"
					// this.FisShow=!this.FisShow
					// setTimeout(()=>{
					// 	this.FisShow = !this.FisShow
					// },1000)
					var savewsxxPage3 = `{"xmpy":"${this.xmpy}","cym":"${this.cym}","sg":"${this.sg}","tz":"${this.tz}","tc":"${this.tc}","jkzk":"${this.obj.jkzk}","hkxz":"${this.obj.hkxz}","xx":"${this.obj.xx}","hyzk":"${this.obj.hyzk}","zjxy":"${this.obj.zjxy}","drbgb":"${this.drbgb}","jtjg":"${this.obj.jtjg}","ccqj":"${this.obj.ccqj}","sfpkx":"${this.obj.sfpkx}"}`
					//this.$store.commit("savewsxxPage3",savewsxxPage3)
					//发射事件表明已成功
					console.log("ccc")
					this.toParent = true
					this.$emit("childData",{zt:this.toParent,value:savewsxxPage3})
				}else{
					//信息验证失败，返回给父组件false状态
					if(this.obj.sfpkx =='请选择' || this.obj.sfpkx==''){
						this.errorMessage = "请选择是否贫困县"
					}
					if(this.obj.ccqj =='请选择' || this.obj.ccqj==''){
						this.errorMessage = "请选择乘车区间"
					}
					if(this.obj.jtjg =='请选择' || this.obj.jtjg==''){
						this.errorMessage = "请选择家庭结构"
					}
					if(this.drbgb == ''){
						this.errorMessage = "担任班干部不能为空"
					}
					if(this.obj.zjxy =='请选择' || this.obj.zjxy==''){
						this.errorMessage = "请选择宗教信仰"
					}
					if(this.obj.hyzk =='请选择' || this.obj.hyzk==''){
						this.errorMessage = "请选择婚姻状况"
					}
					if(this.obj.xx =='请选择' || this.obj.xx==''){
						this.errorMessage = "请选择血型"
					}
					if(this.obj.hkxz =='请选择' || this.obj.hkxz==''){
						this.errorMessage = "请选择户口性质"
					}
					if(this.obj.jkzk =='请选择' || this.obj.jkzk==''){
						this.errorMessage = "请选择健康状况"
					}
					if(this.tc == ''){
						this.errorMessage = "特长不能为空"
					}
					if(parseInt(this.tz) >= 300||parseInt(this.tz) <= 20 || this.tz ==''){
						this.errorMessage = "体重单位是kg，且输入值应当大于20小于300"
					}
					if(parseInt(this.sg) >= 250||parseInt(this.sg) <= 100 || this.sg ==''){
					this.errorMessage = "身高单位是cm，且输入值应当大于100小于250"
					}
					if(this.cym == ''){
						this.errorMessage = "曾用名不能为空"
					}
					if(this.xmpy == ''){
						this.errorMessage = "姓名拼音不能为空"
					}
					if(this.errorMessage != ''){
						this.FisShow=!this.FisShow
						setTimeout(()=>{
							this.FisShow = !this.FisShow
						},1000)
					}
					this.toParent = false
					this.$emit("childData",{zt:this.toParent,value:""})
				}
			},
			// startValue(val){
			// 	val.substring(0,4)
			// 	var n = val.split('年');
			// 	var y = n[1].split('月');
			// 	var r = y[1].split('日');
			// 	if(y[0].toString().length==1){
			// 		y[0] = '0'+y[0]
			// 	}	
			// 	if(r[0].toString().length==1){
			// 		r[0] = '0'+r[0]
			// 	}
			// 	this.startFormatTime = n[0] + y[0] + r[0]
			// },
			// overValue(val){
			// 	val.substring(0,4)
			// 	var n = val.split('年');
			// 	var y = n[1].split('月');
			// 	var r = y[1].split('日');
			// 	if(y[0].toString().length==1){
			// 		y[0] = '0'+y[0]
			// 	}	
			// 	if(r[0].toString().length==1){
			// 		r[0] = '0'+r[0]
			// 	}
			// 	this.overFormatTime = n[0] + y[0] + r[0]
			// }
		},
		created(){
				var data = this.getSavedData
				//封装一个函数Formattime将13位的时间戳转化为如“2018年6月28日”这样的字符串格式
				function Formattime(num){
					//时间戳转化为Date对象
					var date = new Date(num)
					return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+'日'
				}
				//将已有的数据展示出来
				// if(data.kssj == "请选择"||data.kssj == undefined){
				// 	this.startValue = "请选择"
				// }else this.startValue = Formattime(data.kssj)
				// if(data.jssj == "请选择" || data.jssj == undefined){
				// 	this.overValue = "请选择"
				// }else this.overValue = Formattime(data.jssj)
				//console.log(this.startValue)
				this.cym = data.cym?data.cym:''
				this.xmpy = data.xmpy?data.xmpy:''
				this.sg = data.sg?data.sg:''
				this.tz = data.tz?data.tz:''
				this.tc = data.tc?data.tc:''
				this.obj.jkzk = data.jkzk?data.jkzk:'请选择'
				this.obj.hkxz = data.hkxz?data.hkxz:'请选择'
				this.obj.xx = data.xx?data.xx:'请选择'
				this.obj.hyzk = data.hyzk?data.hyzk:'请选择'
				this.obj.zjxy = data.zjxy?data.zjxy:'请选择'
				this.drbgb = data.drbgb?data.drbgb:''
				this.obj.jtjg = data.jtjg?data.jtjg:'请选择'
				this.obj.ccqj = data.ccqj?data.ccqj:'请选择'
				this.obj.sfpkx = data.sfpkx?data.sfpkx:'请选择'
		},
		activated(){
			if(false){
				var data = this.getSavedData
				//封装一个函数Formattime将13位的时间戳转化为如“2018年6月28日”这样的字符串格式
				function Formattime(num){
					//时间戳转化为Date对象
					var date = new Date(num)
					return date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+'日'
				}
				//将已有的数据展示出来
				// if(data.kssj == "请选择"||data.kssj == undefined){
				// 	this.startValue = "请选择"
				// }else this.startValue = Formattime(data.kssj)
				// if(data.jssj == "请选择" || data.jssj == undefined){
				// 	this.overValue = "请选择"
				// }else this.overValue = Formattime(data.jssj)
				//console.log(this.startValue)
				this.cym = data.cym?data.cym:''
				this.xmpy = data.xmpy?data.xmpy:''
				this.sg = data.sg?data.sg:''
				this.tz = data.tz?data.tz:''
				this.tc = data.tc?data.tc:''
				this.obj.jkzk = data.jkzk?data.jkzk:'请选择'
				this.obj.hkxz = data.hkxz?data.hkxz:'请选择'
				this.obj.xx = data.xx?data.xx:'请选择'
				this.obj.hyzk = data.hyzk?data.hyzk:'请选择'
				this.obj.zjxy = data.zjxy?data.zjxy:'请选择'
				this.drbgb = data.drbgb?data.drbgb:''
				this.obj.jtjg = data.jtjg?data.jtjg:'请选择'
				this.obj.ccqj = data.ccqj?data.ccqj:'请选择'
				this.obj.sfpkx = data.sfpkx?data.sfpkx:'请选择'
				this.$store.commit("changeTable",false)
			}
		}	
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	.cdxx //曾读学校
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
			p:nth-of-type(9)
				span:nth-child(1)
					width:1rem
				input
					width:calc(100% - 1.19rem)
			p:nth-of-type(6),p:nth-of-type(7),p:nth-of-type(8),p:nth-of-type(9),p:nth-of-type(10),p:nth-of-type(12),p:nth-of-type(13),p:nth-of-type(14)
				background:url(/yxxt/static/student-index-pictures/more-hui@2x.png) right center no-repeat 
				span:last-child
					font-size:0.14rem
					font-family:PingFang-SC-Medium
					color:#333
					margin-right:0.15rem
					background:none
					width:auto
					height:auto	
			p:nth-of-type(11)
				span:nth-child(1)
					width:.97rem
				input
					width:calc(100% - 1.16rem)
		// .del
		// 	display:flex
		// 	height:0.51rem
		// 	justify-content:center
		// 	align-items:center
		// 	background:#fff
		// 	margin-bottom:.1rem
		// 	border-top:.03rem solid #f7f7f7
		// 	span
		// 		padding-left:0.2rem	
		// 		font-size:0.14rem
		// 		font-family:PingFang-SC-Medium
		// 		color:#408EDB	
		// 		background:url(/yxxt/static/student-index-pictures/del.png) no-repeat
		// 		background-size: .14rem;
		// 		line-height:0.15rem
		// 		height:0.15rem
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
</style>