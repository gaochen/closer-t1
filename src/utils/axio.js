import axios from 'axios'
import baseUrl from '../config';
const axio = axios.create({ 
    baseURL: process.env.BASE_API, // node环境的不同，对应不同的baseURL
     timeout: 15000, // 请求的超时时间
      withCredentials: true // 允许携带cookie
  })
  // http request 拦截器 
axio.interceptors.request.use(
  config => {
    let reqUrl = baseUrl.server + config.url
    config.url = reqUrl;
    if (!ENV.app) {
      config.headers['Closer-Agent'] = 'Closer-H5';
    } else {
      if (ENV.app && ENV.ios) {
        config.headers['Closer-Agent'] = 'Closer-Ios';
      } else if (ENV.app && ENV.android) {
        config.headers['Closer-Agent'] = 'Closer-Android';
      }
    }

    if (Cookies.get("h5cookies")) {
      config.headers['X-Udid'] = Cookies.get("h5cookies");
    }
    config.headers['X-Adid'] = Cookies.get('h5Adid') || 'closer-t1'
    if (Cookies.get("token") && config.url.indexOf("auth") == -1 && config.url.indexOf("account") == -1 || Cookies.get("token") && config.url.indexOf("closer_account.bind_phone") != -1) {
      config.headers.Authorization = Cookies.get("token");
    }
    return config;
  },
  err => {
    return Promise.reject(err).catch(err);
  });
// http response 拦截器 
axio.interceptors.response.use(
  response => {
    return response;
  },
  (err) => {
    let Promise = require('promise-polyfill').default;
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break

        case 401:
          err.message = '未授权，请登录'
          router.push({ name: 'worldcupIndex' })
          break

        case 403:
          err.message = '拒绝访问'
          router.push({ name: 'worldcupIndex' })
          break

        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break

        case 408:
          err.message = '请求超时'
          break

        case 500:
          err.message = '服务器内部错误'
          break

        case 501:
          err.message = '服务未实现'
          break

        case 502:
          err.message = '网关错误'
          break

        case 503:
          err.message = '服务不可用'
          break

        case 504:
          err.message = '网关超时'
          break

        case 505:
          err.message = 'HTTP版本不受支持'
          break

        default:
      }
    } else {
      err.message = '网络错误，请稍后再试！'
    }
    if (err && err.response && err.response.data && err.response.data.message) {
      console.warn(err.response.data.message)
    } else {
      console.warn(err.message)
    }
    return Promise.reject(err).catch(err)
  });
export default axio