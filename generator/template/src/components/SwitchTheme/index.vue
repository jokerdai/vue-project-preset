<template>
  <Select v-model="theme" style="width: 80px;" @on-change="handleChange">
    <Option v-for="item in themeList" :value="item" :key="item">{{ item }}</Option>
  </Select>
  <!-- <Dropdown>
    <Button>
      主题
      <Icon type="ios-arrow-down"></Icon>
    </Button>
    <DropdownMenu slot="list">
      <DropdownItem v-for="item in themeList" :value="item" :key="item">{{ item }}</DropdownItem>
    </DropdownMenu>
  </Dropdown> -->
</template>
<script>
import darkTheme from '@/assets/theme/dark.theme.less'

export default {
  data() {
    return {
      theme: 'default',
      themeList: ['default', 'dark']
    }
  },
  methods: {
    handleChange(value) {
      if (value === 'default') {
        darkTheme.unuse()
      } else {
        darkTheme.use()
      }
    }
  }
}
</script>
