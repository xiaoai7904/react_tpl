/**
 * 系统状态管理
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as globalStore from './globalStore/reducer';
import thunk from 'redux-thunk';

let store = createStore(
  combineReducers({...globalStore}),
  applyMiddleware(thunk)
);

export default store;