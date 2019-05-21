import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class RouteWithSubRoutes extends Component {
  render() {
    console.log('RouteWithSubRoutes');
    const { router, path, isLogin, location } = this.props;
    if (!router.permission) {
      return <Route path={path} render={props => <router.component {...props} routes={router.routes} />} />;
    }
    // 判断是否登录,登录之后直接跳转
    if (isLogin) {
      return <Route path={path} render={props => <router.component {...props} routes={router.routes} />} />;
    }
    //没有匹配成功直接进入登录页
    if (path !== '/login') {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location }
          }}
        />
      );
    }
    return '';
  }
}
const mapStateToProps = state => {
  const { isLogin } = state.loginStatus;
  return { isLogin };
};

export default connect(mapStateToProps)(RouteWithSubRoutes);
