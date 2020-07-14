import http from "@/assets/config/axios";
export default {
  // 获取唐诗古词
  getTangPoetry: (data, params) =>
    http("/api/getTangPoetry", data, "post", params),
  // 获取新闻资讯/api/getWangYiNews?page=2&count=4
  wangyi: (data, params) =>
    http("/api/getWangYiNews", data, "get", params),
  //微信分享
  wxShare: (data, params) => http("/api/wx/getSign", data, "get", params)
};
