import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    isLoading: false,
    data: null,
    error: null
  },
  reducers: {
    init: (state, action) => {
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    },
    setMovies: (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload?.data
      }
    },
    setError: (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.payload.error
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { init, setMovies, setError } = moviesSlice.actions

export default moviesSlice.reducer