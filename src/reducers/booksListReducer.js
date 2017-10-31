import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function booksListReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.GET_BOOKS:
      return action.books;

    default: return state;
  }
}
