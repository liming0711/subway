import React from "react";
import { Form, Select, Button } from 'antd';
import ReactEchatrs from "echarts-for-react";

const lineOptions1 = {
  title: {
    text: '进站人流量统计'
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: 20,
    right: 20,
    top: 56,
    bottom: 20,
    containLabel: true,
  },
  legend: {
    type: 'scroll',
    top: 'bottom',
  },
  xAxis: {
    type: 'category',
    data: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320, 932, 901, 934, 1290, 1330],
      type: 'line',
      smooth: true
    }
  ]
};

const lineOptions2 = {
  title: {
    text: '出站人流量统计'
  },
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    left: 20,
    right: 20,
    top: 56,
    bottom: 20,
    containLabel: true,
  },
  legend: {
    type: 'scroll',
    top: 'bottom',
  },
  xAxis: {
    type: 'category',
    data: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [320, 632, 601, 634, 1090, 1130, 1020, 1032, 701, 934, 1490, 1430],
      type: 'line',
      smooth: true
    }
  ]
};

const Line: React.FC = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Form layout="inline" initialValues={{ line: 1, time: 1 }}>
        <Form.Item label="线路" name="line">
          <Select options={[
            { label: '1号线', value: 1 },
            { label: '2号线', value: 2 },
            { label: '3号线', value: 3 },
          ]} />
        </Form.Item>
        <Form.Item label="时间" name="time">
          <Select options={[
            { label: '近24小时', value: 1 },
            { label: '近一周', value: 2 },
            { label: '近一个月', value: 3 },
            { label: '近一年', value: 3 },
          ]} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">查询</Button>
        </Form.Item>
      </Form>
      <ReactEchatrs option={lineOptions1} style={{ marginTop: '20px', height: '360px' }} />
      <ReactEchatrs option={lineOptions2} style={{ marginTop: '20px', height: '360px' }} />
    </div>
  );
}

export default Line;