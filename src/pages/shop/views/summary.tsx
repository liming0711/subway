/**
 * 商家类型
 */
import React from "react";
import { Row, Col, Table, Form, Select, Button } from 'antd';
import type { TableProps } from 'antd';
import ReactEchatrs from "echarts-for-react";

const pieOptions1 = {
  title: {
    text: '商家类别',
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
      name: '商家类别',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 48, name: '自营' },
        { value: 735, name: '招商' },
        { value: 580, name: '其他' },
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
      text: '商家类型',
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
        name: '商家类型',
        type: 'pie',
        radius: '60%',
        data: [
          { value: 1048, name: '便利店/超市' },
          { value: 735, name: '快餐' },
          { value: 580, name: '正餐' },
          { value: 484, name: '饮品' },
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
    title: "商家名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "商家类别",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "商家类型",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "销售额",
    dataIndex: "total",
    key: "total",
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
    name: '名称1',
    type: "招商",
    category: "便利店",
    total: 120000,
    line: 3,
    station: "天安门东",
  },
  {
    key: "2",
    name: '名称2',
    type: "招商",
    category: "便利店",
    total: 200000,
    line: 1,
    station: "天安门东",
  },
  {
    key: "3",
    name: '名称3',
    type: "自营",
    category: "便利店",
    total: 180000,
    line: 2,
    station: "天安门东",
  },
  {
    key: "4",
    name: '名称4',
    type: "招商",
    category: "便利店",
    total: 180000,
    line: 2,
    station: "天安门东",
  },
  {
    key: "5",
    name: '名称5',
    type: "招商",
    category: "便利店",
    total: 180000,
    line: 2,
    station: "天安门东",
  },
  {
    key: "6",
    name: '名称6',
    type: "招商",
    category: "便利店",
    total: 180000,
    line: 2,
    station: "天安门东",
  },
];

const Summary: React.FC = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Form layout="inline" initialValues={{ line: 0 }}>
        <Form.Item label="按线路查询" name="line">
          <Select options={[
            { label: '全部', value: 0 },
            { label: '1号线', value: 1 },
            { label: '2号线', value: 2 },
            { label: '3号线', value: 3 },
          ]} />
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