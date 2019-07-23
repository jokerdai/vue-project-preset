<template>
  <tree-select
    v-model="treeSelected"
    check-strictly
    :max-tag-count="1"
    :expand-all="true"
    :load-data="loadData"
    @on-change="handleTreeSelectChange"
    @on-toggle-expand="handleTreeSelectExpand"
    @on-check-change="handleTreeSelectCheckChange"
    @on-select-change="handleTreeSelectClick"
    :data="treeData"
  ></tree-select>
</template>
<script>
import TreeSelect from '../TreeSelect'
import { getCategoryData } from '@/request/common'
export default {
  components: {
    TreeSelect
  },
  data() {
    return {
      treeSelected: [112, 113],
      treeData: []
    }
  },
  mounted() {
    getCategoryData().then(res => {
      const { data } = res
      this.treeData = data.resultData
    })
  },
  methods: {
    handleTreeSelectChange(list) {
      // console.log('=-========', list);
    },
    handleTreeSelectExpand(item) {
      // console.log('toggle expand', item);
    },
    handleTreeSelectCheckChange(selectedArray, item) {
      // console.log(selectedArray, item);
    },
    handleTreeSelectClick(selectArray, item) {
      // console.log(selectArray, item);
    },
    loadData(item, callback) {
      setTimeout(() => {
        let data = [
          {
            id: 111,
            title: '1-1-1'
          },
          {
            id: 112,
            title: '1-1-2'
          },
          {
            id: 113,
            title: '1-1-3'
          },
          {
            id: 114,
            title: '1-1-4'
          }
        ]
        callback(data)
      }, 1000)
    }
  }
}
</script>
