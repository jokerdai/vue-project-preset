<template>
  <Form ref="queryForm" :model="formModel" :rules="ruleForm" :label-width="90">
    <Row>
      <Col span="6">
        <FormItem label="日期" prop="cDate">
          <DatePicker
            type="daterange"
            v-model="formModel.cDate"
            :clearable="false"
            :editable="false"
            :options="dateRangeOptions"
            format="yyyy-MM-dd"
            style="width: 200px;"
          ></DatePicker>
        </FormItem>
      </Col>
      <Col span="6">
        <FormItem label="部门">
          <Input clearable style="width: 200px;"></Input>
        </FormItem>
      </Col>
      <Col span="6">
        <FormItem label="品类">
          <Input clearable style="width: 200px;"></Input>
        </FormItem>
      </Col>
      <Col span="6">
        <FormItem label="品牌">
          <Input clearable style="width: 200px;"></Input>
        </FormItem>
      </Col>
      <Col span="6">
        <FormItem label="采销员">
          <Input clearable style="width: 200px;"></Input>
        </FormItem>
      </Col>
      <Col span="6">
        <FormItem label="配送中心">
          <Select v-model="dcSelList" multiple style="width: 200px;">
            <Option v-for="item in dcList" :value="item.value" :key="item.value">{{
              item.name
            }}</Option>
          </Select>
        </FormItem>
      </Col>
      <Col span="6">
        <FormItem label="供应商简码">
          <Input clearable style="width: 200px;"></Input>
        </FormItem>
      </Col>
      <Col span="6">
        <Button type="primary" @click="queryDatas" style="margin-left: 80px;">查询</Button>
        <Button @click="handleReset" style="margin-left: 10px;">重置</Button>
      </Col>
    </Row>
  </Form>
</template>
<script>
import { mapState } from 'vuex'
import { dataPickOption, getRangeTimeArr } from '@/utils/utils'

export default {
  data() {
    const validateCDate = (rule, value, callback) => {
      const start = value[0]
      const end = value[1]
      if (start && end) {
        const rangeDay = (end.getTime() - start.getTime()) / (3600 * 1000 * 24)
        if (rangeDay > 90) {
          callback(new Error('日期间隔不能超过90天'))
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
    return {
      dcSelList: [],
      ruleForm: {
        cDate: [{ validator: validateCDate, trigger: 'blur' }]
      },
      formModel: {
        cDate: getRangeTimeArr(30)
      },
      dateRangeOptions: {
        shortcuts: dataPickOption
      }
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
  },
  methods: {
    getQueryParams() {
      return {
        // startDate: dateFormat(this.formModel.cDate[0], 'yyyy-MM-dd'),
        // endDate: dateFormat(this.formModel.cDate[1], 'yyyy-MM-dd')
      }
    },
    queryDatas() {
      this.$refs.queryForm.validate(valid => {
        if (valid) {
          this.$emit('query-data', this.getQueryParams())
        }
      })
    },
    handleReset() {
      this.$refs.queryForm.resetFields()
      this.dcSelList = []
      this.formModel.cDate = getRangeTimeArr(30)
    }
  }
}
</script>
