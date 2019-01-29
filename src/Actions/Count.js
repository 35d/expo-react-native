// @flow
export type CountAction = {
  type: 'INCREMENT_COUNT',
  payload: {},
};

export function incrementCount(btc, ltc, eth, euro): CountAction {
  return { type: 'INCREMENT_COUNT', payload: {} };
}
