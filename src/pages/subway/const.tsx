import type { MenuProps } from "antd";

export const menuItems: MenuProps["items"] = [
  {
    label: "实时热力图",
    key: "heatMap",
  },
  {
    label: "线路流量",
    key: "line",
  },
  {
    label: "站点流量",
    key: "station",
  },
  {
    label: "站点介绍",
    key: "description",
    disabled: true,
  },
];
