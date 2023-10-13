import * as a from './actionTypes'

export function addBook(newBook) {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  }
}
