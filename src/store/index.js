import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './slices/movie'
import moviesSlice from './slices/movies'

export default configureStore({
  reducer: {
    movies: moviesSlice,
    movie: movieSlice
  },
})