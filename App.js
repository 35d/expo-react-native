// @flow

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './src/Reducers/index';
import AppNavigator from './src/Navigation/AppNavigator';

const createMiddlewares = () => {
  const middlewares = [logger];
  return middlewares;
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...createMiddlewares())));

export default class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
