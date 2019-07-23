module.exports = [
  // {
  //   name: 'lang',
  //   type: 'list',
  //   message: '选择开发语言使用JavaScript还是TypeScript？',
  //   choices: [
  //     {
  //       name: 'JavaScript',
  //       value: 'js'
  //     },
  //     {
  //       name: 'TypeScript',
  //       value: 'ts'
  //     }
  //   ],
  //   default: 'js'
  // },
  {
    name: "theme",
    type: "confirm",
    message: `是否需要切换主题功能？`,
    default: true
  },
  // {
  //   name: "i18n",
  //   type: "confirm",
  //   message: `是否需要支持国际化？`,
  //   default: true
  // },
  {
    name: "demo",
    type: "confirm",
    message: `是否需要自动生成示例程序？`,
    default: true
  },
  {
    name: "chart",
    type: "confirm",
    message: `是否需要引入echarts？`,
    default: false
  },
  {
    name: "ls",
    type: "confirm",
    message: `是否需要兼容零智？`,
    default: true
  }
];