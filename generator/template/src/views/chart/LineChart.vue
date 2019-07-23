<template>
  <Card :bordered="false">
    <p slot="title">{{ title }}</p>
    <RadioGroup slot="extra" v-model="radioLabelModel" type="button" size="small">
      <Radio :label="1">数量</Radio>
      <Radio :label="2">金额</Radio>
    </RadioGroup>
    <ve-line
      :data="datas"
      :extend="extend"
      :settings="chartSettings"
      height="300px"
      :theme="ufetheme"
    ></ve-line>
  </Card>
</template>

<script>
import ufetheme from '@/assets/theme/echarts/ufe'

export default {
  props: {
    title: String,
    chartData: {
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
    datas() {
      // return {
      //   columns: this.chartData.columns,
      //   rows: this.radioLabelModel === 1 ? this.chartData.numRow : this.chartData.amountRow
      // }
      return {
        columns:
          this.radioLabelModel === 1
            ? ['dateX', 'stockNumY', 'nonArrNumY']
            : ['dateX', 'stockAmountY', 'nonArrAmountY'],
        rows: [
          {
            dateX: '2018-07-31',
            stockNumY: 481,
            stockAmountY: 773779.0,
            nonArrNumY: 36,
            nonArrAmountY: 109260.0
          },
          {
            dateX: '2018-08-01',
            stockNumY: 334,
            stockAmountY: 565694.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-02',
            stockNumY: 2817,
            stockAmountY: 4961271.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-03',
            stockNumY: 5282,
            stockAmountY: 6720812.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-04',
            stockNumY: 2904,
            stockAmountY: 5472928.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-05',
            stockNumY: 1940,
            stockAmountY: 3808492.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-06',
            stockNumY: 1869,
            stockAmountY: 4023215.0,
            nonArrNumY: 108,
            nonArrAmountY: 218484.0
          },
          {
            dateX: '2018-08-07',
            stockNumY: 2182,
            stockAmountY: 4046470.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-08',
            stockNumY: 2527,
            stockAmountY: 5487957.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-09',
            stockNumY: 5825,
            stockAmountY: 9965198.0,
            nonArrNumY: 18,
            nonArrAmountY: 54630.0
          },
          {
            dateX: '2018-08-10',
            stockNumY: 14248,
            stockAmountY: 16818785.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-11',
            stockNumY: 7649,
            stockAmountY: 11261539.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-12',
            stockNumY: 3588,
            stockAmountY: 6694292.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-13',
            stockNumY: 1220,
            stockAmountY: 2948888.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-14',
            stockNumY: 2981,
            stockAmountY: 4950719.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-15',
            stockNumY: 2257,
            stockAmountY: 3893933.0,
            nonArrNumY: 1,
            nonArrAmountY: 2023.0
          },
          {
            dateX: '2018-08-16',
            stockNumY: 1971,
            stockAmountY: 4142569.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-17',
            stockNumY: 3273,
            stockAmountY: 4960173.0,
            nonArrNumY: 559,
            nonArrAmountY: 1138983.0
          },
          {
            dateX: '2018-08-18',
            stockNumY: 5173,
            stockAmountY: 8053151.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-19',
            stockNumY: 2552,
            stockAmountY: 4352602.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-20',
            stockNumY: 1147,
            stockAmountY: 1967703.0,
            nonArrNumY: 5050,
            nonArrAmountY: 7612714.0
          },
          {
            dateX: '2018-08-21',
            stockNumY: 1993,
            stockAmountY: 3765787.0,
            nonArrNumY: 2979,
            nonArrAmountY: 3313085.0
          },
          {
            dateX: '2018-08-22',
            stockNumY: 2693,
            stockAmountY: 5312943.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-23',
            stockNumY: 3216,
            stockAmountY: 5362000.0,
            nonArrNumY: 5883,
            nonArrAmountY: 7470997.0
          },
          {
            dateX: '2018-08-24',
            stockNumY: 3123,
            stockAmountY: 5699285.0,
            nonArrNumY: 10897,
            nonArrAmountY: 15977479.0
          },
          {
            dateX: '2018-08-25',
            stockNumY: 4074,
            stockAmountY: 5994246.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-26',
            stockNumY: 3866,
            stockAmountY: 5815334.0,
            nonArrNumY: 0,
            nonArrAmountY: 0.0
          },
          {
            dateX: '2018-08-27',
            stockNumY: 2126,
            stockAmountY: 4054678.0,
            nonArrNumY: 26652,
            nonArrAmountY: 48271482.0
          },
          {
            dateX: '2018-08-28',
            stockNumY: 4085,
            stockAmountY: 7804997.0,
            nonArrNumY: 83404,
            nonArrAmountY: 195456248.0
          },
          {
            dateX: '2018-08-29',
            stockNumY: 10770,
            stockAmountY: 19587280.0,
            nonArrNumY: 66574,
            nonArrAmountY: 161805692.0
          }
        ]
      }
    },
    chartSettings() {
      return {
        yAxisName: this.radioLabelModel === 1 ? ['单位：万件'] : ['单位：万元'],
        digit: 4
      }
    }
  },
  data() {
    this.extend = {
      series: {
        smooth: false
      },
      grid: {
        left: '15%',
        right: '5%',
        top: '20%'
      },
      xAxis: {
        axisLabel: {
          rotate: 30
        }
      }
    }
    return {
      ufetheme,
      radioLabelModel: 1
    }
  }
}
</script>
