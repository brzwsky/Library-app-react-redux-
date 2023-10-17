import * as a from './actionTypes'

export function addBook(newBook) {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  }
}

export function deleteBook(id) {
  return {
    type: a.DELETE_BOOK,
    payload: id,
  }
}