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
      <el-button type="primary" plain :icon="Plus">添加</el-button>
    </div>
    <div class="screen-list">
      <el-card v-for="screen in screenLists" :key="screen.id">
        <img src="@/assets/image/homepage/charts.jpg">
        <div class="bg-info">
          <header>{{ screen.screenName }}</header>
          <footer>
            <span>{{ screen.currentStatus }}</span>
            <div class="operation">
              <el-button :icon="View" type="text"></el-button>
              <el-button :icon="Share" type="text"></el-button>
              <el-dropdown trigger="click" placement="bottom-start">
                <el-button :icon="Edit" type="text"></el-button>
                <template v-slot:dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>重命名</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                    <el-dropdown-item>复制url</el-dropdown-item>
                    <el-dropdown-item>配置项</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
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
  </div>
</template>

<script>
import { Search, Plus, View, Share, Edit } from '@element-plus/icons-vue'

export default {
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
      screenLists: [
        {
          id: 1,
          screenId: 1001,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        },
        {
          id: 2,
          screenId: 1002,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        },
        {
          id: 3,
          screenId: 1003,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        },
        {
          id: 1,
          screenId: 1004,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        },
        {
          id: 5,
          screenId: 1005,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        },
        {
          id: 6,
          screenId: 1006,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        },
        {
          id: 7,
          screenId: 1007,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        },
        {
          id: 8,
          screenId: 1008,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        },
        {
          id: 9,
          screenId: 1009,
          screenName: '智慧联动',
          creator: 'liwenlong',
          currentStatus: '使用中',
          createTime: '2022-10-30',
          accessAddress: 'http://lwl645123ab'
        }
      ]
    }
  },
  methods: {

  }
}
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
