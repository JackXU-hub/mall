import  {login, getInfo} from "network/login";
import { getToken, setToken, removeToken } from 'utils/auth';
import { Message } from 'element-ui';
import el from "element-ui/src/locale/lang/el";
import da from "element-ui/src/locale/lang/da";

const  user = {
    state: {
        token: getToken(),
        name: 'admin',
        orgCode: '',
        orgName: '',
        dptCode: '',
        dptName: '',
        roles: []
    },

    mutations: {
       d: (state, token) => {
            state.token = token;
        },

        ['setInfo']: (state, info) => {
            state.name = info.userName;
            state.orgCode = info.orgCode;
            state.orgName = info.orgName;
            state.dptCode = info.dptCode;
            state.dptName = info.dptName;
        },
        ['setRoles']: (state, roles) => {
           state.roles = roles
        }
    },

    actions: {
        // 登录
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {

                login(userInfo.account, userInfo.passWord, userInfo.code)
                    .then(response => {

                        if (response.data.msg=='success'){
                            const token = response.data.result;
                            setToken(token);
                            commit('setToken', token);
                            Message.success('登录成功')
                            resolve('OK');
                        }else {
                            Message.error(response.data.msg)
                            resolve('Error');
                        }

                    })
                    .catch(error => {
                        reject(error);
                        Message.error(error)
                    });
            });
        },

        // 获取用户信息
        GetInfo({ commit, dispatch, state }) {
            return new Promise((resolve, reject) => {
                getInfo()
                    .then(response => {
                        const data = response.data.result;
                        if (data.resourceList && data.resourceList.length) {
                            // 验证返回的roles是否是一个非空数组
                            commit('setRoles', data.resourceList);
                            commit('setInfo', data);
                            resolve(response);
                        } else {
                            dispatch('FedLogOut').then(() => {
                                Message({
                                    type: 'warning',
                                    message: '对不起，您没有当前项目权限'
                                });
                                reject('getInfo: roles must be a non-null array !');
                            });
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
        },
    }
}


export default user
