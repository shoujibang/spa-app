module.exports = {
    plugins:{
        //主要功有是解决@import引入路径问题。使用这个插件，
        //可以让你很轻易的使用本地文件、node_modules或者web_modules的文件。
        //这个插件配合postcss-url让你引入文件变得更轻松
    // 'postcss-import': {},
    //  'postcss-aspect-ratio-mini': {},
    // //主要用来处理移动端1px的解决方案。该插件主要使用的是border-image和
    // //background来做1px的相关处理
    //  'postcss-write-svg': {
    //    utf8: false
    //  },
    // // cssnext该插件可以让我们使用CSS未来的特性，
    // //其会对这些特性做相关的兼容性处理
    // //  'postcss-cssnext': {},
    //  'postcss-px-to-viewport': {
    //    // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
    //    viewportWidth: 750,
    //    // 视窗的高度，根据750设备的宽度来指定，一般指定1334，
    //    //也可以不配置
    //    viewportHeight: 1334,
    //    // 指定`px`转换为视窗单位值的小数位数
    //    unitPrecision: 3,
    //    // 指定需要转换成的视窗单位，建议使用vw
    //    viewportUnit: 'vw',
    //    // 指定不转换为视窗单位的类，可以自定义，可以无限添加,
    //    //建议定义一至两个通用的类名
    //    selectorBlackList: ['.ignore', '.hairlines'],
    //    // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
    //    minPixelValue: 1,
    //    // 允许在媒体查询中转换`px`
    //    mediaQuery: false
    //  },
    // //  'postcss-viewport-units': {
    // //    filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    // //  },
    // //主要用来压缩和清理CSS代码
    // //前者是有重复调用，后者是一个讨厌的东东。只要启用了这个插件，
    // //z-index的值就会重置为1。这是一个天坑，
    // //千万记得将postcss-zindex设置为false。
    //  cssnano: {
    //    preset: 'advanced',
    //    autoprefixer: false,
    //    'postcss-zindex': false
    //  },
    'autoprefixer': {
        //  browsers: ['Android >= 4.0', 'iOS >= 7']
     },    
  //rem适配    
    'postcss-pxtorem': {
        // "rootValue": 75,结果为：设计稿元素尺寸/75，
        //比如元素宽750px,最终页面会换算成 10rem
        rootValue: 37.5,
        propList: ['*'],
        //忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
        selectorBlackList:[
            ".ig-",
            ".range"
        ]    
      }

    }
}