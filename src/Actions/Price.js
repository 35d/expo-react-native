// @flow
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
