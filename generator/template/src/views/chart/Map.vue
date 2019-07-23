<template>
  <Card :bordered="false">
    <p slot="title">地图</p>
    <span slot="extra" style="margin-right: 10px;">{{
      radioLabelModel === 1 ? '单位：万件' : '单位：万元'
    }}</span>
    <RadioGroup slot="extra" v-model="radioLabelModel" type="button" size="small">
      <Radio :label="1">数量</Radio>
      <Radio :label="2">金额</Radio>
    </RadioGroup>
    <div id="mapChinaChart" style="width: 100%; height: 550px; overflow-x: hidden;"></div>
  </Card>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import constants from '@/assets/constants'

export default {
  props: {
    mapData: {
      type: Object,
      default() {
        return {
          dcData: [],
          top5DcNumData: [],
          top5DcAmountData: []
        }
      }
    }
  },
  data() {
    return {
      myChart: null,
      radioLabelModel: 1,
      option: {
        // backgroundColor: '#404a59',
        tooltip: {
          trigger: 'item',
          formatter(params) {
            return `${params.name}:${params.value}`
          }
        },
        legend: false,
        visualMap: {
          min: 0,
          max: 1000,
          calculable: true
          // inRange: {
          //   color: ['#50a3ba', '#eac736', '#d94e5d']
          // },
          // textStyle: {
          //   color: '#000'
          // }
        },
        series: [
          {
            type: 'map',
            map: 'china',
            zoom: 1.2,
            // roam: true,
            itemStyle: {
              emphasis: { label: { show: true } }
            },
            markPoint: {
              // symbolSize(v) {
              //   return 20 + (v / 10);
              // },
              label: {
                formatter: '{b}: {c}'
              },
              itemStyle: {
                color: '#d87a80'
              },
              data: [
                {
                  coord: constants.GEO_COORD_MAP['上海'],
                  name: '上海',
                  value: 333
                },
                {
                  coord: constants.GEO_COORD_MAP['重庆'],
                  name: '重庆',
                  value: 855
                },
                {
                  coord: constants.GEO_COORD_MAP['北京'],
                  name: '北京',
                  value: 111
                }
              ]
            },
            data: [
              { name: '北京', value: 222 },
              { name: '天津', value: Math.round(Math.random() * 1000) },
              { name: '上海', value: Math.round(Math.random() * 1000) },
              { name: '重庆', value: Math.round(Math.random() * 1000) },
              { name: '河北', value: Math.round(Math.random() * 1000) },
              { name: '河南', value: Math.round(Math.random() * 1000) },
              { name: '云南', value: Math.round(Math.random() * 1000) },
              { name: '辽宁', value: Math.round(Math.random() * 1000) },
              { name: '黑龙江', value: Math.round(Math.random() * 1000) },
              { name: '湖南', value: Math.round(Math.random() * 1000) },
              { name: '安徽', value: Math.round(Math.random() * 1000) },
              { name: '山东', value: Math.round(Math.random() * 1000) },
              { name: '新疆', value: 0 },
              { name: '江苏', value: Math.round(Math.random() * 1000) },
              { name: '浙江', value: Math.round(Math.random() * 1000) },
              { name: '江西', value: Math.round(Math.random() * 1000) },
              { name: '湖北', value: Math.round(Math.random() * 1000) },
              { name: '广西', value: Math.round(Math.random() * 1000) },
              { name: '甘肃', value: Math.round(Math.random() * 1000) },
              { name: '山西', value: Math.round(Math.random() * 1000) },
              { name: '内蒙古', value: Math.round(Math.random() * 1000) },
              { name: '陕西', value: Math.round(Math.random() * 1000) },
              { name: '吉林', value: Math.round(Math.random() * 1000) },
              { name: '福建', value: Math.round(Math.random() * 1000) },
              { name: '贵州', value: Math.round(Math.random() * 1000) },
              { name: '广东', value: Math.round(Math.random() * 1000) },
              { name: '青海', value: Math.round(Math.random() * 1000) },
              { name: '西藏', value: Math.round(Math.random() * 1000) },
              { name: '四川', value: Math.round(Math.random() * 1000) },
              { name: '宁夏', value: Math.round(Math.random() * 1000) },
              { name: '海南', value: Math.round(Math.random() * 1000) },
              { name: '台湾', value: Math.round(Math.random() * 1000) },
              { name: '香港', value: Math.round(Math.random() * 1000) },
              { name: '澳门', value: Math.round(Math.random() * 1000) }
            ]
          }
        ]
      }
    }
  },
  watch: {
    // mapData: {
    //   deep: true,
    //   handler (val) {
    //     this.handleWatchMapData(val, this.radioLabelModel)
    //   }
    // },
    radioLabelModel(val) {
      this.handleWatchMapData(this.mapData, val)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.myChart = echarts.init(document.getElementById('mapChinaChart'), 'ufetheme')
      this.myChart.setOption(this.option)
    })
  },
  methods: {
    handleWatchMapData(mapData, radioLabelModel) {
      // 地图数据
      const dcData = mapData.dcData.map(item => ({
        name: item.provinceName,
        value: radioLabelModel === 1 ? item.purchaseNum : item.purchaseAmount
      }))
      // top5数据，在地图上以markPoint形式展示
      const top5Data = radioLabelModel === 1 ? mapData.top5DcNumData : mapData.top5DcAmountData
      const top5DcData = top5Data.map(item => ({
        coord: constants.GEO_COORD_MAP[item.name],
        name: item.name,
        value: item.value
      }))
      // 最大值
      const max = (top5DcData[0] && top5DcData[0].value) || 1
      this.option.series[0].data = dcData
      this.option.series[0].markPoint.data = top5DcData
      this.option.visualMap.max = max
      this.myChart.setOption(this.option)
    }
  }
}
</script>
