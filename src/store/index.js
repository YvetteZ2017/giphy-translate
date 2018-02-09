import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import input from './input';
import translate from './translate';
import gifs from './gifs';
import modal from './modal';


const reducer = combineReducers({input, translate, gifs, modal})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
  )
);

export default store;
export * from './input';
export * from './translate';
export * from './gifs';
export * from './modal';
