import React, { Component } from 'react';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return <div className="loading">加载中...</div>;
  }
}
