<template>
  <div class="header">
    <div class="header-left">
      <h2>Max Studio 管理服务</h2>
    </div>
    <div class="header-right">
      <el-avatar></el-avatar>
      <h2>t-rex</h2>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  data () {
    return {

    }
  },
  methods: {
  }
})
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 12px;
}

.header-left{
  width: 30%;
  height: 100%;
  margin-left: 200px;
}

.header-right {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin-left: 20px;
  }
}

</style>
