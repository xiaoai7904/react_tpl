import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routerConfig from './routerConfig';
import notFound from '@/components/404/404.class';
import RouterWithSubRouters from './routerWithSubRouters.class'
/**
 * 全局路由配置类
 */
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routerConfig.map((router, index) => {
            return <RouterWithSubRouters key={index} path={router.path} router={router}/>
          })}
          <Route component={notFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

