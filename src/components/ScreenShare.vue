<template>
  <div class="screen-share">
    <div class="share-header">
      <el-icon><Refresh/></el-icon>
    </div>
    <div class="share-list">
      <el-table :data="shareLists" style="width: 100%" max-height="250">
        <el-table-column prop="id" label="分享记录" mix-width="80" />
        <el-table-column prop="screenName" label="大屏名称" mix-width="120" />
        <el-table-column prop="screenAddress" label="大屏url" mix-width="180" />
        <el-table-column prop="shareTime" label="分享时间" mix-width="150" />
        <el-table-column prop="expireTime" label="过期时间" mix-width="150" />
        <el-table-column fixed="right" label="操作" mix-width="120">
          <template #default="scope">
            <el-button
              link
              type="danger"
              size="small"
              @click.prevent="deleteRow(scope.$index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { Refresh } from '@element-plus/icons-vue'
export default {
  name: 'ScreenShare',
  components: { Refresh },
  data () {
    return {
      Refresh,
      shareLists: [
        {
          id: 1,
          screenName: '智慧联动',
          screenAddress: 'http://lwl645123.com',
          shareTime: '2003-04-06',
          expireTime: '2003-04-09'
        },
        {
          id: 2,
          screenName: '智慧联动',
          screenAddress: 'http://lwl645123.com',
          shareTime: '2003-04-06',
          expireTime: '2003-04-09'
        },
        {
          id: 3,
          screenName: '智慧联动',
          screenAddress: 'http://lwl645123.com',
          shareTime: '2003-04-06',
          expireTime: '2003-04-09'
        },
        {
          id: 4,
          screenName: '智慧联动',
          screenAddress: 'http://lwl645123.com',
          shareTime: '2003-04-06',
          expireTime: '2003-04-09'
        },
        {
          id: 5,
          screenName: '智慧联动',
          screenAddress: 'http://lwl645123.com',
          shareTime: '2003-04-06',
          expireTime: '2003-04-09'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.share-header {
  height: 32px;
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
