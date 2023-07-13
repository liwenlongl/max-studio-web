<template>
  <div class="share-dialog">
    <el-dialog
      v-model="visible"
      title="大屏分享"
      width="40%"
      @close="dialogClose"
    >
      <div class="qr-share" ref="qrShare">
        <VueQr ref="qrCode" :text="shareLink" :logoScale="40" size="200"/>
        <el-text class="mx-1" size="large" tag="div">请扫码进行查看</el-text>
      </div>
      <div class="right-box">
        <div class="link-share">
          <el-text class="mx-1" size="large" tag="div">链接分享</el-text>
          <el-input v-model="linkUrl" disabled placeholder="Please input">
            <template #append>
              <el-button @click="copyLink">复制</el-button>
            </template>
          </el-input>
        </div>
        <div class="edit-btn">
          <el-button type="primary" @click="qrDownload">下载二维码</el-button>
          <el-button type="primary" @click="dialogClose">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import VueQr from 'vue-qr/src/packages/vue-qr.vue'
import { Search } from '@element-plus/icons-vue'
import useClipboard from 'vue-clipboard3'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'ShareDialog',
  props: {
    shareLink: {
      type: String
    },
    shareDialogShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      Search,
      visible: false
    }
  },
  components: {
    VueQr
  },
  watch: {
    shareDialogShow () {
      this.visible = this.shareDialogShow
    }
  },
  methods: {
    copyLink () {
      const { toClipboard } = useClipboard()
      const copy = async (Msg) => {
        try {
          await toClipboard(Msg)
          console.log(Msg)
        } catch (e) {
          console.error(e)
        }
      }
      copy(this.shareLink)
      ElMessage.success('复制成功')
    },
    qrDownload () {
      const qrCode = document.querySelector('.qr-share img')
      const url = qrCode.src
      const a = document.createElement('a')
      const event = new MouseEvent('click')
      a.download = 'screenShareQR'
      a.href = url
      a.dispatchEvent(event)
    },
    dialogClose () {
      this.$emit('update:shareDialogShow', false)
    }
  },
  computed: {
    linkUrl () {
      return this.shareLink
    }
  }
})
</script>

<style scoped lang="scss">
.qr-share {
  width: 40%;
  height: 260px;
  text-align: center;
  border-right: solid 1px #dcdfe6;
}

.right-box {
  margin: 20px 20px;
  height: 220px;
  width: 60%;
  box-sizing: content-box;
  position: relative;

  .el-text {
    margin-bottom: 10px;
  }
}

.link-share {
  width: 100%;

  .el-input {
    width: 100%;
  }
}

.edit-btn {
  position: absolute;
  bottom: 0;
  right: 0;
}

// 深度元素选择器去改写对话框的body的内边距
:deep(.el-dialog__body) {
  padding: 5px 10px;
  display: flex;
}

.el-input-group__append .el-button {
  color: #fff;
  background-color: #79bbff;
  &:hover {
    color: #fff;
    background-color: #409EFF;
  }
}
</style>
