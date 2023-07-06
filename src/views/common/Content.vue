<template>
  <div class="content">
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  top: 82px;
  right: 0;
  bottom: 0;
  left: 260px;
  padding: 10px 20px;
}

:deep(.el-input) {
  margin-right: 10px;
  width: 300px;
}

.search-icon {
  cursor: pointer;
  font-size: 16px;

  &:hover {

  }
}
</style>
