
import {request} from './request'
import { formData } from 'utils/index';


/* 登陆 */
export function login(account, password, verifyCode) {
    console.log('account'+ account + password + verifyCode)
    return request({
        url: '/omc/login',
        method: 'post',
        data: formData({
            account,
            password,
            verifyCode
        })
    });
}

//获取用户信息
export function getInfo() {
    return request({
        url: '/omc/account/queryLoginUserInfo',
        method: 'get'
    });
}
