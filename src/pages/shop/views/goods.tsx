/**
 * 商家类型
 */
import React from "react";
import { Table, Form, Select, Button, Rate, Cascader } from 'antd';
import type { TableProps } from 'antd';

const columns: TableProps<any>["columns"] = [
  {
    title: "商品种类",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "商品名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "推荐等级",
    dataIndex: "rate",
    key: "rate",
    render: (value) => <Rate allowHalf value={value} />
  },
  {
    title: "推荐原因",
    dataIndex: "reason",
    key: "reason",
  },
];

const data = [
  {
    key: "1",
    type: '饮品',
    name: "矿泉水",
    rate: 5,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
  {
    key: "2",
    type: '饮品',
    name: "可口可乐",
    rate: 4.5,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
  {
    key: "3",
    type: '食物',
    name: "烤肠",
    rate: 4.5,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
  {
    key: "4",
    type: '食物',
    name: "关东煮",
    rate: 4,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
  {
    key: "5",
    type: '日化',
    name: "卫生纸",
    rate: 2.5,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
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

const Goods: React.FC = () => {

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
        <Form.Item label="商家类型" name="business">
          <Select options={[
            { label: '便利店', value: 0 },
            { label: '快餐', value: 1 },
            { label: '正餐', value: 2 },
            { label: '饮品', value: 3 },
            { label: '充电宝', value: 4 },
            { label: '自动售货机', value: 5 },
          ]} style={{ width: '120px' }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">查询</Button>
        </Form.Item>
      </Form>
      <Table
        dataSource={data}
        columns={columns}
        pagination={{
          size: 'small',
          hideOnSinglePage: true
        }}
        size="middle"
        style={{ marginTop: '20px' }}
        scroll={{ y: document.body.clientHeight - 236 }}
      />
    </div>
  );
}

export default Goods;