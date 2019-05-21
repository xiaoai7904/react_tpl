/**
 * 请求工具
 */
import axios from 'axios';

class Http {
  constructor() {
    this.$http = axios.create({});
    this.init();
  }
  init() {
    this._defaultsConfig();
    this._interceptRequest();
    this._interceptResponse();
  }
  _defaultsConfig() {
    this.$http.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
    this.$http.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
    this.$http.defaults.responseType = 'json';
    this.$http.defaults.validateStatus = function(status) {
      return true;
    };
  }
  _interceptRequest() {
    this.$http.interceptors.request.use(request => request, error => Promise.reject(error));
  }
  _interceptResponse() {
    this.$http.interceptors.response.use(response => Promise.reject(response), error => Promise.reject(error));
  }
  get(url, params) {
    return this.$http.get(url, params);
  }
  post(url, params) {
    return this.$http.post(url, params);
  }
}

Http.of = function() {
  return new Http();
};

export default Http.of();
