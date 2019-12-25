<template>
  <div class="about">
    <headerMin :title="title" />
    <div id="printTest">
      <p>明月照于山间1</p>

      <p>清风来于江上</p>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import headerMin from "../header";
export default {
  name: "problemList",
  data() {
    return {
      title: {name:"内容",showLeft:true}
    };
  },
  components: {
    headerMin
  },
  methods: {
  }
};
</script>

