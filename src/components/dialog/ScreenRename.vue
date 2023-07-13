<template>
  <el-dialog
    v-model="visible"
    title="重命名"
    width="30%"
    @close="dialogClose"
  >
    <el-form
      label-position="left"
      label-width="100px"
      :model="screenForm"
      :rules="screenRule"
      ref="screenForm"
    >
      <el-form-item label="大屏名称" prop="name">
        <el-input v-model="screenForm.name" clearable maxlength="10" placeholder="请输入大屏名称"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogClose">取消</el-button>
        <el-button type="primary" @click="screenRenameConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from 'vue'
import { screenUpdate } from '@/request/api'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'screenRename',
  props: {
    id: {
      type: Number
    },
    screenList: {
      type: Function
    },
    screenRenameShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: this.screenRenameShow,
      screenForm: {
        name: ''
      },
      screenRule: {
        name: [
          {
            required: true,
            message: '请输入修改名称'
          }
        ]
      }
    }
  },
  watch: {
    screenRenameShow () {
      this.visible = this.screenRenameShow
    }
  },
  methods: {
    screenRenameConfirm () {
      this.$refs.screenForm.validate((valid) => {
        if (valid && this.id != null) {
          const obj = {
            id: this.id,
            screenName: this.screenForm.name
          }
          screenUpdate(obj).then(() => {
            this.screenList()
            ElMessage.success('修改成功')
            this.dialogClose()
          }).catch(() => {
            ElMessage.error('修改失败')
          })
        }
      })
    },
    dialogClose () {
      this.$emit('update:screenRenameShow', false)
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
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
