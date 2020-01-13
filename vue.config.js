const path = require("path");
const resolve = dir =>path.join(__dirname,dir);
module.exports = {
  outputDir: './hybirdApp/www', //hybirdapp构建配置
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,
  // 设置为false可以加速生产构建
  productionSourceMap: false,
  devServer:{
    open:true,
    //  将以下三项设置为false,关闭eslint
    //  overlay: {
    //      warnings: false,
    //      errors: false
    //  },
    //  lintOnSave: false,
    proxy:{
      "/devapi": {
        target: "https://api.apiopen.top", // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数為true
        ws: true,
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/devapi': '/' // 需要rewrite的,
        }
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // vant-demo 如果构建的是二级域名可以改变该项
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/'
  configureWebpack:config =>{
    config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  //更改webpack配置
  chainWebpack:config =>{
    config.resolve.alias
    .set("@assets", resolve("src/assets"))
    .set("@views", resolve("src/views"))
    .set("@components", resolve("src/components"))
    .set("@util", resolve("src/assets/util"));
  }
};
