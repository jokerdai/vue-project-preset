<template>
  <div>
    <Table
      :height="height"
      :loading="loading"
      border
      :columns="columns"
      size="small"
      :data="tableData"
      @on-selection-change="handelTableSelect"
    ></Table>
    <Page
      :total="total"
      :current="currPage"
      :page-size="pageSize"
      :page-size-opts="pageSizeOpts"
      @on-change="changePage"
      @on-page-size-change="pageSizeChange"
      show-total
      show-sizer
      style="margin-top: 10px;"
    ></Page>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'selVals',
    event: 'on-select-table'
  },
  props: {
    selVals: Array,
    columns: {
      type: Array,
      required: true
    },
    height: {
      type: Number,
      default: 700
    },
    pageParamKey: {
      type: Object,
      default() {
        return {
          page: 'currPage',
          size: 'pageSize'
        }
      }
    },
    url: {
      type: String,
      required: true
    },
    reqMethod: {
      type: String,
      default: 'post'
    }
  },
  data() {
    return {
      queryParam: {},
      loading: false,
      tableData: [],
      currPage: 1,
      pageSize: 20,
      total: 0,
      pageSizeOpts: [10, 20, 50, 100, 200]
    }
  },
  methods: {
    queryTableData(params) {
      this.currPage = 1
      this.queryParam = params
      this.axiosData()
    },
    axiosData() {
      this.loading = true
      const params = {}
      params[this.pageParamKey.page] = this.currPage
      params[this.pageParamKey.size] = this.pageSize
      this.$axios[this.reqMethod](this.url, Object.assign(this.queryParam, params))
        .then(response => {
          const res = response.data
          if (res.success) {
            this.total = res.total
            this.tableData = res.resultData
          } else {
            this.$Message.error(res.errMsg)
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    changePage(current) {
      this.currPage = current
      this.axiosData()
    },
    pageSizeChange(pageSize) {
      if (this.pageSize !== pageSize) {
        this.pageSize = pageSize
        this.currPage = 1
        this.axiosData()
      }
    },
    handelTableSelect(selection) {
      this.$emit('on-select-table', selection)
    }
  }
}
</script>
