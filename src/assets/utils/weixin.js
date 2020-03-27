import wx from "weixin-js-sdk";
import asyncRequest from "@/api/model/index";

export default function() {
  console.log("wxwxwxwxwxwxwx", wx);
  wx.checkJsApi({
    jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function(res) {
      // 以键值对的形式返回，可用的api值true，不可用为false
      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    }
  });

  let shareUrl = location.href.split("#")[0];
  // alert(shareUrl);
  //   if (shareUrl.endsWith("/")) {
  //     shareUrl = shareUrl.substring(0, shareUrl.length);
  //   }
  //   shareUrl = encodeURIComponent(shareUrl);

  let params = {};
  params.url = shareUrl;
  let res = asyncRequest.wxShare(" ", params);
  res.then(res => {
    let data = res.retData;
    let shareText = JSON.parse(data.shareContent);
    wx.config({
      debug: false, // 开启调试模式
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature, // 必填，签名
      jsApiList: [
        "updateAppMessageShareData", //自定义“分享给朋友”及“分享到QQ”按钮的分享内容
        "updateTimelineShareData" //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      ] // 必填，需要使用的JS接口列表
    });
    let objData = {
      title: shareText.title,
      link: location.href.split("#")[0],
      imgUrl: "https://www.baidu.com",
      desc: shareText.desc
    };
    wx.ready(function() {
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，
      // config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，
      // 则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，
      // 则可以直接调用，不需要放在ready函数中。

      // 分享给朋友
      wx.updateAppMessageShareData(objData);
      //分享到朋友圈
      wx.updateTimelineShareData(objData);
    });

    wx.error(function(res) {
      //config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
    console.log("微信配置返回结果", res.retData);
    console.log("微信配置分享返回结果", shareText);
  });
}

// weixinShare()
// 要使用请安装weixin-js-sdk
//  import {isWechat} from './isTerminal.js'
//  import {wechatSignatureApi} from '../api/api.js'
//  import Config from "@/config/app";
//    /**
//  * 签名
//  * @param apiList
//  * @returns {Promise<any>}
//  */
//  function wechatSignature(apiList = []) {
//  return new Promise((resolve, reject) => {
//  if (!isWechat) {
//  return reject('请在微信客户端打开')
//  }
//  if (0 === apiList.length) {
//  apiList = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'showMenuItems', 'hideOptionMenu', 'closeWindow']
//  }
//  wechatSignatureApi({url:window.location.href}).then(r=>{
//  wx.config({
//  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//  appId: r.appId, // 必填，公众号的唯一标识
//  timestamp: r.timestamp, // 必填，生成签名的时间戳
//  nonceStr: r.nonceStr, // 必填，生成签名的随机串
//  signature: r.signature,// 必填，签名
//  jsApiList:apiList // 必填，需要使用的JS接口列表
//  });
//  wx.ready(function(){
//  wx.hideOptionMenu();
//  resolve();
//  });
//  wx.error(function(){
//  reject('微信签名失败')
//  //Toast('微信签名失败');
//  });
//    }).catch(()=>{
//  reject('获取签名信息失败')
//  //Toast('获取签名信息失败');
//  })
//  })
//  }
//    /**
//  * 分享给朋友
//  * @param config
//  * @param callback
//  */
//  function shareFriend(config,callback){
//  wx.onMenuShareAppMessage({
//  title: config.shareTitle, // 分享标题
//  desc: config.shareBody, // 分享描述
//  link: config.shareUrl, // 分享链接
//  imgUrl: config.shareImg, // 分享图标
//  //type: '', // 分享类型,music、video或link，不填默认为link
//  //dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//  success: function () {
//  callback() //官方说这个可能不会调用了吧
//  },
//  cancel: function () {
//  //Toast('分享失败');
//  }
//  });
//  }
//    /**
//  * 分享到朋友圈
//  * @param config
//  * @param callback
//  */
//  function shareFriendQ(config,callback){
//    wx.onMenuShareTimeline({
//  title: config.shareTitle, // 分享标题
//  link: config.shareUrl, // 分享链接
//  imgUrl: config.shareImg, // 分享图标
//  success: function () {
//  callback()//官方说这个可能不会调用了吧
//  //Toast('分享成功');
//  },
//  cancel: function () {
//  //Toast('分享失败');
//  }
//  });
//  }
