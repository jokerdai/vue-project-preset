<template>
  <scf-layout :menus="menus" :router="router">
    <b slot="logo">Vue Logo</b>
    <div slot="other" style="margin-left: auto;"><Theme></Theme></div>
    <div id="content">
      <router-view />
    </div>
  </scf-layout>
</template>

<script>
import router from './router'
import { queryUserInfo } from '@/request/common'
import Theme from '@/components/SwitchTheme'

export default {
  name: 'App',
  components: {
    Theme
  },
  router,
  computed: {
    router() {
      return router
    }
  },
  data() {
    return {
      menus: [
        {
          name: '示例',
          url: 'toA',
          key: 'toA',
          icon: 'IconA',
          children: [
            {
              name: '示例1',
              url: 'toAA',
              key: 'toAA',
              children: [
                {
                  name: '表单示例',
                  url: '/form',
                  key: 'form'
                },
                {
                  name: '列表示例',
                  url: '/list',
                  key: 'list'
                },
                {
                  name: '详情页',
                  url: '/detail',
                  key: 'detail'
                },
                {
                  name: '图表示例',
                  url: '/chart',
                  key: 'chart'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  created() {
    // 查询用户信息，零智系统右侧下拉框显示用户名称
    queryUserInfo().then(response => {
      if (response) {
        const data = response.data
        window.global_userName = data.name
        window.global_userErp = data.erp
      }
    })
  }
}
</script>
<style>
/* body {
  margin: 0;
  overflow-x: hidden;
}

#content {
  max-width: 100%;
  overflow-x: hidden;
} */
</style>
