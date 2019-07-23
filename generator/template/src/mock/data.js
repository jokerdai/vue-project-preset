export const getUserInfo = {
  name: '金大中',
  erp: 'bjjdz'
}

export const getTableData = {
  success: true,
  message: null,
  total: 100,
  'resultData|1-20': [
    {
      name: '@Name',
      mail: '@EMAIL',
      city: '北京',
      gender: 'bjjdz',
      // 'interest': [],
      date: '@DATE',
      time: '@TIME',
      desc: '北京sssxxxxxx'
    }
  ]
}

// export const getDcData = {
//   success: true,
//   message: null,
//   'resultData|1-10': [{
//     'value': /[0-9]/,
//     'name': '@NAME'
//   }]
// }
export const getDcData = options => {
  console.log(options)
  return {
    success: true,
    message: null,
    resultData: [
      {
        value: 6,
        name: '北京'
      },
      {
        value: 3,
        name: '上海'
      },
      {
        value: 5,
        name: '广州'
      },
      {
        value: 335,
        name: '成都'
      },
      {
        value: 7,
        name: '武汉'
      },
      {
        value: 45,
        name: '沈阳'
      }
    ]
  }
}

export const savePage1 = {
  success: true,
  message: null
}

export const deletePage1 = {
  success: true,
  message: null
}

export const getCategoryData = {
  success: true,
  message: null,
  resultData: [
    {
      id: 1,
      title: '电脑办公',
      children: [
        {
          id: 11,
          title: '电脑整机',
          loading: false,
          children: [
            {
              id: 111,
              title: '笔记本'
            },
            {
              id: 112,
              title: '游戏本'
            },
            {
              id: 113,
              title: '平板电脑'
            },
            {
              id: 114,
              title: '台式机'
            }
          ]
        },
        {
          id: 12,
          title: '电脑配件',
          children: [
            {
              id: 121,
              title: 'CPU'
            },
            {
              id: 122,
              title: '主板'
            },
            {
              id: 123,
              title: '显卡'
            },
            {
              id: 124,
              title: '硬盘'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: '数码',
      children: [
        {
          id: 21,
          title: '摄影摄像',
          loading: false,
          children: [
            {
              id: 211,
              title: '数码相机'
            },
            {
              id: 212,
              title: '单反相机'
            },
            {
              id: 213,
              title: '摄像机'
            },
            {
              id: 214,
              title: '运动相机'
            }
          ]
        },
        {
          id: 22,
          title: '数码配件',
          children: [
            {
              id: 221,
              title: '存储卡'
            },
            {
              id: 222,
              title: '读卡器'
            },
            {
              id: 223,
              title: '滤镜'
            },
            {
              id: 224,
              title: '相机包'
            }
          ]
        }
      ]
    }
  ]
}

export const getVendorByName = {
  success: true,
  message: null,
  resultData: [
    { vendorCode: 'ygdmt', vendorName: '圆刚多媒体科技（上海）有限公司' },
    { vendorCode: 'shsgwl', vendorName: '上海尚格网络科技发展有限公司' },
    { vendorCode: 'bjssxl', vendorName: '北京盛世想联科贸有限公司' },
    { vendorCode: 'bjxcxd', vendorName: '北京兴长信达科技发展有限公司' },
    { vendorCode: 'lxbj', vendorName: '联想（北京）有限公司' },
    { vendorCode: 'bjhyhx', vendorName: '北京恒远恒信科技发展有限公司' },
    { vendorCode: 'bjyat', vendorName: '北京优爱特商贸有限公司' },
    { vendorCode: 'bjmtcf', vendorName: '北京迈拓晨峰科技发展有限公司' },
    { vendorCode: 'shbsdgjmy', vendorName: '上海百事得国际贸易有限公司' },
    { vendorCode: 'bjslt', vendorName: '北京世龙通科贸有限公司' },
    { vendorCode: 'bjyzcx', vendorName: '北京亿洲创新科技发展有限公司' },
    { vendorCode: 'bjsjf', vendorName: '北京盛嘉菲数码科技有限公司' },
    { vendorCode: 'bjslk', vendorName: '北京斯雷康科技股份有限公司' },
    { vendorCode: 'fsjp', vendorName: '富士胶片（中国）投资有限公司' }
  ]
}
