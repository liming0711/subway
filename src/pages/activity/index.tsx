import React from "react";
import { Layout, Menu, Form, Select, Button, Table, Space } from "antd";
import type { TableProps } from "antd";
import { menuItems } from "./const";
import "./index.css";

const { Sider, Content } = Layout;

interface DataType {
  key: string;
  name: string;
  line: string;
  address: string;
  station: string;
  level: number;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
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
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "xxx便利店",
    line: "1号线",
    station: "五棵松站",
    address: "New York No. 1 Lake Park",
    level: 2,
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "xxx文创店",
    line: "1号线",
    station: "五棵松站",
    address: "London No. 1 Lake Park",
    level: 1,
    tags: ["loser"],
  },
  {
    key: "3",
    name: "xxx特产店",
    line: "1号线",
    station: "五棵松站",
    address: "Sydney No. 1 Lake Park",
    level: 3,
    tags: ["cool", "teacher"],
  },
];

const Activity: React.FC = () => {
  return (
    <Layout className="shop-wrapper">
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["shopType"]}
          style={{ height: "100%" }}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: 20, margin: 0 }}>Activity</Content>
      </Layout>
    </Layout>
  );
};

export default Activity;
