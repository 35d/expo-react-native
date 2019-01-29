// @flow
export const REQUEST_GROUPED_CAMPUS_LOGOS = 'REQUEST_GROUPED_CAMPUS_LOGOS';
export const RECEIVE_GROUPED_CAMPUS_LOGOS = 'RECEIVE_GROUPED_CAMPUS_LOGOS';

export type PriceAction = {
  type: 'UPDATE_PRICE' | 'UPDATE_PRICE',
  payload: {
    btc: number,
    ltc: number,
    eth: number,
    euro: number,
    isAvailable: boolean,
  },
};

export function priceUpdate(btc, ltc, eth, euro): PriceAction {
  return { type: 'UPDATE_PRICE', payload: { btc, ltc, eth, euro, isAvailable: true } };
}
