import { mockMovie } from '../../../utils/mockData'
import reducer, { setError, setMovies } from '../movies'

test('should return the initial state of movies store', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual({ data: null, error: null, isLoading: false })
})

test('should handle a movie object being added in movies store', () => {
  expect(reducer({}, setMovies({ data: [mockMovie] }))).toEqual({ data: [mockMovie], isLoading: false })
})

test('should handle a error in movies store', () => {
  expect(reducer({}, setError({ error: "error here" }))).toEqual({ error: "error here", isLoading: false, data: null })
})