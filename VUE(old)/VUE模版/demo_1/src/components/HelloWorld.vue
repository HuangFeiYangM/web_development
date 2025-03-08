<template>
  <div class="hello">
    <h1>vue_模版语法</h1>
    <p>这个无法改变</p>
    <p>{{ msg }}</p>
    <div> {{ rawhtml }} </div>
    <div v-html="rawhtml_1"></div>
    <div v-bind:id = "d"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {// 定义data数据
    return {
      msg: 'Hello Vue!',
      rawhtml: '<h1>This is raw html</h1> "{{}}"只能输出文本',
      rawhtml_1: '<a href="https://www.baidu.com">百度</a>',
      d:114514
    }
  }
}
</script>