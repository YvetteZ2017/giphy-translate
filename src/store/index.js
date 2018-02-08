import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import input from './input';
import select from './select';
import gifList from './gifList';


const reducer = combineReducers({input, select, gifList})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger({ collapsed: true })
  )
);

export default store;
export * from './input';
export * from './select';
export * from './gifList';
