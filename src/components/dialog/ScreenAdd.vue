<template>
  <div class="screen-add">
    <el-dialog
      title="大屏添加"
      width="50%"
      v-model="visible"
      @close="dialogClose">
      <el-form :model="screenForm" :rules="screenRule" ref="screenForm" label-width="100px" class="screen-form">
        <el-form-item label="大屏名称" prop="screenName">
          <el-input v-model="screenForm.screenName" maxlength="20" clearable></el-input>
        </el-form-item>
        <el-form-item label="创作者" prop="creator">
          <el-input v-model="screenForm.creator" maxlength="10" clearable></el-input>
        </el-form-item>
        <el-form-item label="大屏状态" prop="currentStatus">
          <el-select v-model="screenForm.currentStatus" placeholder="请选择大屏状态">
            <el-option label="使用中" value="1"></el-option>
            <el-option label="开发中" value="2"></el-option>
            <el-option label="测试中" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="访问地址" prop="accessAddress">
          <el-input v-model="screenForm.accessAddress" maxlength="128" clearable></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogClose">取消</el-button>
        <el-button type="primary" @click="screenAddConfirm">确认</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { screenAdd } from '@/request/api'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'ScreenAdd',
  props: {
    screenList: {
      type: Function
    },
    catalogId: {
      type: Number
    },
    screenAddShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: this.screenAddShow,
      screenForm: {
        catalogId: '',
        screenName: '',
        creator: '',
        currentStatus: '',
        accessAddress: ''
      },
      screenRule: {
        screenName: [
          {
            required: true,
            message: '请输入大屏名称'
          }
        ],
        creator: [
          {
            required: true,
            message: '请输入创作者'
          }
        ],
        currentStatus: [
          {
            required: true,
            message: '请输入大屏状态'
          }
        ],
        accessAddress: [
          {
            required: true,
            message: '请输入访问地址'
          }
        ]
      }
    }
  },
  watch: {
    screenAddShow () {
      this.visible = this.screenAddShow
      this.screenForm.catalogId = this.catalogId
    }
  },
  methods: {
    screenAddConfirm () {
      this.$refs.screenForm.validate((valid) => {
        const obj = this.screenForm
        console.log(obj)
        screenAdd(obj).then(() => {
          ElMessage.success('添加成功')
          this.screenListRefresh()
          this.dialogClose()
        }).catch(() => {
          ElMessage.error('添加失败')
        })
      })
    },
    dialogClose () {
      this.$emit('update:screenAddShow', false)
      this.$refs.screenForm.resetFields()
    },
    screenListRefresh () {
      if (this.screenList) {
        this.screenList()
      }
    }
  }
})
</script>

<style scoped>
.screen-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
