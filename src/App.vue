<template>
  <div id="app">
    <!-- 前两个路径正确，后面两个是错误路径，显示出来的默认图片 -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <img :src="require('./assets/logo.png')"> -->
    <!-- <img :src="'logo.png'" :onerror="`this.src='${require('./assets/logo.png')}'`"> -->
    <!-- <img :src="'logo.png'" :onerror="logo"> -->
    <!-- 下面这样写无法显示图片 -->
   <!--  <img :src="'./assets/logo.png'">
    <img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike220%2C5%2C5%2C220%2C73/sign=635ae65776d98d1062d904634056d36b/9825bc315c6034a81358c82ac1134954082376e6.jpg" v-on:click.stop="lc" :error="require('./assets/logo.png')" class="urlImg">
    <img src="./assets/worldCup.jpg"> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      //urlImg:require('./assets/logo.png'),
      logo:'this.src="'+require('./assets/logo.png')+'"'
    }
  },
  methods:{
    lc(){
      console.log('test');
    },
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html
  font-size:100px
  width:100%
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: .6rem
  font-size: .16rem
.urlImg
  width: calc(100% - .3rem)
@media screen and (min-width:480px)
  body
    background-color:gray
@media screen and (min-width:580px)
  body
    background-color:yelllow
@media screen and (min-width:680px)
  body
    background-color:green
@media screen and (min-width:780px)
  body
    background-color:red
</style>
