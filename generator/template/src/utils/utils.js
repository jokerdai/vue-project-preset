import Cookies from 'js-cookie'
import parse from 'url-parse'
import dayjs from 'dayjs'

// 返回一个范围时间的数组，从今天到rangeDay天后的时间
export function getRangeTimeArr(rangeDay = 0) {
  const end = new Date()
  const start = new Date()
  // eslint-disable-next-line
  start.setTime(start.getTime() - 3600 * 1000 * 24 * rangeDay)
  return [start, end]
}

export const dataPickOption = [
  {
    text: '昨天',
    value() {
      return getRangeTimeArr(1)
    }
  },
  {
    text: '最近7天',
    value() {
      return getRangeTimeArr(7)
    }
  },
  {
    text: '近一个月',
    value() {
      return getRangeTimeArr(30)
    }
  },
  {
    text: '近三个月',
    value() {
      return getRangeTimeArr(90)
    }
  }
]

export function getFutureDate(rangeDay = 0) {
  const start = new Date()
  // eslint-disable-next-line
  start.setTime(start.getTime() + 3600 * 1000 * 24 * rangeDay)
  return dayjs(start).format('YYYY-MM-DD')
}

// 获取date日期在一年中的第几周
export function getWeekOfYear(thisDay = new Date()) {
  const firstDay = new Date(thisDay.getFullYear(), 0, 1) // 本年的第一天,Js月份从0开始记！0就是1月啦
  let dayWeek = thisDay.getDay() // 今天周几
  if (dayWeek === 0) {
    dayWeek = 7
  }
  let startWeek = firstDay.getDay() // 本年第一天周几
  if (startWeek === 0) {
    startWeek = 7
  }
  // 第几周
  const d = (thisDay.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000)
  const weekNum = (d + (startWeek - dayWeek)) / 7 + 1
  return weekNum
}

export function formatPrice(number) {
  return new Intl.NumberFormat().format(number)
}

/**
 * 获取语言
 */
export function getI18nLang() {
  // 获取查询参数
  const urlObject = parse(window.location.href, true)
  let searchLang = urlObject.query['lang']
  const cookieLang = Cookies.get('jd.erp.lang')
  return searchLang || cookieLang || process.env.VUE_APP_LANG
}
