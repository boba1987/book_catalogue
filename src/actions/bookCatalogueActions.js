import * as types from '../constants/actionTypes';

export function getBooks(books) {
  return {
    books,
    type: types.GET_BOOKS
  };
}
