// import {
//   getStore
// } from '@/config/mUtils';
/**
 * 提示语配置信息
 */
let configAlert = {
  "401": "请重新登录",
  "402": "登录失败",
  "1": "新增成功",
  "2": "修改成功",
  "3": "删除成功",
  "4": "禁用成功",
  "5": "启用成功"
};
/**
 * 根据后台返回值的code值做提示语弹窗
 */
export default code => {
  //window.vm.$notify.error({
  //  title: configAlert[code + ''],
  //  message: ''
  //});
  alert("alertConfig:" + configAlert[code + ""]);
};
