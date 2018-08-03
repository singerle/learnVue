<template>
	<div class="two">
		<span>{{string}}</span>
		<button @click.default.stop="oa">add</button>
		<router-link to="/page3">
			<div class="mt50 ">下一页</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
let n = 0;
export default {
  name: "two",
  data() {
    return {
      arr: [],
      string: "lero"
    };
  },
  watch:{
	  $route(to,from,next){
		  if(to.path=='/home'&&from.path=='/next'){
			  console.log("aaaa"); 
      }
      if(to.path=='/page3'){
        this.$store.commit('next',to.name)
      }
	  }
  },
  methods: {
    oa() {
      this.string = n
      n++
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
  created(){
	console.log("created")
  }
};
</script>

<style type="text/css" scoped></style>