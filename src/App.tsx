import React from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import Subway from './pages/subway';
import SubwayHeatMap from './pages/subway/views/heatMap';
import SubwayLine from './pages/subway/views/line';
import SubwayStation from './pages/subway/views/station';
import Shop from './pages/shop';
import ShopSummary from './pages/shop/views/summary';
import ShopAddress from './pages/shop/views/address';
import ShopGoods from './pages/shop/views/goods';
import User from './pages/user';
import UserLevel from './pages/user/views/level';
import UserImage from './pages/user/views/image';
import UserTags from './pages/user/views/tags';
import Ad from './pages/ad';
import AdSummary from './pages/ad/views/summary';
import AdRecommend from './pages/ad/views/recommend';
// import Activity from './pages/activity';
// import Business from './pages/business';
import './App.css';

const { Header, Content } = Layout;

const items1: MenuProps['items'] = [
  {
    label: '地铁',
    key: 'subway',
  },
  {
    label: '商家',
    key: 'shop',
  },
  {
    label: '用户',
    key: 'user',
  },
  {
    label: '广告',
    key: 'ad',
  },
  // {
  //   label: '活动',
  //   key: 'activity',
  // },
  // {
  //   label: '商业',
  //   key: 'business',
  // },
];

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout className="App-wrapper">
      <Header style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <div className="App-logo2">logo</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['subway']}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(e) => navigate(`/${e.key}`)}
        />
      </Header>
      <Content style={{ padding: 0, margin: 0 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/subway" />} />
          <Route path="/subway" element={<Subway />}>
            <Route path="/subway" element={<Navigate to="/subway/heatMap" />} />
            <Route path="/subway/heatMap" element={<SubwayHeatMap />} />
            <Route path="/subway/line" element={<SubwayLine />} />
            <Route path="/subway/station" element={<SubwayStation />} />
          </Route>
          <Route path="/shop" element={<Shop />}>
            <Route path="/shop" element={<Navigate to="/shop/summary" />} />
            <Route path="/shop/summary" element={<ShopSummary />} />
            <Route path="/shop/address" element={<ShopAddress />} />
            <Route path="/shop/goods" element={<ShopGoods />} />
          </Route>
          <Route path="/user" element={<User />}>
            <Route path="/user" element={<Navigate to="/user/level" />} />
            <Route path="/user/level" element={<UserLevel />} />
            <Route path="/user/image" element={<UserImage />} />
            <Route path="/user/tag" element={<UserTags />} />
          </Route>
          <Route path="/ad" element={<Ad />}>
            <Route path="/ad" element={<Navigate to="/ad/summary" />} />
            <Route path="/ad/summary" element={<AdSummary />} />
            <Route path="/ad/recommend" element={<AdRecommend />} />
          </Route>
          {/* <Route path="/activity" element={<Activity />} />
          <Route path="/business" element={<Business />} /> */}
        </Routes>
      </Content>
    </Layout>
  );
};

export default App;
