<template>
  <div class="large-screen">
    <div class="edit-bar">
      <!-- 全局搜索文件 -->
      <el-input
        v-model="searchContent"
        placeholder="请输入大屏名称"
        maxlength="200"
        :clearable="true"
      >
        <template #append>
          <el-button :icon="Search"></el-button>
        </template>
      </el-input>
      <el-button type="primary" plain :icon="Plus" @click="screenAdd">添加</el-button>
    </div>
    <div class="screen-list">
      <el-card v-for="screen in screenLists" :key="screen.id"  @contextmenu="contextMenu($event, screen)">
        <img src="@/assets/image/homepage/charts.jpg">
        <div class="bg-info">
          <header>{{ screen.screenName }}</header>
          <footer>
            <span>{{ screen.currentStatus }}</span>
            <div class="operation">
              <el-button :icon="View" type="text" @click="pageJump(screen.accessAddress)"></el-button>
              <el-button :icon="Share" type="text" @click="shareAdd"></el-button>
              <el-button :icon="Edit" type="text" @click="screenUpdate(screen.id)"></el-button>
            </div>
          </footer>
        </div>
        <div class="bg-create">
          <div><span>制作人：{{ screen.creator }}</span></div>
          <div><span>时间： {{ screen.createTime }}</span></div>
        </div>
      </el-card>
    </div>
    <div class="paging">
      <el-pagination layout="prev, pager, next" background :total="pageNumber * 10" />
    </div>
    <ShareDialog v-model:share-dialog-show="shareDialogShow" :share-form="shareForm"/>
    <ScreenAdd v-model:screen-add-show="screenAddShow" :catalog-id="catalogId" :screen-list="getScreenList"/>
    <ScreenUpdate v-model:screen-update-show="screenUpdateShow" :id="id" :screen-list="getScreenList"/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Plus, View, Share, Edit } from '@element-plus/icons-vue'
import ShareDialog from '@/components/dialog/ShareDialog.vue'
import ScreenAdd from '@/components/dialog/ScreenAdd.vue'
import ScreenUpdate from '@/components/dialog/ScreenUpdate.vue'
import { screenList, screenDelete, screenAdd, screenUpdate } from '@/request/api'
import useClipboard from 'vue-clipboard3'

export default defineComponent({
  name: 'LargeScreen',
  data () {
    return {
      Search,
      Plus,
      View,
      Share,
      Edit,
      searchContent: '',
      pageNumber: 10,
      shareDialogShow: false,
      screenAddShow: false,
      screenUpdateShow: false,
      catalogId: null,
      id: null,
      shareForm: {
        screenId: '',
        screenName: '',
        screenAddress: ''
      },
      screenLists: []
    }
  },
  components: {
    ScreenUpdate,
    ShareDialog,
    ScreenAdd
  },
  watch: {
    $route () {
      this.getScreenList()
    }
  },
  methods: {
    contextMenu: function (e, screen) {
      console.log(screen)
      e.preventDefault()
      this.$contextmenu({
        x: e.x,
        y: e.y,
        items: [
          {
            label: '重名名',
            onClick: () => {

            }
          },
          {
            label: '复制url',
            onClick: () => {
              const { toClipboard } = useClipboard()
              const copy = async (Msg) => {
                try {
                  await toClipboard(Msg)
                  console.log(Msg)
                } catch (e) {
                  console.error(e)
                }
              }
              copy(screen.accessAddress)
              ElMessage.success('复制成功')
            }
          },
          {
            label: '配置项',
            onClick: () => {
              alert('正在删除')
            }
          },
          {
            label: '删除',
            onClick: () => {
              console.log(screen)
              screenDelete(screen.id).then(() => {
                ElMessage.success('删除成功')
                this.getScreenList()
              }).catch(() => {
                ElMessage.error('删除失败')
              })
            }
          }
        ]
      })
    },
    getScreenList () {
      const catalogId = this.$route.query.type
      screenList(catalogId).then((res) => {
        console.log(res)
        this.screenLists = res.data
        console.log(this.screenLists)
      })
    },
    pageJump (url) {
      window.open(url)
    },
    shareAdd (screen) {
      this.shareForm.screenId = screen.screenId
      this.shareForm.screenName = screen.screenName
      this.shareAdd.screenAddress = screen.screenAddress
      this.shareDialogShow = true
    },
    screenAdd () {
      this.catalogId = this.$route.query.type // 当前路由的请求参数就是大屏的目录id
      this.screenAddShow = true
    },
    screenUpdate (id) {
      this.id = id
      this.screenUpdateShow = true
    }
  },
  created () {
    this.getScreenList()
  }
})
</script>

<style scoped lang="scss">
.edit-bar {
  margin-bottom: 20px;

  .el-button {
    float: right;
  }
}

.screen-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .el-card {
    width: 400px;
    height: 200px;
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    border: 12px solid white;
  }
}

:deep(.el-card__body) {
  padding: 10px;
  width: 380px;
  height: 180px;
}

.screen-list img {
  width: 100%;
  height: 160px;
  filter: blur(1px);
  border-radius: 4px;
  z-index: 2;
}

.bg-info {
  width: 380px;
  height: 160px;
  position: absolute;
  color: #fff;
  left: 10px;
  top: 10px;
  z-index: 3;
}

header {
  padding: 20px 0;
  font-size: 24px;
  text-align: center;
}

footer {
  width: calc(100% - 40px);
  padding: 0 20px;
  position: absolute;
  z-index: 3;
  bottom: 10px;
  font-size: 14px;
}

.operation {
  float: right;
  .el-button {
    color: #fff;
    font-size: 16px;
    margin-left: 12px;

    &:hover {
      color: #79bbff;
    }
    &:active {
      color: #79bbff;
    }
  }
}

.bg-create {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
}

.paging {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
