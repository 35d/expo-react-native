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
  count: 10,
};

const createMiddlewares = () => {
  const middlewares = [logger];
  return middlewares;
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_PRICE':
      return { ...state, ...action.payload };
    case 'INCREMENT_COUNT':
      const count = state.count + 1;
      return { ...state, count };
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...createMiddlewares())));

const mapStateToProps = (state) => ({ ...state });

const ConnectedAppScreen = connect(mapStateToProps)(HomeIndex);

export default class RootComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeIndex />
      </Provider>
    );
  }
}
