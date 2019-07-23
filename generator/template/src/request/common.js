import axios from '@/utils/axiosReq'

export function queryUserInfo() {
  return axios.get('/query/userinfo')
}

export function querDcList() {
  return axios.post('/dc/list')
}

export function getCategoryData() {
  return axios.post('/get/category')
}

export function searchVendorByName() {
  return axios.post('/search/vendor')
}
