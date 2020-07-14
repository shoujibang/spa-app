import axios from "axios";
// import alertConfig from "./alertConfig";
import storage from "./storage";

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    console.log("configconfigconfig000",config)
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // console.log(response);
    // alertConfig(response.data.code);
    if (response.headers.formtoken) {
      storage.setStorage("formToken", response.headers.formtoken);
    }
    return response.data;
  },
  function(error) {
    // 对响应错误做点什么
    // console.log(error.response.status);
    return Promise.reject(error);
  }
);
