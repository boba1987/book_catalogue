import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

import booksListReducer from './booksListReducer';

const rootReducer = combineReducers({
  booksListReducer,
  routing: routerReducer
});

export default rootReducer;
