var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts', //polyfills - 我们在大多数现代浏览器中运行 Angular 程序时需要的标准填充物。
    'vendor': './src/vendor.ts', //vendor - 我们需要的提供商文件： Angular 、 Lodash 、 bootstrap.css ……
    'app': './src/main.ts' //app - 我们的应用代码。
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [{
        test: /\.ts$/, //ts - 一个用于把 TypeScript 代码转译成 ES5 的加载器，它会由 tsconfig.json 文件提供指导
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'] //angular2-template-loader - 用于加载 Angular 组件的模板和样式
      },
      {
        test: /\.html$/,
        loader: 'html' //html - 为组件模板准备的加载器
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/, //匹配应用级样式  
        exclude: helpers.root('src', 'app'), //排除了 /src/app 目录下的 .css 文件，因为那里放着我们的组件局部样式。
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/, //匹配组件局部样式 ( 就是在组件元数据的 styleUrls 属性中指定的那些 ) 。
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};