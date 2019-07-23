import axios from '@/utils/axiosReq'
class RequestPage1 {
  queryTable(param) {
    return axios.get('/query/tableData', param)
  }

  save(datas) {
    return axios.post('/save/page1', datas)
  }

  delPage1(datas) {
    return axios.post('/delete/page1', datas)
  }
}
export default new RequestPage1()
