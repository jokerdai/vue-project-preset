import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'
import { Message, Modal } from 'iview'
import parse from 'url-parse'
import fileDownload from 'js-file-download'

const defaultContentType = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.defaults.timeout = 30000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.post['Content-Type'] = defaultContentType
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

// POST传参序列化
axios.interceptors.request.use(
  config => {
    const contentType = config.headers.post['Content-Type']
    if (config.method === 'post' && contentType === defaultContentType) {
      config.data = Qs.stringify(config.data, { allowDots: true })
    }
    // 为所有url加上语言参数
    const urlObject = parse(config.url, true)
    urlObject.query['lang'] = Vue.config.lang
    config.url = urlObject.toString()
    return config
  },
  error => {
    Message.error('错误的传参')
    return Promise.reject(error)
  }
)

// 文件导出
const download = res => {
  let fileName = getFileName(res)
  let data = res.data
  if (typeof res.data !== 'object') {
    data = new Blob([res.data])
  }
  if (fileName) {
    fileDownload(data, decodeURI(fileName))
  }
}
// 根据header判断返回的是否是文件流
function isFileStream(res) {
  let keyWords = ['application/vnd.ms-excel', 'application/octet-stream']
  let contentType = res.headers['content-type']
  if (!contentType) return false
  return keyWords.some(key => {
    return contentType.indexOf(key) !== -1
  })
}
// 从header中提取文件名
function getFileName(res) {
  let filename = ''
  let filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/
  let matches = filenameRegex.exec(res?.headers['content-disposition'])
  if (matches != null && matches[1]) {
    filename = matches[1].replace(/['"]/g, '')
  }
  return filename
}

// code状态码200判断
axios.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      Message.error('请求失败')
      return Promise.reject(res)
    }
    // 文件导出
    if (res.headers && isFileStream(res)) {
      download(res)
    }
    return res
  },
  error => {
    // 单点登录
    if (error && error.response && error.response.status === 401) {
      Modal.error({
        title: '警告',
        content: '登录状态失效，请重新登录！',
        onOk: () => {
          window.location.href = process.env.VUE_APP_SSO_URL + window.location.href
        }
      })
    } else {
      Message.error('网络异常')
      return Promise.reject(error)
    }
  }
)
export default {
  post(url, data, config = {}) {
    return axios({
      ...config,
      method: 'post',
      url,
      data
    })
  },

  download(url, data) {
    return axios({
      url: url,
      method: 'post',
      data,
      responseType: 'blob'
    })
  },

  upload(url, data) {
    let param = new FormData() // 创建form对象
    Object.keys(data).forEach(key => {
      param.append(key, data[key])
    })
    return axios({
      url: url,
      method: 'post',
      data: param,
      headers: { 'Content-Type': 'multipart/form-data' },
      responseType: 'arraybuffer'
    })
  },

  get(url, params) {
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      paramsSerializer: params => {
        return Qs.stringify(params, { indices: false })
      }
    })
  }
}
