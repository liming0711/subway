/**
 * 商家类型
 */
import React from "react";
import { Table, Form, Select, Button, Rate } from 'antd';
import type { TableProps } from 'antd';

const columns: TableProps<any>["columns"] = [
  {
    title: "线路",
    dataIndex: "line",
    key: "line",
  },
  {
    title: "站点",
    dataIndex: "station",
    key: "station",
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
    line: '1号线',
    station: "天安门东",
    rate: 5,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
  {
    key: "2",
    line: '1号线',
    station: "天安门南",
    rate: 4.5,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
  {
    key: "3",
    line: '2号线',
    station: "天安门西",
    rate: 4.5,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
  {
    key: "4",
    line: '2号线',
    station: "天安门北",
    rate: 4,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
  {
    key: "5",
    line: '13号线',
    station: "五棵松",
    rate: 2.5,
    reason: "根据该线路/站点的用户画像、用户分层和用户标签进行推荐。",
  },
];

const Recommend: React.FC = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Form layout="inline" initialValues={{ type: 1 }}>
        <Form.Item label="广告类型" name="type">
          <Select options={[
            { label: '化妆品', value: 1 },
            { label: '电子产品', value: 2 },
            { label: '房地产', value: 3 },
            { label: '电商', value: 4 },
            { label: '其他', value: 5 }
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

export default Recommend;