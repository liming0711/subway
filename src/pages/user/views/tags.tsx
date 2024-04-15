import React from 'react';
import { Table } from 'antd';

const dataSource = [
  {
    type: '饮食',
    name: '健康饮食',
    percent: '30%',
    remark: '',
  },
  {
    type: '电子产品',
    name: '电量焦虑',
    percent: '7%',
    remark: '',
  },
  {
    type: '饮食',
    name: '早餐',
    percent: '50%',
    remark: '',
  },
  {
    type: '其他',
    name: '高消费',
    percent: '1%',
    remark: '',
  },
];

const columns = [
  { title: '标签类别', key: 'type', dataIndex: 'type' },
  { title: '标签名称', key: 'name', dataIndex: 'name' },
  { title: '标签人群比例', key: 'percent', dataIndex: 'percent' },
  { title: '备注', key: 'remark', dataIndex: 'remark' },
];

const Tags: React.FC = () => {
  return (
    <Table bordered pagination={false} dataSource={dataSource} columns={columns} />
  );
};

export default Tags;