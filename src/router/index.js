import Vue from 'vue'
import VueRouter from 'vue-router'
import {getToken} from "utils/auth";

const  Cart = () => import("views/shopcart/Shopcart")
const  Home = () => import("views/home/Home")
const  Main = () => import("views/home/Main")
const  Category = () => import("views/category/Category")
const  Profile = () => import("views/profile/Profile")
const  Login= () => import('views/login/Login')
const  OrderPool= () => import('views/order/OrderPool')
const  DistributeList= () => import('views/order/DistributeList')
const  stockDetail = () => import('views/home/stockDetail')
const  outboundAdjustment = () => import('views/home/outboundAdjustment')
const  logicalBatch = () => import('views/home/logicalBatch')
const  productNo = () => import('views/home/productNo')


Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/stockDetail',
        component: stockDetail
    },
    {
        path: '/outboundAdjustment',
        component: outboundAdjustment
    },
    {
        path: '/logicalBatch',
        component: logicalBatch
    },
    {
        path: '/productNo',
        component: productNo
    },
    {
        path: '/main',
        redirect: '/orderpool',
        component: Main,
        children: [
            {
                path: '/orderpool',
                component: OrderPool
            },
            {
                path: '/distributeList',
                component: DistributeList
            },
        ]
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    }
]

const  router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) =>{
    if (to.path === '/login') return next();
    const tokenStr = getToken();
    if (!tokenStr) return next('/login')
    next()
})


export default router
