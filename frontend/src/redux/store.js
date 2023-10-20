import {configureStore} from '@reduxjs/toolkit'
import filterReducer from './slices/filterSlice'
import booksReducer from './slices/booksSlices'

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
})

export default store
