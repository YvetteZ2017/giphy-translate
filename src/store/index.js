import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import input from './input';
import translate from './translate';
import gifList from './gifList';
import modal from './modal';


const reducer = combineReducers({input, translate, gifList, modal})

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
export * from './gifList';
export * from './modal';
