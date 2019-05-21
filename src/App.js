import React from 'react';
import { Provider } from 'react-redux';

import './styles/index.scss';
import Router from './router/index';
import store from '@/store/store';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
