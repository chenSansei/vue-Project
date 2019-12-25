<template>
  <div class="hello">
    <van-row class="m-header">
      <van-col span="24">
        <span v-if="title.showLeft" @click="back"><van-icon name="arrow-left" class="m-header-icon" /></span>
        <span>{{title.name}}</span>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  name: 'home',
  props:["title"],
  methods:{
    back(){
      this.$router.back();
    }
  }
}
</script>
<style scoped>
.m-header {
  height: 50px;
  line-height: 50px;
  background: #335f86;
  color: #fff;
}

.m-header-icon {
  position: absolute;
  top: 16px;
  left: 6px;
  font-size: 18px;
}
</style>