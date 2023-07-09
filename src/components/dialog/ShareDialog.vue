<template>
  <el-dialog
    v-model="visible"
    title="大屏分享"
    width="50%"
    @close="dialogClose"
  >
    <el-form
      label-position="left"
      :model="ShareOpt"
      :rules="shareRule"
      ref="ShareOpt"
    >
      <el-form-item label="链接有效期至" prop="expireTime">
        <el-date-picker
          v-model="ShareOpt.expireTime"
          type="datetime"
          placeholder="请选择有效期"
        />
      </el-form-item>
      <el-form-item label="选择分享方式" prop="QRShare">
        <el-radio-group v-model="ShareOpt.QRShare">
          <el-radio :label="false" size="large" border>Url分享</el-radio>
          <el-radio :label="true" size="large" border>二维码分享</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogClose">取消</el-button>
        <el-button type="primary" @click="shareAddConfirm">确认</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShareDialog',
  props: {
    ShareForm: {
      type: Object
    },
    shareDialogShow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: false,
      ShareOpt: {
        expireTime: '',
        QRShare: false // false默认为链接分享，ture为二维码分享
      },
      shareRule: {
        expireTime: [
          {
            required: true,
            message: '请选择链接有效期'
          }
        ],
        QRShare: [
          {
            required: true,
            message: '请选择分享方式'
          }
        ]
      }
    }
  },
  watch: {
    shareDialogShow () {
      this.visible = this.shareDialogShow
    }
  },
  methods: {
    dialogClose () {
      this.$emit('update:shareDialogShow', false)
    },
    shareAddConfirm () {
      console.log('dd')
    }
  }
})
</script>

<style scoped>

</style>
