<template>
  <Button type="primary" icon="md-download" :loading="downloading" @click="handleDownload"
    >导出</Button
  >
</template>

<script>
export default {
  props: {
    checkUrl: {
      type: String,
      required: true
    },
    downloadUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      downloading: false
    }
  },
  methods: {
    downloadCheck(params) {
      this.downloading = true
      return new Promise((resolve, reject) => {
        this.$axios({
          method: 'post',
          url: this.checkUrl,
          data: params
        }).then(response => {
          this.downloading = false
          const res = response.data
          if (!res.success) {
            this.$Message.error({
              content: res.errMsg,
              duration: 10,
              closable: true
            })
            reject(new Error('导出失败'))
          }
          resolve()
        })
      })
    },
    download(params) {
      this.downloading = true
      return new Promise((resolve, reject) => {
        this.$axios({
          method: 'post',
          url: this.downloadUrl,
          data: params
        }).then(
          response => {
            this.downloading = false
            const res = response.data
            if (res.success) {
              this.$Message.info({
                content: '导出成功，请前往“采购任务管理”查看导出结果',
                duration: 10,
                closable: true
              })
              resolve()
            } else {
              this.$Message.error({
                content: res.errMsg,
                duration: 10,
                closable: true
              })
              reject(new Error('导出失败'))
            }
          },
          () => {
            this.downloading = false
          }
        )
      })
    },
    async asyncDownload(params) {
      // 先验证
      await this.downloadCheck(params)
      // 验证通过再下载
      await this.download(params)
    },
    handleDownload() {
      this.$emit('on-download')
    }
  }
}
</script>
