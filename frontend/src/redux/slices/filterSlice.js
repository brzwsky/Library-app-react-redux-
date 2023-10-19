import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
}

const filterSlice = createSlice({
  name: 'filterReducer',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload //<-- because of Immer library
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    resetFilters: (state) => initialState,
  },
})

export const {setTitleFilter, setAuthorFilter, resetFilters} =
  filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author

export default filterSlice.reducer
