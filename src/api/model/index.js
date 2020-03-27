import asyncService from "@/api/service/index";
// import mapObj from "@/domainName";

const asyncFn = async (name, data, params, header, call) => {
  
  


  let res = await asyncService[name](data, params, header, call);
  return res;
};
export default {
  // 获取唐诗古词
  getTangPoetry: async (data, params) =>
    await asyncFn("getTangPoetry", data, params),
 // 获取新闻资讯/api/getWangYiNews?page=2&count=4
  wangyi: async (data, params) => await asyncFn("wangyi", data, params),
  wxShare: async (data, params) => await asyncFn("wxShare", data, params)
};
