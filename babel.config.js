module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //配置按需引入vant、配置按需引入后，将不允许直接导入所有组件在main.js
  //直接引入
  plugins: [
    [
      'import',
      { libraryName: 'vant', libraryDirectory: 'es', style: true },
      'vant'
    ]
  ]
}
