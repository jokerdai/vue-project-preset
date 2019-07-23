<template>
  <div>
    <Card :bordered="false">
      <p slot="title">统计图</p>
      <QueryArea ref="queryArea" @query-data="handleQuery"></QueryArea>
    </Card>
    <Row :gutter="12" style="margin-top: 12px;">
      <Col span="12">
        <Card :bordered="false">
          <p slot="title">图3</p>
          <ve-histogram
            :data="chartData"
            :extend="extend"
            height="550px"
            :settings="chartSettings"
            :theme="ufetheme"
          ></ve-histogram>
        </Card>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </Col>
      <Col span="12">
        <Map :mapData="dcMapDatas"></Map>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </Col>
    </Row>
    <Row :gutter="12" style="margin-top: 12px;">
      <Col span="12">
        <LineChart title="折线图" :chartData="lineDatas"></LineChart>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </Col>
      <Col span="12">
        <BarChart title="柱形图" :chartData="barDatas"></BarChart>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </Col>
    </Row>
    <Card :bordered="false" style="margin-top: 12px;">
      <p slot="title">明细</p>
      <TablePage
        ref="detailTable"
        :columns="tableColumns"
        :url="tableUrl"
        :height="500"
      ></TablePage>
    </Card>
  </div>
</template>

<script>
import TablePage from '@/components/TablePage'
import QueryArea from './QueryArea'
import Map from './Map'
import BarChart from './BarChart'
import LineChart from './LineChart'
import ufetheme from '@/assets/theme/echarts/ufe'
import { queryChartDataReq } from '@/request/chart'

export default {
  components: {
    TablePage,
    QueryArea,
    BarChart,
    LineChart,
    Map
  },
  data() {
    this.chartSettings = {
      labelMap: {
        purchaseAmount: '采购金额',
        purchaseNum: '采购数量'
      },
      showLine: ['purchaseNum'],
      axisSite: { right: ['purchaseNum'] },
      yAxisName: ['单位：万元', '单位：万件'],
      digit: 4
    }
    this.extend = {
      series: {
        smooth: false,
        barWidth: 24
      },
      yAxis: {
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      xAxis: {
        axisLabel: {
          // rotate: 40
          margin: 16
        }
      },
      tooltip: {
        formatter: '{b0}<br/>{a0}: {c0} 万元 <br />{a1}: {c1} 万件'
      },
      grid: {
        left: '15%'
      }
    }
    return {
      ufetheme,
      spinShow: false,
      dcMapDatas: {},
      tableUrl: '',
      barDatas: {},
      lineDatas: {},
      chartData: {
        columns: ['theDate', 'purchaseAmount', 'purchaseNum'],
        rows: [
          {
            purchaseNum: 6.0991,
            purchaseAmount: 19442.2278,
            theDate: '1月'
          },
          {
            purchaseNum: 8.6636,
            purchaseAmount: 20949.7558,
            theDate: '2月'
          },
          {
            purchaseNum: 14.6636,
            purchaseAmount: 949.7558,
            theDate: '3月'
          },
          {
            purchaseNum: 5.6636,
            purchaseAmount: 10949.7556,
            theDate: '4月'
          },
          {
            purchaseNum: 20.6636,
            purchaseAmount: 45249.7556,
            theDate: '5月'
          },
          {
            purchaseNum: 10.6636,
            purchaseAmount: 45685.7556,
            theDate: '6月'
          },
          {
            purchaseNum: 10.6636,
            purchaseAmount: 45685.7556,
            theDate: '7月'
          },
          {
            purchaseNum: 10.6636,
            purchaseAmount: 45685.7556,
            theDate: '8月'
          },
          {
            purchaseNum: 12.6636,
            purchaseAmount: 13133.7556,
            theDate: '9月'
          },
          {
            purchaseNum: 12.6636,
            purchaseAmount: 23333.7556,
            theDate: '10月'
          },
          {
            purchaseNum: 12.6636,
            purchaseAmount: 13332.7556,
            theDate: '11月'
          },
          {
            purchaseNum: 12.6636,
            purchaseAmount: 33332.7556,
            theDate: '12月'
          }
        ]
      },
      tableColumns: [
        {
          title: '时间',
          key: 'theDate',
          width: 120
        },
        {
          title: 'SKU',
          key: 'wareid',
          width: 150
        },
        {
          title: '商品名称',
          key: 'wname',
          ellipsis: true,
          tooltip: true
        },
        {
          title: '供应商',
          key: 'vendorName',
          ellipsis: true,
          tooltip: true
        },
        {
          title: '品牌',
          key: 'brandName'
        },
        {
          title: '配送中心',
          key: 'dcName',
          width: 120
        },
        {
          title: '采购金额',
          key: 'purchaseAmount',
          width: 120
        },
        {
          title: '采购数量',
          key: 'purchaseNum',
          width: 120
        }
      ]
    }
  },
  methods: {
    queryChartData(params) {
      this.spinShow = true
      queryChartDataReq(params).then(
        response => {
          this.spinShow = false
          const res = response.data
          if (res.success) {
            // this.formateChartData(res.resultData)
          } else {
            this.$Message.error(res.errMsg)
          }
        },
        () => {
          this.spinShow = false
        }
      )
    },
    querTableData(params) {
      this.$refs.detailTable.queryTableData(params)
    },
    handleQuery(params) {
      this.queryParam = params
      this.queryChartData(params)
      this.querTableData(params)
    }
  }
}
</script>
