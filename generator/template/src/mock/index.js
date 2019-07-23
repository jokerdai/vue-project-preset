import Mock from 'mockjs'
import * as d from './data'

const domain = process.env.VUE_APP_BASE_URL

Mock.mock(RegExp(`${domain}/query/tableData` + '.*'), d.getTableData)
Mock.mock(RegExp(`${domain}/dc/list` + '.*'), d.getDcData)
Mock.mock(RegExp(`${domain}/query/userinfo` + '.*'), d.getUserInfo)
Mock.mock(RegExp(`${domain}/save/page1` + '.*'), d.savePage1)
Mock.mock(RegExp(`${domain}/delete/page1` + '.*'), d.deletePage1)
Mock.mock(RegExp(`${domain}/get/category` + '.*'), d.getCategoryData)
Mock.mock(RegExp(`${domain}/search/vendor` + '.*'), d.getVendorByName)

export default Mock
