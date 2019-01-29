// @flow

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider, connect } from 'react-redux';
import HomeIndex from './src/Views/Containers/HomeIndex';

const INITIAL_STATE = {
  btc: 0,
  ltc: 0,
  euro: 0,
  eth: 0,
  isAvailable: false,
};

const createMiddlewares = () => {
  const middlewares = [logger];
  return middlewares;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return { ...state, ...action.state };
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...createMiddlewares())));

const mapStateToProps = (state) => {
  return { ...state };
};

const ConnectedAppScreen = connect(mapStateToProps)(HomeIndex);

export default class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedAppScreen />
      </Provider>
    );
  }
}
