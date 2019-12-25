<template>
  <div class="login">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
      />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
     <van-button type="warning" @click="logIn">登陆</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import { Field } from "vant";
import { Toast } from 'vant';
Vue.use(Field);
export default {
  name: "login",
  //   components: { roleChoices },
  data() {
    return {
      username: "",
      password: "",
      value: "",
      showKeyboard: true
    };
  },

  mounted() {},
  methods: {
      logIn(){
          Toast.loading({
            duration: 2000, // 持续展示 toast
            forbidClick: true,
            message: "加载中"
          });
          setTimeout(()=>{
               this.$router.push({name:'home'})
          },2000)
      }
  }
};
</script>

<style lang="less" scoped>
</style>