import { createSlice } from '@reduxjs/toolkit'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    data: null,
  },
  reducers: {
    setMovie: (state, action) => {
      return {
        data: action.payload.data
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { init, setMovie, setError } = movieSlice.actions

export default movieSlice.reducer