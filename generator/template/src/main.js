import Vue from 'vue'

import store from './store'
import axios from '@/utils/axiosReq'
import iView from 'iview'
import '@/assets/theme/iview.default.less'
import App from './App.vue'
import i18n from '@/i18n'

<%_ if (options.chart) { _%>
import VCharts from 'v-charts'
import '@/assets/theme/echarts/ufe'
Vue.use(VCharts)
<%_ } _%>

import '@scf/ui/elements'

// 实际打包线上环境不引入mock
if (process.env.NODE_ENV === 'development') {
  require('@/mock')
}

Vue.config.productionTip = false
Vue.config.ignoredElements = ['scf-layout']

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.$axios = axios

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
