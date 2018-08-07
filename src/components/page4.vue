<template>
	<div class="two">
		<span>{{string}}</span>
		<button @click.default.stop="oa">add</button>
		<router-link to="/home">
			<div class="mt50 ">回到首页</div>
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
      string: "lero",
    };
  },
  watch:{
	  $route(to,from,next){
		  if(to.path=='/home'&&from.path=='/next'){
			  console.log("aaaa"); 
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
      }).catch(() => {
        alert("error")
      })
    }
  },
  created(){
	console.log("created")
  }
};
</script>

<style type="text/css" scoped></style>