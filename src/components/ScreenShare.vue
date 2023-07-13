<template>
  <div class="screen-share">
    <div class="share-header">
      <el-icon @click="getShareList"><Refresh/></el-icon>
    </div>
    <div class="share-list">
      <el-table :data="shareLists">
        <el-table-column prop="id" label="分享记录" mix-width="80" />
        <el-table-column prop="screenName" label="大屏名称" mix-width="120" />
        <el-table-column prop="screenAddress" label="大屏url" mix-width="180" />
        <el-table-column prop="createTime" label="分享时间" mix-width="150" />
        <el-table-column prop="expireTime" label="过期时间" mix-width="150" />
        <el-table-column fixed="right" label="操作" mix-width="120">
          <template #default="scope">
            <el-button type="danger" size="small"
              @click.prevent="deleteShareList(scope.row.id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Refresh } from '@element-plus/icons-vue'
import { shareList, shareDelete } from '@/request/api'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'ScreenShare',
  components: { Refresh },
  data () {
    return {
      Refresh,
      shareLists: []
    }
  },
  methods: {
    getShareList () {
      shareList().then((res) => {
        this.shareLists = res.data
      })
    },
    deleteShareList (id) {
      shareDelete(id).then(() => {
        ElMessage.success('删除成功')
        this.getShareList()
      }).catch(() => {
        ElMessage.error('删除失败')
      })
    }
  },
  created () {
    this.getShareList()
  }
})
</script>

<style scoped lang="scss">
.share-header {
  margin-bottom: 20px;

  .el-icon {
    float: right;
    font-size: 18px;
    margin-right: 60px;

    &:hover {
      color: #79bbff;
    }

    &:active {
      color: #79bbff;
    }
  }
}
</style>
