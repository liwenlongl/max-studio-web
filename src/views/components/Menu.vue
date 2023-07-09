<template>
  <div class="Menu">
    <template v-for="navigation in navigations">
      <el-sub-menu
        v-if="navigation.hasOwnProperty('children')&&navigation.children!=null"
        :key="navigation.id" :index="navigation.id"
      >
        <template #title>
          <div @contextmenu="contextMenu($event, navigation)" style="width: 100%">{{ navigation.name}}</div>
        </template>
        <Menu :navigations="navigation.children" />
      </el-sub-menu>
      <el-menu-item
        v-else :index="navigation.id" :key="navigation.id"
        :route="'screen?type='+navigation.id"
        @contextmenu="contextMenu($event, navigation)"
      >{{navigation.name}}</el-menu-item>
    </template>
    <catalog-add v-model:catalog-add-show="catalogAddShow" :pid="pid" />
    <catalog-update v-model:catalog-update-show="catalogUpdateShow" :id="id" />
  </div>
</template>

<script>
import { catalogDelete } from '@/request/api'
import { ElMessage } from 'element-plus'
import CatalogAdd from '@/components/dialog/CatalogAdd.vue'
import CatalogUpdate from '@/components/dialog/CatalogUpdate.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu',
  props: {
    navigations: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      catalogAddShow: false,
      catalogUpdateShow: false,
      pid: null,
      id: null
    }
  },
  components: {
    CatalogAdd,
    CatalogUpdate
  },
  methods: {
    contextMenu (event, navigation) {
      event.preventDefault()
      this.$contextmenu({
        x: event.x,
        y: event.y,
        items: [
          {
            label: '重名名',
            onClick: () => {
              this.id = navigation.id
              this.catalogUpdateShow = true
            }
          },
          {
            label: '新建目录',
            onClick: () => {
              this.pid = navigation.parentId
              this.catalogAddShow = true
            }
          },
          {
            label: '删除目录',
            onClick: () => {
              catalogDelete(navigation.id).then(() => {
                this.$store.commit('set_catalogRefresh')
                ElMessage.success('目录删除成功')
              }).catch(() => {
                ElMessage.error('目录删除失败')
              }) // 调用接口删除目录
            }
          },
          {
            label: '新建子目录',
            onClick: () => {
              console.log(navigation)
              this.pid = navigation.id
              this.catalogAddShow = true
            }
          }
        ]
      })
    }
  }
})
</script>
