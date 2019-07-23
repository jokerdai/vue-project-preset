<template>
  <Cascader :data="data" change-on-select filterable></Cascader>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          value: 'P012',
          label: '3C事业部数码业务部',
          children: [
            {
              value: 'P0112',
              label: '综合管理部'
            },
            {
              value: 'P0113',
              label: '平板业务部'
            },
            {
              value: 'P0114',
              label: '智能数码业务部'
            }
          ]
        },
        {
          value: 'P038',
          label: '电脑数码事业部',
          children: [
            {
              value: 'nanjing',
              label: '笔记本业务部'
            },
            {
              value: 'suzhou',
              label: '电脑配件业务部'
            },
            {
              value: 'P0337',
              label: '线下业务部'
            },
            {
              value: 'P0236',
              label: '数字营销部'
            }
          ]
        }
      ]
    }
  }
}
</script>
