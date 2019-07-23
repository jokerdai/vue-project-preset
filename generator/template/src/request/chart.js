import axios from '@/utils/axiosReq'

export function queryChartDataReq(datas) {
  return axios.post('/query/chart', datas)
}
