
const path = require('path')
const ip = require("ip").address();
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
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
                //target: 'https://omc.dev.ybm100.com/',
                target: 'https://erp.test.ybm100.com/',
                changeOrigin: true,
                // pathRewrite: {
                // 	'^/api': ''
                // }
            },
        },
        before: app => { }
    },
}
