const doc = document;
var hostname = window.location.hostname;
let domainPath = "";
if (hostname === "localhost" || hostname === "127.0.0.1") {
  domainPath = ";domain=" + hostname + ";path=/";
} else {
  var length = hostname.split(".").length;
  domainPath =
    ";domain=." +
    hostname.split(".")[length - 2] +
    "." +
    hostname.split(".")[length - 1] +
    ";path=/";
}
const domain = domainPath;

const cookie = {
  // 写cookies
  setCookie: function setCookie(name, value, expiredays) {
    var exdate = new Date(expiredays);
    var expires = isNaN(exdate) ? "" : ";expires=" + exdate.toGMTString();
    var cookie = name + "=" + value + expires;
    // doc.cookie = cookie + domain;
    doc.cookie = cookie;
  },

  // 读取cookies
  getCookie: function getCookie(name) {
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    var arr = doc.cookie.match(reg);
    if (arr) {
      return decodeURIComponent(arr[2]);
    } else {
      return "";
    }
  },

  // 删除cookies
  delCookieDomain: function delCookie(name) {
    var exp = new Date();
    var cval = " ";
    exp.setTime(exp.getTime() - 100);
    doc.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + domain;
  },
  // 删除cookies--兼容火狐，上边的方法在火狐浏览器删除不了
  delCookie: function delCookie(name) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() - 86400 * 1000 * 1);
    cookie.setCookie(name, "", expdate);
    if (cookie.getCookie(name)) {
      cookie.delCookieDomain(name);
    }
  },

  clearCookie: function clearCookie() {
    var keys = doc.cookie.split(";");
    if (keys) {
      for (let i = keys.length; i--; ) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 100);
        doc.cookie =
          keys[i].split("=")[0] + '=" ";expires=' + exp.toGMTString() + domain;
      }
    }
  }
};

export default cookie;
