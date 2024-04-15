import React from "react";
import { Row, Col, Table, Form, Select, Button, Cascader } from 'antd';
import type { TableProps } from 'antd';
import ReactEchatrs from "echarts-for-react";

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

const pieOptions1 = {
  title: {
    text: '广告类别',
    left: 'left'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}：{d}%'
  },
  legend: {
    type: 'scroll',
    top: 'bottom',
  },
  series: [
    {
      name: '广告类别',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 48, name: '自营广告' },
        { value: 73, name: '商业广告' },
        { value: 20, name: '入驻商家广告' },
        { value: 10, name: '公益广告' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

const pieOptions2 = {
    title: {
      text: '广告类型',
      left: 'left'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}：{d}%'
    },
    legend: {
      type: 'scroll',
      top: 'bottom',
    },
    series: [
      {
        name: '广告类型',
        type: 'pie',
        radius: '60%',
        data: [
          { value: 1048, name: '化妆品' },
          { value: 735, name: '电子产品' },
          { value: 580, name: '房地产' },
          { value: 484, name: '电商' },
          { value: 300, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

const columns: TableProps<any>["columns"] = [
  {
    title: "广告主",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "广告类别",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "广告类型",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "广告金额",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "广告到期时间",
    dataIndex: "end",
    key: "end",
  },
  {
    title: "所在线路",
    dataIndex: "line",
    key: "line",
  },
  {
    title: "所在站点",
    dataIndex: "station",
    key: "station",
  },
];

const data = [
  {
    key: "1",
    name: '广告主1',
    type: "自营广告",
    category: "电商",
    total: 120000,
    end: "2025/12/31",
    line: 3,
    station: "天安门东",
  },
  {
    key: "2",
    name: '广告主2',
    type: "商业广告",
    category: "化妆品",
    total: 200000,
    end: "2025/12/31",
    line: 1,
    station: "天安门东",
  },
  {
    key: "3",
    name: '广告主3',
    type: "商业广告",
    category: "房地产",
    total: 180000,
    end: "2025/12/31",
    line: 2,
    station: "天安门东",
  },
  {
    key: "4",
    name: '广告主4',
    type: "商业广告",
    category: "电子产品",
    total: 180000,
    end: "2025/12/31",
    line: 2,
    station: "天安门东",
  },
  {
    key: "5",
    name: '广告主5',
    type: "入驻商家广告",
    category: "电子产品",
    total: 180000,
    end: "2025/12/31",
    line: 2,
    station: "天安门东",
  },
  {
    key: "6",
    name: '广告主6',
    type: "公益广告",
    category: "其他",
    total: 180000,
    end: "2025/12/31",
    line: 2,
    station: "天安门东",
  },
];

const Summary: React.FC = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
      <Row style={{ marginTop: '20px' }}>
        <Col span={12}><ReactEchatrs option={pieOptions1} /></Col>
        <Col span={12}><ReactEchatrs option={pieOptions2} /></Col>
      </Row>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          size: 'small',
          hideOnSinglePage: true
        }}
        size="middle"
        style={{ marginTop: '20px' }}
        scroll={{ y: document.body.clientHeight - 536 }}
      />
    </div>
  );
}

export default Summary;