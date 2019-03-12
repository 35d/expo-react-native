// @flow

export const INITIAL_STATE = {
  btc: 0,
  ltc: 0,
  euro: 0,
  eth: 0,
  isAvailable: false,
  count: 10,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_PRICE':
      return { ...state, ...action.payload };
    case 'INCREMENT_COUNT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT_COUNT':
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};

export default reducer;
