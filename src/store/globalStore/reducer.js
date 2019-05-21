// 全局状态管理
// 全局数据可以在这里统一管理
import { combineReducers } from 'redux';
import { GLOBAL_IS_LOGIN, GLOBAL_REQUEST_SATRT, GLOBAL_REQUEST_SUCCESS, GLOBAL_REQUEST_FAILURE } from '../actionType/index';

let defaultState = {
  isLogin: false // 是否登录标示
};

// 修改登录状态
export const loginStatus = (state = defaultState, action) => {
  switch (action.type) {
    case GLOBAL_IS_LOGIN:
      return { ...state, isLogin: action };
    default:
      return { ...state };
  }
};

// 公用请求
export const http = (state = {}, action) => {
  switch (action.type) {
    case GLOBAL_REQUEST_SATRT:
      return { ...state, [action.category]: { isFetching: true } };
    case GLOBAL_REQUEST_SUCCESS:
      return { ...state, [action.category]: { isFetching: false, data: action.data } };
    case GLOBAL_REQUEST_FAILURE:
      return { ...state, [action.category]: { isFetching: false, data: [] } };
    default:
      return { ...state };
  }
};

export default combineReducers({
  loginStatus,
  http
});
