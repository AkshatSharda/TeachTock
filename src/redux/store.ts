import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import homeReducer from './slice/home-slice';

const reducer = combineReducers({
  // here we will be adding reducers
  homeReducer,
});

const store = configureStore({
  reducer,
});

export default store;
export type AppDispatch = typeof store.dispatch;
