// 页面路由配置
import Loadable from 'react-loadable';
import Loading from '@/components/loading/loading.class';

const loadable = filename =>
  Loadable({
    loader: () => import(`@/${filename}`),
    loading: Loading
  });

const routes = [
  {
    path: '/home',
    component: loadable('pages/home/home.class'),
    permission: true,
    routes: [
      {
        path: '/home/test',
        component: loadable('components/test/test.class'),
        permission: true
      }
    ]
  },
  {
    path: '/login',
    component: loadable('pages/login/login.class')
  },
  {
    path: '/404',
    component: loadable('components/404/404.class')
  }
];

export default routes;
