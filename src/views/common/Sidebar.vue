<template>
  <div class="sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      router
      :default-active="activeIndex"
    >
      <template v-for="navigation in navigations">
        <template v-if="navigation.sublist">
          <el-sub-menu :index="navigation.index" :key="navigation.index">
            <template #title>
              <span>{{ navigation.title}}</span>
            </template>
            <template v-for="subItem in navigation.sublist" :key="subItem.index">
              <el-menu-item :index="subItem.index" :route="subItem.route">{{subItem.title}}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="navigation.index" :key="navigation.index">
            <span>{{ navigation.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      navigations: [
        {
          icon: 'fa-solid fa-hotel',
          index: 'screen',
          title: '大屏列表',
          sublist: [
            {
              index: 'type1',
              title: '业务分析大屏',
              route: { name: 'screen', query: { type: 1 } }
            },
            {
              index: 'type2',
              title: '交通物流大屏',
              route: { name: 'screen', query: { type: 2 } }
            },
            {
              index: 'type3',
              title: '数据监控大屏',
              route: { name: 'screen', query: { type: 3 } }
            },
            {
              index: 'type4',
              title: '综合展示大屏',
              route: { name: 'screen', query: { type: 4 } }
            }
          ]
        },
        {
          icon: 'fa-solid fa-house-user',
          index: 'share',
          title: '我的分享'
        }
      ],
    }
  },
  methods: {

  },
  computed: {
    activeIndex () {
      return 'type' + String(this.$route.query.type)
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: absolute;
  top: 82px;
  left: 0;
  bottom: 0;
  width: 199px;
  border-right: solid 1px #dcdfe6;
  padding: 0 30px;
}

.el-menu {
  border-right: initial;
}
</style>
