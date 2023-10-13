import * as a from './actionTypes'

const initialState = []

export default function booksReducer(state = initialState, action) {
  const {type, payload} = action

  switch (type) {
    case a.ADD_BOOK:
      return [...state, payload]
    case a.DELETE_BOOK:
      return []
    case a.TOGGLE_FAVORITE:
      return
    default:
      return state
  }
}
