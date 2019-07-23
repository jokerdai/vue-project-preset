<template>
  <div style="padding-bottom: 12px;">
    <Download
      ref="asyncDownloadRef"
      :checkUrl="downloadCheckUrl"
      :downloadUrl="downloadUrl"
      @on-download="handleDownload"
    ></Download>
    <Button type="primary" @click="handleAdd" style="margin-left: 5px;">{{
      $t('page1.add')
    }}</Button>
    <Button type="primary" @click="handleDelete" style="margin-left: 5px;">{{
      $t('page1.delete')
    }}</Button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Download from '@/components/Download'
export default {
  components: {
    Download
  },
  data() {
    return {
      downloadCheckUrl: '/download/check',
      downloadUrl: '/download'
    }
  },
  computed: {
    ...mapState({
      tableSelVals: state => state.demo.tableSelVals
    })
  },
  methods: {
    handleDownload() {},
    handleAdd() {
      this.$store.commit('demo/setModal1', true)
    },
    handleDelete() {
      if (this.tableSelVals.length > 0) {
        this.$store.dispatch('demo/delete', this.tableSelVals).then(res => {
          if (res.data.success) {
            this.$Message.success(this.$t('page1.deleteSuccess'))
            this.handleQuery()
          }
        })
      } else {
        this.$Message.warning(this.$t('page1.deleteWarn'))
      }
    }
  }
}
</script>
