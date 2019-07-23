import { shallowMount } from '@vue/test-utils'
import TablePage from '@/components/TablePage'
import iView from 'iview'
import Vue from 'vue'
Vue.use(iView)

describe('TablePage.vue', () => {
  it('表格组件传值', () => {
    const columns = [
      {
        title: 'EMAIL',
        key: 'mail',
        width: 200
      }
    ]
    const url = '/query/tableData'
    const wrapper = shallowMount(TablePage, {
      propsData: { columns, url }
    })
    console.log(wrapper)
    expect(wrapper.props().url).toBe(url)
  })
})
