const path = require('path')
const { SRC_PATH, DIST_PATH, ISDEV } = require('./variable')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        path: path.join(SRC_PATH, 'index.tsx')
    },
    output: {
        path: DIST_PATH,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.tsx', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx)$/,
                loader: 'babel-loader',
                exclude : /node_modules/
            },
            {
                test: /\.(css)$/,
                use: ['style-loader' , 'css-loader'],
                exclude : /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'public/index.html',// 定义的html为模板生成 从根路径开始查找
          inject: 'body',
          minify: ISDEV ? {} : {// 压缩HTML文件
            removeComments: true,//去除注释
            collapseWhitespace: true,//去除空格
          },
        }),
      ]
}