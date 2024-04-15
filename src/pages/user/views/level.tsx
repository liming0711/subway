/**
 * 用户分层
 */
import React from "react";
import { Row, Col, Table } from 'antd';
import type { TableProps } from 'antd';
import ReactEchatrs from "echarts-for-react";
import { dataSource } from '../const';

const pieOptions = {
  title: {
    text: '消费类别',
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
      name: '消费类别',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 1048, name: '饮品' },
        { value: 735, name: '食物' },
        { value: 580, name: '电子产品' },
        { value: 484, name: '日化' },
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

const funnelOptions = {
  title: {
    text: '消费能力分层'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  legend: {
    type: 'scroll',
    top: 'bottom',
  },
  series: [
    {
      name: '消费能力分层',
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside',
        formatter: '{b}：{c}%'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 60, name: '低消费比例' },
        { value: 40, name: '中消费比例' },
        { value: 20, name: '高消费比例' },
        { value: 80, name: '无消费比例' },
      ]
    }
  ]
};

const columns: TableProps<any>["columns"] = [
  {
    title: "消费类别",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "消费细分类目",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "消费人数比例",
    dataIndex: "count",
    key: "count",
    render: (value) => `${value}%`
  },
  {
    title: "消费平均支出",
    dataIndex: "average",
    key: "average",
  },
];

const Level: React.FC = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Row>
        <Col span={12}><ReactEchatrs option={pieOptions} /></Col>
        <Col span={12}><ReactEchatrs option={funnelOptions} /></Col>
      </Row>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          size: 'small'
        }}
        size="middle"
        style={{ marginTop: '20px' }}
        scroll={{ y: document.body.clientHeight - 536 }}
      />
    </div>
  );
}

export default Level;