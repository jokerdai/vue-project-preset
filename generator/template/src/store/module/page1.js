export default {
  namespaced: true,
  state: {
    tableData: []
  },
  mutations: {
    setDcList: (state, dcList) => {
      state.dcList = dcList
    }
  },
  actions: {
    getTableList({ state, commit }) {}
  }
}
