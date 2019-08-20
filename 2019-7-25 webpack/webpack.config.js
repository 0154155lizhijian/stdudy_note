const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch:true,
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.js'
  },
  optimization: {
    minimize: true, 
  },
  watchOptions: {
    aggregateTimeout: 300,   
    poll: 1000
  },
  devServer: {
    contentBase: './dist',
    port: 8008,
    open: true,
    proxy: {  
      "/weatherApi": {
        target: "https://www.apiopen.top",
        changeOrigin: true
      }
    },
    hot: true, 
    hotOnly: true,
  },
  resolve:{
  	alias:{
  		Scss: path.resolve(__dirname, 'src/style/util/'),
  	}
  },
  plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
          inject:'body',
          template: "./src/index.html",
          filename: "index.html",
          // chunks: ["commons", name]
        })
        ],
  module: {
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
}

