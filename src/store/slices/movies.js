import { createSlice, current } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    isLoading: false,
    data: null,
    error: null,
    originalData: []
  },
  reducers: {
    init: (state, action) => {
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    },
    setFilterData: (state, action) => {
      const originalData = current(state).originalData;
      const filterData = originalData.filter((v) => v.title.toLowerCase().startsWith(action.payload?.searchVal?.toLowerCase()))

      return {
        ...state,
        isLoading: false,
        data: filterData.length ? filterData : originalData
      }
    },
    setSortByAction: (state, action) => {
      let data = [...current(state).data];

      switch (action.payload?.action) {
        case "Episode":
          data.sort((a, b) => a.episode_id - b.episode_id)
          break;
        case "Year":
          data.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
          break
      }
      return {
        ...state,
        isLoading: false,
        data
      }
    },
    setMovies: (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload?.data,
        originalData: action.payload?.data,
      }
    },
    setError: (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: null,
        originalData: [],
        error: action.payload.error
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { init, setMovies, setFilterData, setSortByAction, setError } = moviesSlice.actions

export default moviesSlice.reducer