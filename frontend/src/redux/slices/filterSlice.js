import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
	isFavorite: false
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
		setToggleFilter: (state) => {
			state.isFavorite = !state.isFavorite
		},
    resetFilters: () => initialState,
  },
})

export const {setTitleFilter, setAuthorFilter, setToggleFilter, resetFilters} =
  filterSlice.actions

export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectToggleFilter = (state) => state.filter.isFavorite

export default filterSlice.reducer
