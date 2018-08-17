<template>
	<div class="two">
		<span>{{string}}</span>
		<button @click.prevent.stop="oa">add</button>
    <form action="a.html" method="get">
      <input type="submit" value="submit" @click.prevent.stop="cancel">
    </form>
		<button @click.prevent.stop="oa">add</button>
    <plugs>
      <template slot-scope="scope"></template>
    </plugs>
    <!-- <component :is="plugs"></component> -->
		<router-link to="/home">
			<div class="mt50 ">回到首页</div>
		</router-link>
    <el-table
      :data="tableData2"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/javascript">
import plugs from '@/components/common/plug'
let n = 0;
export default {
  name: "two",
  components:{plugs},
  data() {
    return {
      arr: [],
      string: "lero",
      tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
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
    cancel(){
    },
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
    },
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

<style type="text/css" scoped>
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
</style>