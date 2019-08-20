- 流程

1. 安装 webpack
2. 定义入口出口文件
3. 解析文件(css,文件,sass)和代码编译
4. HTML，css 文件抽离
5. clean 前次打包
6. 配置 alias ,使其路径简化，拥有引用路径的功能
7. 配置 webpackdev server 使其具有 start 能力
8. 配置 watch
9. 代码压缩

- 初始化
  `npm init`
- 安装
  `yarn add webpack webpack-cli`

- 执行 默认会对 src 下的 index 的文件进行打包 到 dist 下的 main.js
  `npx webpack`

- 定义入口出口文件

```
    const path = require('path')

    module.exports = {
        mode:'development',     //指定开发环境下
        entry:'./src/index.js' ,   //入口文件
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'webpack.js'
        }
    }
```

- devtool 线下一般使用`cheap-module-eval-source-map` 线上不要 eval

- 若没有 webpack.config.js 可以以这个代替
  `webpack --config config.js`

- 引入文件时要对文件进行解析

```
npm install file-loader --save-dev   //文件解析
    npm install --save-dev css-loader    //css解析
    npm install --save-dev ts-loader
```

- 制定 module 对css  sass  图片 和字体进行解析  ，对代码进行babel编译

```
   module:{
        rules: [
             {                                           //css文件解析
        test: /\.css$/,
        use: [
          {
          loader: 'css-loader',
          options: {
            modules: true
          },
          }
        ]
      },
      {                                      //字体文件解析
        test: /\.(eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.scss$/,                    //sass文件解析
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif)$/i,       //图片解析
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
       {
        test: /\.m?js$/,                       //代码编译
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],  //选择编译前的代码版本
          }
        }
      },
          ],
        }
```
 - HTML,css抽离 (因为这个时候输出的输出文件是一个webpack.js文件，而看不到html,css不够直观) clean清除前面次的打包文件
```
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
          new CleanWebpackPlugin(['dist']),
          new ExtractTextPlugin("styles.css"),
          new HtmlWebpackPlugin({
            inject:'body',                    //制定解析内容
            template: "./src/index.html",     //制定解析目标文件
            filename: "index.html",           //输出的目标文件
            // chunks: ["commons", name]
          })
          ],
}
```

 - 配置watch
 在package.json下
```
  "scripts": {
    "watch": "webpack --watch",   //加入此句，package.json是严格json模式，不能存在注释和其他多余符号
    "start": "webpack-dev-server --open"
  },
```


 - 配置 alias ,使其路径简化，拥有引用路径的功能
 ```
  resolve:{
  	alias:{
  		Scss: path.resolve(__dirname, 'src/style/util/'),
  	}
  },

  import Scss from './src/style/util/scss.scss' 可以用后面这种替代
  import Scss from 'Scss/scss.scss
 ```

-  配置 webpackdev server 使其具有 start 能力
```
devServer: {
    contentBase: './dist',   //目标文件
    port: 8008,              //配置端口 默认8080
    open: true,             
    proxy: {                //配置代理
      "/weatherApi": {
        target: "https://www.apiopen.top",
        changeOrigin: true
      }
    },
    hot: true,            //热更新
    hotOnly: true,
  },
```
- 代码压缩
```
 optimization: {
    minimize: true, 
  },
```