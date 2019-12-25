<template>
  <div class="home">
    <headerMin :title="title" />
    <img alt="Vue logo" src="../assets/logo.png" />
    <br>
    <router-link to="/about">跳转</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import headerMin from "../header";
export default {
  name: "home",
  data() {
    return {
      active:0,
      title: {name:"标题",showLef:false}
    };
  },
  components: {
    HelloWorld,
    headerMin
  }
};
</script>
