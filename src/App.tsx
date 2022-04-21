import React from 'react';

import store from './store/rootStore';
import {Provider} from 'react-redux';

import Home from './pages/Home';

const Root = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default Root;
