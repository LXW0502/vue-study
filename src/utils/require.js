import axios from 'axios';
import qs from 'qs';
//先创建实例require
var require = axios.create({//axios的实例对象
  baseURL: '/api/v1',
  timeout: 60000,//60s后台无响应则超时报错
  // headers: {},
  withCredentials: true,//跨域时转发cookie信息
});

// axios.interceptors.request.use添加请求拦截器  对require实例的监听
require.interceptors.request.use(function (config) {

    // 在发送请求之前做些什么
    //console.log(config,123);
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });



export default require;