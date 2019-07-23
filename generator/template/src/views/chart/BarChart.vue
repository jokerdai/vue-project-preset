<template>
  <Card :bordered="false">
    <p slot="title">{{ title }}</p>
    <RadioGroup slot="extra" v-model="radioLabelModel" type="button" size="small">
      <Radio :label="1">数量</Radio>
      <Radio :label="2">金额</Radio>
    </RadioGroup>
    <ve-histogram
      :data="chartData"
      :settings="chartSettings"
      :extend="extend"
      height="300px"
      :theme="ufetheme"
    ></ve-histogram>
  </Card>
</template>

<script>
import ufetheme from '@/assets/theme/echarts/ufe'

export default {
  props: {
    title: String,
    data: {
      type: Object,
      default() {
        return {
          columns: [],
          numRow: [],
          amountRow: []
        }
      }
    }
  },
  computed: {
    chartData() {
      return {
        columns:
          this.radioLabelModel === 1 ? ['dateX', 'expectedNumY'] : ['dateX', 'expectedAmountY'],
        rows: [
          { dateX: '今日', expectedNumY: 11457, expectedAmountY: 19169731.0 },
          {
            dateX: '未来1天',
            expectedNumY: 23028,
            expectedAmountY: 41192758.0
          },
          {
            dateX: '未来3天',
            expectedNumY: 36704,
            expectedAmountY: 68894738.0
          },
          {
            dateX: '未来5天',
            expectedNumY: 45419,
            expectedAmountY: 82537771.0
          },
          { dateX: '未来7天', expectedNumY: 51732, expectedAmountY: 91016636.0 }
        ]
      }
    }
  },
  data() {
    this.chartSettings = {
      labelMap: {
        expectedNumY: '预计到货数量',
        expectedAmountY: '预计到货金额'
      }
    }
    this.extend = {
      yAxis: {
        show: false
      },
      xAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      legend: {
        show: false
      },
      series: {
        label: { show: true, position: 'top' }
      }
    }
    return {
      radioLabelModel: 1,
      radioLabelNum: this.$t('common.number'),
      radioLabelAmt: this.$t('common.amount'),
      spinShow: true,
      ufetheme
    }
  }
}
</script>
