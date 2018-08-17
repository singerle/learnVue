<template>
    <div>
        <p>子组件插件</p>
        <slot :childdata="testData" v-for="i in testData">{{i}}</slot>
    </div>
</template>

<script>
export default {
    name:"child",
    data(){
        return {
        testData:["slot使用1","slot使用2","slot使用3","slot使用4"]
        }
    }
}
</script>

<style>

</style>

