<template>
	<div class="two">
		<span>{{string}}</span>
		<button @click.default.stop="oa">add</button>
    <ul>
      <li v-for="(item,index) in arr" :key='index' >
        {{item}}
      </li>
    </ul>
		<router-link to="/page4">
			<div class="mt50 ">下一页</div>
		</router-link>
    <div class="mt40" @click="$router.go(-1)">上一页</div>
	</div>
</template>

<script type="text/javascript">
let n = 0;
import {MessageBox} from 'mint-ui'
export default {
  name: "two",
  data() {
    return {
      arr: [1],
      addValue:3
    };
  },
  watch:{
	  'route'(to,from,next){
		  if(to.path=='/home'&&from.path=='/next'){
			  console.log("aaaa"); 
		  }
	  }
  },
  methods: {
    oa() {
    //   this.string = n
    //   n++
        MessageBox({
        title: '您是否确认办理',
        message: '一旦确认无法更改',
        showConfirmButton: true,
        showCancelButton:true,
        confirmButtonClass: 'yxxt-btn'
      }).then(() => {
        // alert(1)
        // this.$set(this.arr,0,0)
        this.arr.splice(this.arr,this.arr.length-1,this.addValue)
      }).catch(() => {
        alert("error")
      })  
    //   function fan(a, b) {
    //     console.log(a);
    //     console.log(b);
    //     function b() {
    //       console.log("b");
    //     }
    //     b();
    //   }
      // ((a) => fan([1,2,3,4],a))()
    //   console.log((a => fan([1, 2, 3, 4], a))());
    }
  },
  computed:{
      string(){
          return this.$store.state.pageTitle
      }
  },
  created(){
    console.log("created")
  },
  mounted(){
    this.$nextTick(() => {
      console.log("aaa")
    })
  }
}
</script>

<style type="text/css" scoped>
</style>