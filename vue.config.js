// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
const path = require("path");
const webpack = require('webpack')
console.log("webpackwebpackwebpackwebpackwebpack0000000",webpack)
require("babel-polyfill");
// 打包时的目录名
const appName = "app";
function resolve(dir) {
  return path.join(__dirname, dir);
}
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" + appName : "/", // 部署应用包时的基本 URL
  outputDir: appName, // 在npm run build时 生成文件的目录 type:string, default:'dist'
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave:false,//是否使用eslint
//   lintOnSave: process.env.NODE_ENV !== "production",//是否使用eslint
  devServer:{
    port: 8080, // 端口号
    host: "0.0.0.0",
    open:true,
    overlay: {
        warnings: true,
        errors: true
    },
    https: false, // https:{type:Boolean}
    proxy: {
      "/api": {
          target: "https://api.apiopen.top", // 接口域名
          secure: false, // 如果是https接口，需要配置这个参数為true
          ws: true,
          changeOrigin: true, // 是否跨域
          pathRewrite: {
              "^/api": "/" // 需要rewrite的,把api替换**，'^/api': '/'：把api替换成/
          }
      }
      // "/api": {
      //     target: "https://api.apiopen.top", // 接口域名
      //     secure: false, // 如果是https接口，需要配置这个参数為true
      //     ws: true,
      //     changeOrigin: true, // 是否跨域
      //     pathRewrite: {
      //         "^/api": "/api" // 需要rewrite的,
      //     }
      // }
  } // 配置多个代理
  },
  configureWebpack: config => {
      // 入口文件
      config.entry.app = ["babel-polyfill", "./src/main.js"];
      let devPlugins = [
          new webpack.ProvidePlugin({
              $:"jquery",
              jQuery:"jquery",
              "windows.jQuery":"jquery"
            })
        ];
        // 删除console插件
      let plugins = [
          new UglifyJsPlugin({
              uglifyOptions: {
                  compress: {
                      warnings: false,
                      drop_console: true,
                      drop_debugger: true
                  },
                  output: {
                      // 去掉注释内容
                      comments: true
                  }
              },
              sourceMap: false,
              parallel: true
          })
      ];
      // 只有打包生产环境才需要将console删除
      if (process.env.VUE_APP_build_type == "production") {
          config.plugins = [...config.plugins, ...plugins];
      }
      config.plugins = [...config.plugins, ...devPlugins];
  },
// 允许对内部的 webpack 配置进行更细粒度的修改。
chainWebpack: config => {
  // 命名

  config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@views", resolve("src/views"))
      .set("@components", resolve("src/components"))
      .set("@utils", resolve("src/assets/utils"));
  // 打包文件带hash
  config.output.filename("[name].[hash].js").end();

  // 为了补删除换行而加的配置
  config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
          // modify the options...
          options.compilerOptions.preserveWhitespace = true;
          return options;
      });
}


};
