// @flow
export type CountAction = {
  type: 'INCREMENT_COUNT' | 'DECREMENT_COUNT',
  payload: {},
};

export function incrementCount(btc, ltc, eth, euro): CountAction {
  return { type: 'INCREMENT_COUNT', payload: {} };
}

export function decrementCount(btc, ltc, eth, euro): CountAction {
  return { type: 'DECREMENT_COUNT', payload: {} };
}
