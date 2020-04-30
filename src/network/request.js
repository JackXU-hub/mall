import axios from 'axios'
import {getToken} from "../utils/auth";


export function request(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
  })

  instance.defaults.headers.common["token"] = getToken();


  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err => {
    console.log(err)
  });

  instance.interceptors.response.use(res => {
    console.log(res)
    return res
  }, err => {
    console.log(err)
  });

  return instance(config)
}
