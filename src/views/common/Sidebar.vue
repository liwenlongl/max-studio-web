<template>
  <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      router
      :default-active="activeIndex"
    >
      <Menu :navigations="navigations" />
      <el-menu-item index="share">
        <span>我的分享</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { catalogList } from '@/request/api'
import Menu from '@/views/components/Menu.vue'

export default defineComponent({
  name: 'Sidebar',
  data () {
    return {
      navigations: []
    }
  },
  components: {
    Menu
  },
  methods: {
    getCatalogList () {
      catalogList().then((res) => {
        this.navigations = res.data
      })
    }
  },
  computed: {
    activeIndex () {
      // 记录路由信息，刷新时激活该路由对应的目录
      return String(this.$route.query.type)
    },
    isRefresh () {
      return this.$store.state.catalogRefresh
    }
  },
  watch: {
    isRefresh () {
      this.getCatalogList()
    }
  },
  created () {
    this.getCatalogList()
  }
})
</script>

<style scoped lang="scss">
.sidebar {
  position: absolute;
  top: 82px;
  left: 0;
  bottom: 0;
  width: 199px;
  border-right: solid 1px #dcdfe6;
  padding: 0 30px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-menu {
  border-right: initial;
}

</style>
