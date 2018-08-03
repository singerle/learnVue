<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <h2>Essential Links</h2> -->
    <mt-field label="用户名" placeholder="请输入用户名"  v-model="username"  @input="num" @compositionstart="start" @compositionend="end"></mt-field>
    <ul>
      <li v-for="(item,index) in arr" :key="item+index">{{item}}------{{index}}</li>
    </ul>
    <mt-button type="danger" size="small" @click="clickadd">{{saveA}}</mt-button>
    <mt-field label="密码" placeholder="输入密码" :value="computedNum"></mt-field>
    <div>{{arr+"a"}}</div>
    <button @click="$router.push('/next')">下一页</button>
  </div>
</template>

<script>
// import {MessageBox}  from 'mint-ui'
var flag = true
export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      v:2,
      // mx:5,
      username:'',
      arr:["11111","2222","33333"],
      addNum:0,
    }
  },
  beforeDestroy(){
    console.log("destroy");
    this.$messagebox.close();
  },
  mounted(){
    console.log("mounted");
  },
  computed:{
    saveA(){
      return this.arr[this.arr.length-1]
    },
    computedNum(){
      return this.arr[this.arr.length-1]
    }
    // username(){
    //   console.log('test');
    //   console.log();
      // console.log(value.replace(/[\u0391-\uFFE5]/g,"aa").length);
      // console.log(value.replace(/[\u0391-\uFFE5]/g,"aa").length>=4);
      // console.log(value);
      // var _value = value.replace(/[^\x00-\xff]/g, "xx").length //
      // console.log(_value<=4);
      // if(_value<=4){
      //   value = value
      //   this.v = value
      //   // this.$refs.zhi.value = value
      //   console.log(this.v);
      // }
      // else{
      //   // value = value.substring(0,4)
      //   console.log(this.v);
      //   this.username = this.v
      //   this.$set(this.username,)
      //   // this.$refs.zhi.value = this.v
      //   console.log(this.username);
      // }
      // if(value.replace(/[\u0391-\uFFE5]/g,"aa").length>=4){
      //   console.log(this.username);
      //   var v = _value.substring(0,4)
      //   console.log(value.replace(/[\u0391-\uFFE5]/g,"aa").substring(0,4));
      //   // this.username = value.replace(/[\u0391-\uFFE5]/g,"aa").substring(0,4)
      //   this.username = _value
      //   this.username = v
      //   console.log(this.username);
      // }
    // }
    // val(){
    //   console.log('test');
    // }
  },
  watch:{
    username(){
      // console.log("qqqq");
      // console.log(this.username);
    },
    $route(to,from,next){
      alert(1)
      if(from.path=='/home'){
        alert(0)
        console.log(this.a);
        if(this.$messagebox){
          console.log(this.$messagebox)
          this.$messagebox.close()
        }
      }
    }
  },
  methods:{
    start(){
      flag = false
      console.log('start');
    },
    clickadd(){
      this.$set(this.arr,this.arr.length,this.addNum)
      this.addNum++
      // console.log(this);
      // console.log(this.prototype);
      this.$messagebox({
          title: '您是否确认办理',
          message: '一旦确认无法更改',
          showConfirmButton: true,
          showCancelButton:true,
          confirmButtonClass: 'yxxt-btn'
        }).then(() => {
          // alert(1)
          // this.$set(this.arr,0,0)
          // this.arr.splice(0,3,"22")
        }).catch(() => {
          alert("error")
        })
    },
    end(){
      flag = true
      console.log('end');
    },
    num(val){
      // this.mx = 4
      // console.log('input');
      if(val.replace(/[^\x00-\xff]/g, "xx").length>8){
        console.log(val.length)
        this.$nextTick(() => {
        this.username = val.substring(0,val.length-1)
        this.num(this.username)
        })
        // this.username = val.substring(0,val.length-1)
        // num()
      }else{
        return false
      }
      // setTimeout(() => {
      //   console.log('timeout');
      //   if(flag){
      //     if(val.replace(/[^\x00-\xff]/g, "xx").length>4){
      //       if(val.match(/[^\x00-\xff]/ig) != null){
      //         // if(val.match(/[^\x00-\xff]/ig).length<=2){
      //           // this.mx = 4 - val.match(/[^\x00-\xff]/ig).length
      //           this.$nextTick(() => {
      //             // this.username = val.substring(0,4)
      //             if(this.v)
      //             this.username = val.substring(0,4 - this.v)
      //           })  
      //       }else{
      //         this.$nextTick(() => {
      //           this.username = val.substring(0,4)
      //         })
      //       }
      //     }else{
      //       this.$nextTick(() => {
      //          if(val.match(/[^\x00-\xff]/ig) != null){
      //         // this.v = val.match(/[^\x00-\xff]/ig).length
      //        }
      //       })
      //        // if(val.match(/[^\x00-\xff]/ig) != null){
      //        //  this.v = val.match(/[^\x00-\xff]/ig).length
      //        // }
      //     }
      //   }
      // },0)
      // var flag = true;
        // $('#txt').on('compositionstart',function(){
        //     flag = false;
        // })
        // $('#txt').on('compositionend',function(){
        //     flag = true;
        // })
      // if(val.replace(/[^\x00-\xff]/g, "xx").length>4){
      //   if(val.match(/[^\x00-\xff]/ig) != null){
      //     // if(val.match(/[^\x00-\xff]/ig).length<=2){
      //       // this.mx = 4 - val.match(/[^\x00-\xff]/ig).length
      //       this.$nextTick(() => {
      //         this.username = val.substring(0,4)
      //         this.username = val.substring(0,4 - val.match(/[^\x00-\xff]/ig).length)
      //       })
            
      //     }else{
      //       this.$nextTick(() => {
      //         this.username = val.substring(0,4)
      //       })
      //     }
          // console.log(val.length,val.match(/[^\x00-\xff]/ig).length)
          // if(val.length == val.match(/[^\x00-\xff]/ig).length){
          //   this.mx =  val.length
          // }else{
            
          // }

          // console.log(val.match(/[^\x00-\xff]/ig).length)
          // if(4 - val.match(/[^\x00-\xff]/ig).length >= 0){
          //   this.mx = 4 - val.match(/[^\x00-\xff]/ig).length
          // }
      // }
    },
    // val(value){
      // console.log('test');
      // console.log(value);
      // console.log(value.replace(/[\u0391-\uFFE5]/g,"aa").length);
      // console.log(value.replace(/[\u0391-\uFFE5]/g,"aa").length>=4);
      // var _value = value.replace(/[^\x00-\xff]/g, "xx").length
      // console.log(_value<=4);
      // if(_value>4){
        // value = value
        // this.v = value
        // this.username = this.v
        // this.username = ''
        // this.$nextTick(() => {
        //   this.username = value.substring(0,value.length)
        // })
        // this.$refs.zhi.value = value
        // console.log(this.v);
        // console.log(this.username);
      // }
      // else{
      //   // value = value.substring(0,4)
      //   console.log(this.v);
      //   this.username = this.v
      //   // this.$set(this.username,)
      //   // this.$refs.zhi.value = this.v
      //   console.log(this.username);
      // }
      // if(value.replace(/[\u0391-\uFFE5]/g,"aa").length>=4){
      //   console.log(this.username);
      //   var v = _value.substring(0,4)
      //   console.log(value.replace(/[\u0391-\uFFE5]/g,"aa").substring(0,4));
      //   // this.username = value.replace(/[\u0391-\uFFE5]/g,"aa").substring(0,4)
      //   this.username = _value
      //   this.username = v
      //   console.log(this.username);
      // }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
