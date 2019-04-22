import { IConfig } from 'umi-types';
import { postCssPlugins, compressUglifyPlugins } from './plugin.config'
import routes from './router.config'
const path = require('path');
// ref: https://umijs.org/config/
const config: IConfig =  {
  // 基本配置
  history: 'hash', // 已hash作为路由跳转的方式
  outputPath: '/YingChuanNXTZ', // 打包的输出路径
  base: '/YingChuanNXTZ/', //指定 react-router 的 base，部署到非根目录时需要配置
  publicPath: '/YingChuanNXTZ/', // 指定 webpack 的 publicPath，指向静态资源文件所在的路径
  hash: true, // 是否开启 hash 文件后缀
  targets: { // 配置浏览器最低版本，会自动引入 polyfill 和做语法转换，配置的 targets 会和合并到默认值，所以不需要重复配置
    android: 5,
    ios: 7,
    chrome: 58,
    ie: 9,
  },
  
  routes,

  treeShaking: true, // 打包时会去除无用代码
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  alias:{
    // 配置别名
    '@': path.resolve(__dirname, 'src/'),
    components: path.resolve(__dirname,'src/components'),
    utils: path.resolve(__dirname,'src/utils'),
    services: path.resolve(__dirname,'src/services'),
    models: path.resolve(__dirname,'src/models'),
    // themes:path.resolve(__dirname,'src/themes'),
    // images:path.resolve(__dirname,'src/assets')
  },

  extraPostCSSPlugins: postCssPlugins,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      fastClick: true,
      dynamicImport: { webpackChunkName: true },
      title: '步长制药',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  // webpack配置
  chainWebpack: compressUglifyPlugins,
}


export default config;
