import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { $http } from '@/store/globalStore/action';
import RouterWithSubRouters from '@/router/routerWithSubRouters.class'
import './home.scss';

class Home extends Component {
  componentDidMount() {
    console.log('home', this.props );
  }
  render() {
    return (
      <div className="home">
        <Link to="/login">登录</Link>
        <br />
        <Link to="/home/test">二级页面</Link>
        <div className="home-panel">
            {this.props.routes.map((router, index) => {
              return <RouterWithSubRouters key={index} path={router.path} router={router}/>
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  $http: bindActionCreators($http, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
