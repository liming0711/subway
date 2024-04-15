import React from "react";
import { useNavigate, Outlet } from 'react-router-dom';
import { Layout, Menu } from "antd";
import { menuItems } from "./const";
import "./index.css";

const { Sider, Content } = Layout;

const Subway: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout className="user-wrapper" style={{ height: "100%" }}>
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["heatMap"]}
          style={{ height: "100%" }}
          items={menuItems}
          onClick={(e) => navigate(`/subway/${e.key}`)}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: 20, margin: 0 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Subway;
