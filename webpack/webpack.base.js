const path = require('path')
const { SRC_PATH, DIST_PATH, ISDEV } = require('./variable')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const threadLoader = require('thread-loader')
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const jsWorkerPool = {
    worker: 2,
    poolTimeout: 2000
}
const cssWorkerPool = {
    workerParallelJobs: 2,
    poolTimeout: 2000
}

threadLoader.warmup(jsWorkerPool, ['babel-loader'])
threadLoader.warmup(cssWorkerPool, ['css-loader','style-loader'])

module.exports = {
    cache : {
        type : 'filesystem'
    },
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
                use: [
                    {
                        loader: 'thread-loader',
                        options: jsWorkerPool
                    },
                    {
                        loader: 'babel-loader',
                        options: { cacheDirectory: true }
                    }
                ],
                include: SRC_PATH,
                exclude: /node_modules/
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
            
                    'css-loader',
                {
                    loader : 'thread-loader',
                    options : cssWorkerPool
                }
                    ],

                exclude: /node_modules/
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
        // new HardSourceWebpackPlugin(),
    ]
}