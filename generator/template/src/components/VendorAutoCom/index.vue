<template>
  <Select
    ref="vendorSelect"
    :value="values"
    clearable
    filterable
    label-in-value
    remote
    :remote-method="handleSearchData"
    :loading="loading"
    :placeholder="placeholder"
    @on-change="handleChange"
  >
    <Option v-for="(item, index) in searchData" :value="item.vendorCode" :key="index">
      {{ `${item.vendorName}[${item.vendorCode}]` }}
    </Option>
  </Select>
</template>
<script>
import { searchVendorByName } from '@/request/common'

export default {
  model: {
    prop: 'values',
    event: 'change'
  },
  props: {
    values: String,
    placeholder: {
      default: '请输入供应商名称'
    }
  },
  data() {
    return {
      searchData: [],
      loading: false
    }
  },
  methods: {
    handleSearchData(value) {
      if (value) {
        this.loading = true
        setTimeout(() => {
          searchVendorByName({ vagueVendor: value }).then(res => {
            this.loading = false
            const data = res.data
            if (data.success) {
              this.searchData = data.resultData
            } else {
              this.$Message.error(data.errorMsg)
            }
          })
        }, 1200)
      }
    },
    handleChange(data) {
      this.$emit('change', data && data.value)
      this.$emit('changeVendor', data)
    },
    clear() {
      this.searchData = []
      this.$refs.vendorSelect.setQuery(null)
    }
  }
}
</script>
<style>
.ivu-auto-complete .ivu-select-dropdown {
  max-height: 400px;
}
</style>
