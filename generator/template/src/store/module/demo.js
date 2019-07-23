import api from '@/request/page1'

export default {
  namespaced: true,
  state: {
    total: 0,
    currPage: 1,
    pageSize: 20,
    tableData: [],
    loading: false,
    queryParam: {},
    modal1: false,
    formData: {},
    tableSelVals: []
  },
  mutations: {
    setTableData: (state, tableData) => {
      state.tableData = tableData
    },
    setTotal: (state, total) => {
      state.total = total
    },
    setCurrPage: (state, currPage) => {
      state.currPage = currPage
    },
    setPageSize: (state, pageSize) => {
      state.pageSize = pageSize
    },
    setLoading: (state, loading) => {
      state.loading = loading
    },
    setQueryParam: (state, queryParam) => {
      state.queryParam = queryParam
    },
    setModal1: (state, modal1) => {
      state.modal1 = modal1
    },
    setFormData: (state, formData) => {
      state.formData = formData
    },
    setTableSelVals: (state, tableSelVals) => {
      state.tableSelVals = tableSelVals
    }
  },
  actions: {
    getTableList({ state, commit }) {
      let params = state.queryParam
      params.currPage = state.currPage
      params.pageSize = state.pageSize
      commit('setLoading', true)
      api.queryTable(params).then(response => {
        const res = response.data
        if (res.success) {
          commit('setTableData', res.resultData)
          commit('setTotal', res.total)
        }
        commit('setLoading', false)
      })
    },
    delete(data) {
      return api.delPage1(data)
    },
    save(data) {
      return api.save(data)
    }
  }
}
