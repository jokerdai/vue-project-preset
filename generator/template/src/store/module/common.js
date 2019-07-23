import { querDcList } from '@/request/common'
import { Message } from 'iview'

export default {
  namespaced: true,
  state: {
    dcList: [] // 配送中心
  },
  mutations: {
    setDcList: (state, dcList) => {
      state.dcList = dcList
    }
  },
  actions: {
    getDcList({ state, commit }) {
      if (state.dcList.length === 0) {
        querDcList().then(response => {
          if (response.data && response.data.success) {
            commit('setDcList', response.data.resultData)
          } else {
            Message.error('查询配送中心异常')
          }
        })
      }
    }
  }
}
