
const ip = require("ip").address();
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network',
                'utils': '@/utils'
            }
        }
    },

    // 所有 webpack-dev-server 的选项都支持
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        open: true,
        host: ip,
        port: 9527,
        hotOnly: false,
        //将任何未知请求 (没有匹配到静态文件的请求) 代理到该字段指向的地方
        proxy: {
            '/api': {
                target: 'https://omc.stage.ybm100.com/',
                changeOrigin: true,
                // pathRewrite: {
                // 	'^/api': ''
                // }
            },
        },
        before: app => { }
    },
}
