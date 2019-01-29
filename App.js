// @flow

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import HomeIndex from './src/Views/Containers/HomeIndex';
import reducer from './src/Reducers/index';

const createMiddlewares = () => {
  const middlewares = [logger];
  return middlewares;
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...createMiddlewares())));

export default class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeIndex />
      </Provider>
    );
  }
}
