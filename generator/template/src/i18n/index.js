import Vue from 'vue'
import VueI18n from 'vue-i18n'
import iviewEn from 'iview/dist/locale/en-US'
import iviewZh from 'iview/dist/locale/zh-CN'
import zh from '@/i18n/lang/zh-CN'
import en from '@/i18n/lang/en-US'
import { getI18nLang } from '@/utils/utils'

Vue.use(VueI18n)

const lang = getI18nLang()
Vue.config.lang = lang

const messages = {
  zh_CN: Object.assign(zh, iviewZh),
  en_US: Object.assign(en, iviewEn)
}

const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n
