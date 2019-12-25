<template>
  <div class="hello">
    <h1 @click="get">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    async get(){
     let data={"budGetDepName":"","status":"Y","pageIndex":1,"pageSize":10}
       let names= await this.$api.http.example(data)
       console.log(names)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
