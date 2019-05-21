// 全局状态管理
// 全局数据可以在这里统一管理

import { GLOBAL_IS_LOGIN, GLOBAL_REQUEST_SATRT, GLOBAL_REQUEST_SUCCESS, GLOBAL_REQUEST_FAILURE } from '../actionType/index';
import { http } from '@/utils';
// 改变登录状态
export const changeLoginStatus = category => ({
  type: GLOBAL_IS_LOGIN,
  category
});
// 请求开始
export const globalRequestStart = category => ({
  type: GLOBAL_REQUEST_SATRT,
  category
});
// 请求成功
export const globalRequestSuccess = (data, category) => ({
  type: GLOBAL_REQUEST_SUCCESS,
  data,
  category
});
// 请求失败
export const globalRequestFailure = (data,category) => ({
  type: GLOBAL_REQUEST_FAILURE,
  data,
  category
});
// 公用请求
export const $http = ({ url, params, moduleName, type = 'post' }) => dispatch => {
  dispatch(globalRequestStart(moduleName));
  return http[type](url, params).then(
    res => {
      return dispatch(globalRequestSuccess(res, moduleName));
    },
    err => {
      return dispatch(globalRequestFailure(err, moduleName));
    }
  );
};
