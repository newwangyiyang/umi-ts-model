const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssPresetEnv = require('postcss-preset-env');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

export const postCssPlugins = [ // vw移动端适配
    postcssAspectRatioMini({}),                   
    postcssPxToViewport({ 
      viewportWidth: 375, // (Number) The width of the viewport. 
      viewportHeight: 1334, // (Number) The height of the viewport. 
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
      viewportUnit: 'vw', // (String) Expected units. 
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
    }),
    postcssWriteSvg({
      utf8: false
    }),
    postcssPresetEnv({}),
    postcssViewportUnits({
      filterRule: (rule: any) => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    }),
    // preset: "advanced", 
    cssnano({
      autoprefixer: false, 
      "postcss-zindex": false 
    })
]


export const compressUglifyPlugins = (config: any) => { // 压缩代码量,及webpack常用配置
  
  // 打包优化 uglifyjs-webpack-plugin 配置
  if (process.env.NODE_ENV === 'production') {
    config.merge({
      plugin: {
        install: {
          plugin: require('uglifyjs-webpack-plugin'),
          args: [{
            sourceMap: false,
            uglifyOptions: {
              compress: {
                // 删除所有的 `console` 语句
                drop_console: true,
              },
              output: {
                // 最紧凑的输出
                beautify: false,
                // 删除所有的注释
                comments: false,
              },
            },
          }],
        },
      },
    });
  }
}
