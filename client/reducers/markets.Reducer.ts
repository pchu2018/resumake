// just for reference
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.addMarket, (state, action) => {
      state.lastMarketId ++;
      state.totalMarkets ++;
      state.marketList.push({
        marketId: state.lastMarketId,
        location: state.newLocation,
        cards: 0,
        percentage: 0,
      });
      state.newLocation = '';
    })
    .addCase(actions.setNewLocation, (state, action) => {
      state.newLocation = action.payload;
    })
    .addCase(actions.addCard, (state,action) => {
      state.marketList[action.payload].cards ++;
      state.totalCards ++;
    })
    .addCase(actions.deleteCard, (state,action) => {
      if (state.marketList[action.payload].cards === 0) return;
      state.marketList[action.payload].cards --;
      state.totalCards --;
    })
});

export default marketsReducer;
