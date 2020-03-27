import axios from "axios";
const header = {
  // "X-Requested-With": "XMLHttpRequest",
  // "X-Frame-Options": "DENY", // 告诉浏览器不要（DENY）把这个网页放在iFrame内，通常的目的就是要帮助用户对抗点击劫持。
  // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
};
window.ajaxTimeout = 20000;
export default async (
  url = "",
  data = {},
  type = "GET",
  params = {},
  headers = header,
  onUploadProgress
) => {
  type = type.toLowerCase();
  let obj = {
    method: type,
    baseURL: "",
    url: url,
    data,
    params,
    // // `onUploadProgress` 允许为上传处理进度事件
    // onUploadProgress: function(progressEvent) {
    //   // 对原生进度事件的处理
    // },
    // // `onDownloadProgress` 允许为下载处理进度事件
    // onDownloadProgress: function(progressEvent) {
    //   // 对原生进度事件的处理
    // },
    // `cancelToken` 指定用于取消请求的 cancel token
    // （查看后面的 Cancellation 这节了解更多）
    // cancelToken: new CancelToken(function (cancel) {
    // }),
    // processData: true, // 告诉axios不要去处理发送的数据(重要参数)
    timeout: window.ajaxTimeout,
    headers
  };
  if (onUploadProgress && typeof onUploadProgress === "function") {
    obj.onUploadProgress = onUploadProgress;
  }
  // return await axios(obj)
  //   .then(response => {
  //     return response;
  //   })
  //   .catch(res => {
  //     return res;
  //   });

  return new Promise((resolve, reject) => {
    axios(obj)
      .then(response => {
        resolve(response);
      })
      .catch(res => {
        reject(res);
      });
  });
};
