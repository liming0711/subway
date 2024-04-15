import type { MenuProps } from "antd";

export const menuItems: MenuProps["items"] = [
  {
    label: "用户分层",
    key: "level",
  },
  {
    label: "用户画像",
    key: "image",
  },
  {
    label: "标签管理",
    key: "tag",
  },
  {
    label: "活动推荐",
    key: "activity",
    disabled: true,
  },
  {
    label: "商品推荐",
    key: "good",
    disabled: true,
  },
];

export const dataSource = [
  { key: "1", type: "饮品", category: "有糖饮料", count: 12, average: 3, tags: ["nice", "developer"] },
  { key: "2", type: "沙拉", category: "蔬菜沙拉", count: 20, average: 18, tags: ["loser"] },
  { key: "3", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "4", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "5", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "6", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "7", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "8", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "9", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "10", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "11", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "12", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "13", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "14", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "15", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "16", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "17", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "18", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "19", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "20", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "21", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
  { key: "22", type: "饮品", category: "无糖饮料", count: 18, average: 2, tags: ["cool", "teacher"] },
];
