import React from 'react';
import { Form, Select, Button, Table, Tag, Row, Col, Card, Cascader } from 'antd';

const dataSource = [
  {
    name: '1号线',
    tags: ['健康饮食', '电量焦虑'],
    traffic: 2380000,
    frequency: 11385,
    total: 20058,
    shop: 5
  }
];

const dataSource2 = [
  {
    name: '五棵松（1号线）',
    tags: ['健康饮食', '电量焦虑'],
    traffic: 2380000,
    frequency: 11385,
    total: 20058,
    shop: 5
  }
];

const columns = [
  { title: '线路名称', key: 'name', dataIndex: 'name' },
  {
    title: '用户标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (value: string[]) => value.map((item) => <Tag>{item}</Tag>)
  },
  { title: '人流量', key: 'traffic', dataIndex: 'traffic' },
  { title: '购买频次', key: 'frequency', dataIndex: 'frequency' },
  { title: '购买总金额', key: 'total', dataIndex: 'total' },
  { title: '商家数量', key: 'shop', dataIndex: 'shop' },
];

const columns2 = [
  { title: '站点名称', key: 'name', dataIndex: 'name' },
  {
    title: '用户标签',
    key: 'tags',
    dataIndex: 'tags',
    render: (value: string[]) => value.map((item) => <Tag>{item}</Tag>)
  },
  { title: '人流量', key: 'traffic', dataIndex: 'traffic' },
  { title: '购买频次', key: 'frequency', dataIndex: 'frequency' },
  { title: '购买总金额', key: 'total', dataIndex: 'total' },
  { title: '商家数量', key: 'shop', dataIndex: 'shop' },
];

const options = [
  {
    value: '1',
    label: '1号线',
    children: [
      { value: '万寿路', label: '万寿路' },
      { value: '五棵松', label: '五棵松' },
      { value: '玉泉路', label: '玉泉路' },
      { value: '八宝山', label: '八宝山' },
    ],
  },
  {
    value: '2',
    label: '2号线',
    children: [
      { value: '积水潭', label: '积水潭' },
      { value: '鼓楼大街', label: '鼓楼大街' },
      { value: '安定门', label: '安定门' },
      { value: '雍和宫', label: '雍和宫' },
    ],
  },
];

const Image: React.FC = () => {
  return (
    <div>
      <Form layout="inline" initialValues={{ type: 'line', option: 1, business: 0 }}>
        <Form.Item name="type">
          <Select options={[
            { label: '按线路查询', value: 'line' },
            { label: '按站点查询', value: 'station' },
          ]} />
        </Form.Item>
        <Form.Item dependencies={['type']} noStyle>
          {
            ({ getFieldValue }) => {
              return getFieldValue('type') === 'line'
                ? (
                  <Form.Item name="option">
                    <Select options={[
                      { label: '1号线', value: 1 },
                      { label: '2号线', value: 2 },
                      { label: '3号线', value: 3 },
                    ]} />
                  </Form.Item>
                )
                : (
                  <Form.Item name="option">
                    <Cascader placeholder="请选择" options={options} />
                  </Form.Item>
                )
            }
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary">查询</Button>
        </Form.Item>
      </Form>
      <div style={{ marginTop: '20px' }}>
        <Table
          bordered
          pagination={false}
          dataSource={dataSource}
          columns={columns}
        />
        <div style={{ marginTop: '20px' }}>
          <Row gutter={20}>
            <Col span={8}>
              <Card title="饮食" bordered={false}>
                <p>饮食结构健康</p>
                <p>无糖饮料占比超过50%</p>
                <p>日均早点销售月均1.38%</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="电子产品" bordered={false}>
                <p>消费充电宝租赁为主要开销，占比98%</p>
                <p>充电线销售月均5%</p>
                <p>消费频次较高，月均3%</p>
              </Card>
            </Col>
            <Col span={8}>
              <Card title="其他" bordered={false}>
                <p>文创消费月均 0.1%</p>
                <p>日化销售月均 4%</p>
                <p>花束消费月均 0.05%</p>
              </Card>
            </Col>
          </Row>
          <Card title="总结" bordered={false} style={{ width: '100%', marginTop: '10px' }}>
            <p>建议提高无糖饮料的售卖比例</p>
            <p>建议增加早点品类</p>
            <p>烤肠类早点消费较多，建议保留</p>
            <p>花束消费极低，建议避免</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Image;