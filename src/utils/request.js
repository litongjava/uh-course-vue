import axios from "axios"
import config from "../config";

let baseURL = config[process.env.NODE_ENV].baseURL;

/**
 * 处理错误信息
 * status:状态吗
 * info:具体信息
 */

const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      console.log("语义错误");
      break;
    case 401:
      console.log("服务器认证失败");
      break;
    case 403:
      console.log("服务器请求拒绝执行");
      break;
    case 404:
      console.log("请检查网路请求地址");
      break;
    case 500:
      console.log("服务器发生意外");
      break;
    case 502:
      console.log("服务器无响应");
      break;
    default:
      console.log(info);
      break;
  }
};


/**
 * 创建Axios对象
 */

const instance = axios.create({
  // 公共配置
  baseURL: baseURL,
  timeout: 5000,
  // withCredentials: true
});

/**
 * 拦截器
 */

instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  // 完成了
  response => response.status === 200 ? Promise.resolve(response) : Promise.reject(response),
  error => {
    // 错误信息的处理
    const {response} = error;
    if (response) {
      errorHandle(response.status, response.info)
    } else {
      console.log("网络请求被中断了");
    }
  }
);

// get和post等请求方案
export default instance