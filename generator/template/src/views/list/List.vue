<template>
  <div>
    <Table
      :height="tableHeight"
      :loading="loading"
      border
      :columns="columns"
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
import { mapState } from 'vuex'

export default {
  data() {
    return {
      tableHeight: 100,
      pageSizeOpts: [10, 20, 50, 100, 200],
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center',
          fixed: 'left'
        },
        {
          title: '名称',
          key: 'name',
          width: 150,
          fixed: 'left'
        },
        {
          title: 'EMAIL',
          key: 'mail',
          width: 200
        },
        {
          title: '配送中心',
          key: 'city',
          width: 100
        },
        {
          title: '库房',
          key: 'whName',
          ellipsis: true,
          tooltip: true,
          width: 200
        },
        {
          title: 'Gender',
          key: 'gender',
          width: 150
        },
        {
          title: 'interest',
          key: 'interest',
          ellipsis: true,
          tooltip: true,
          width: 200
        },
        {
          title: 'date',
          key: 'date',
          width: 150
        },
        {
          title: 'desc',
          key: 'desc',
          width: 150
        },
        {
          title: '一级分类',
          key: 'cate1Name',
          width: 150,
          render: (h, params) =>
            h('div', params.row.cate1Name ? `${params.row.cate1Name}[${params.row.cate1Id}]` : '')
        },
        {
          title: '二级分类',
          key: 'cate2Name',
          width: 150,
          render: (h, params) =>
            h('div', params.row.cate2Name ? `${params.row.cate2Name}[${params.row.cate2Id}]` : '')
        },
        {
          title: '三级分类',
          key: 'cate3Name',
          width: 150,
          render: (h, params) =>
            h('div', params.row.cate3Name ? `${params.row.cate3Name}[${params.row.cate3Id}]` : '')
        },
        {
          title: '操作',
          key: 'action',
          width: 140,
          align: 'center',
          fixed: 'right',
          render: (h, params) => {
            return h('div', [
              h(
                'a',
                {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.$store.commit('demo/setFormData', params.row)
                      this.$store.commit('demo/setModal1', true)
                    }
                  }
                },
                this.$t('page1.update')
              ),
              h(
                'a',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.$store.dispatch('demo/delete', params.row).then(res => {
                        if (res.data.success) {
                          this.$Message.success(this.$t('page1.deleteSuccess'))
                          this.$store.dispatch('demo/getTableList')
                        }
                      })
                    }
                  }
                },
                this.$t('page1.delete')
              )
            ])
          }
        }
      ]
    }
  },
  computed: {
    ...mapState({
      tableData: state => state.demo.tableData,
      total: state => state.demo.total,
      currPage: state => state.demo.currPage,
      pageSize: state => state.demo.pageSize,
      loading: state => state.demo.loading
    })
  },
  created() {
    this.tableHeight = window.innerHeight - 300
  },
  methods: {
    changePage(current) {
      this.$store.commit('demo/setCurrPage', current)
      this.$store.dispatch('demo/getTableList')
    },
    pageSizeChange(pageSize) {
      if (this.pageSize !== pageSize) {
        this.$store.commit('demo/setCurrPage', 1)
        this.$store.commit('demo/setPageSize', pageSize)
        this.$store.dispatch('demo/getTableList')
      }
    },
    handelTableSelect(selection) {
      this.$store.commit('demo/setTableSelVals', selection)
    }
  }
}
</script>
