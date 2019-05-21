import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { $http, changeLoginStatus } from '@/store/globalStore/action';
import { Either } from '@/module/index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.initState();
    this.bindEvent();
    console.log('login', this.props);
  }
  initState() {
    this.state = {
      username: '',
      password: ''
    };
  }
  bindEvent() {
    this.sumbit = this.sumbit.bind(this);
  }
  sumbit() {
    console.log(this.state);
    const { $http, changeLoginStatus, location, history } = this.props;
    $http({ url: 'https://www.baaidu.com', params: this.state, moduleName: 'Login' });
    changeLoginStatus(true);

    Either.of({ from: { pathname: '/home' } }, location.state).map(function(path) {
      return history.push(path.from.pathname);
    });
  }
  render() {
    return (
      <div className="login">
        <span>用户名</span>
        <input
          type="text"
          value={this.state.username}
          onChange={e => {
            this.setState({ username: e.target.value });
          }}
        />
        <span>密码</span>
        <input
          type="password"
          value={this.state.password}
          onChange={e => {
            this.setState({ password: e.target.value });
          }}
        />
        <button onClick={this.sumbit}>登录</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  $http: bindActionCreators($http, dispatch),
  changeLoginStatus: bindActionCreators(changeLoginStatus, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
