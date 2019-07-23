<template>
  <Select v-model="dcSelList" filterable multiple :max-tag-count="1">
    <Option v-for="item in dcList" :value="item.value" :key="item.value">
      {{ item.name }}
    </Option>
  </Select>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      dcSelList: []
    }
  },
  created() {
    if (this.dcList.length === 0) {
      this.$store.dispatch('common/getDcList')
    }
  },
  computed: {
    ...mapState({
      dcList: state => state.common.dcList
    })
  }
}
</script>
