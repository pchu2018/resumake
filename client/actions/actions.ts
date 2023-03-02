// import actionType constants
import { createAction } from '@reduxjs/toolkit';

// actionTypes need - just for reference

export const addMarket = createAction<string>('ADD_MARKET');
export const setNewLocation = createAction<string>('SET_NEW_LOCATION');
export const addCard = createAction<number>('ADD_CARD');
export const deleteCard = createAction<number>('DELETE_CARD');
