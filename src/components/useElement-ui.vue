<template>
	<div class="elementUI">
		<el-table
      :data="tableData5"
      style = "width:1000px"
      width = "100%"
      border
      height = "500"
      :row-class-name = "setclass"
      >
      <el-table-column
        prop="date"
        label="日期"
        width="100"
        fixed = "left"
        align="center">
        <template slot-scope="data">
          <i class="el-icon-more"></i>
          <span>{{data.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="100"
        align="center"
        >
        <template slot-scope="scop" >
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scop.row.name }}</p>
            <p>住址: {{ scop.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scop.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        type = "expand"
        label = "悍马"
        prop = "name"
        >
        <template slot-scope="oop">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item>
              <span>{{oop.row.id}}</span>
            </el-form-item>
            <el-form-item>
              <span>{{oop.row.name}}</span>
            </el-form-item>
            <el-form-item>
              <span>{{oop.row.category}}</span>
            </el-form-item>
            <el-form-item>
              <span>{{oop.row.desc}}</span>
            </el-form-item>
            <el-form-item>
              <span>{{oop.row.address}}</span>
            </el-form-item>
            <el-form-item>
              <span>{{oop.row.shop}}</span>
            </el-form-item>
             <el-form-item>
              <span>{{oop.row.shopId}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        prop="shop"
        label="籍贯"
        width="300"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300"
        align="center">
      </el-table-column>
    </el-table>
	</div>
</template>

<script type="text/javascript">
import {MessageBox} from 'mint-ui'
export default {
  name: "elementUI",
  data() {
    return {
      tableData:[{
          date:'lengend',
          name:'张某某',
          address:'嵩山大道'
        },{
          date:'lengend',
          name:'张某某',
          address:'嵩山大道'
        },{
          date:'lengend',
          name:'张某某',
          address:'嵩山大道'
        },{
          date:'lengend',
          name:'张某某',
          address:'嵩山大道'
        },{
          date:'lengend',
          name:'张某某',
          address:'嵩山大道'
        },{
          date:'lengend',
          name:'张某某',
          address:'嵩山大道'
        },{
          date:'lengend',
          name:'张某某',
          address:'嵩山大道'
        },{
          date:'lengend',
          name:'张某某',
          address:'嵩山大道'
        }
        ],
      tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
    }
  },
  watch:{
	  'route'(to,from,next){
		  if(to.path=='/home'&&from.path=='/next'){
			  console.log("aaaa");
		  }
	  }
  },
  methods: {
    setclass({row,rowIndx}){
      console.log(rowIndx,row)
      if(rowIndx == 1){
        return 'success-row'
      }
      return ''
    },
    // tableRowClassName({row, rowIndex}) {
    //   console.log(row,rowIndex)
    //     if (rowIndex === 1) {
    //       return 'warning-row';
    //     } else if (rowIndex=== 3) {
    //       return 'success-row';
    //     }
    //     return '';
    // },
  },
  computed:{
  },
  created(){
  },
  mounted(){
  }
}
</script>

<style type="text/css" scoped>
.elementUI
  width:100%
  el-table
    .success-row
      /*background:red*/
</style>