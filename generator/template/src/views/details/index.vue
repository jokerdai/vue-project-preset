<template>
  <Tabs value="name1">
    <TabPane label="详情" name="name1">
      <Card dis-hover>
        <p slot="title">用户信息</p>
        <Row>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
        </Row>
        <br />
        <Row>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
        </Row>
        <br />
        <Row>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
        </Row>
        <br />
        <Row>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">该数据更新时间：2017-08-08</Col>
        </Row>
      </Card>
      <Card dis-hover style="margin-top: 12px;">
        <Row>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">用户姓名：付小小</Col>
          <Col span="6">该数据更新时间：2017-08-08</Col>
        </Row>
      </Card>
      <Card dis-hover style="margin-top: 12px;">
        <p slot="title">明细</p>
        <Table :columns="columns1" :data="data1"></Table>
      </Card>
    </TabPane>
    <TabPane label="历史" name="name2">标签二的内容</TabPane>
  </Tabs>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        }
      ]
    }
  }
}
</script>
