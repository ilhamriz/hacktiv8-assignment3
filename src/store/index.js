import { createStore } from 'redux';

const initialState = {
  head: ['', 'WE BUY', 'EXCHANGE RATE', 'WE SELL'],
  list: [
    {
      base: 'CAD',
      money: ['001.7434', '001.7092', '001.6750']
    },
    {
      base: 'IDR',
      money: ['18522.3525', '18159.1691', '17795.9857']
    },
    {
      base: 'JPY',
      money: ['143.4565', '140.6437', '137.8308']
    },
    {
      base: 'CHF',
      money: ['001.3114', '001.2857', '001.2600']
    },
    {
      base: 'EUR',
      money: ['001.1937', '001.1703', '001.1469']
    },
    {
      base: 'USD',
      money: ['001.3141', '001.2884', '001.2626']
    },
  ]
}

const reducer = (state = initialState, action) => state;

const store = createStore(reducer);

export default store;