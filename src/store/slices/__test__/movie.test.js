import { mockMovie } from '../../../utils/mockData'
import reducer, { setMovie } from '../movie'

test('should return the initial state', () => {
  expect(reducer(undefined, { type: 'unknown' })).toEqual({ data: null })
})

test('should handle a movie object being added', () => {
  expect(reducer({}, setMovie({ data: mockMovie }))).toEqual({ data: mockMovie })
})
