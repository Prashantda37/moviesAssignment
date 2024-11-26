import axios from 'axios';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { useSelector, useDispatch } from 'react-redux';
import { MovieList } from '../index';
import { renderWithProviders } from '../../../utils/testUtil';
import { mockMovie } from '../../../utils/mockData';

jest.mock("axios");

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}));

test('renders movie list empty', () => {
  useSelector.mockReturnValueOnce(null)
  useDispatch.mockReturnValue(jest.fn())
  renderWithProviders(<MovieList />)
  const movies = screen.getByText(/No data found./i);
  expect(movies).toBeInTheDocument()
});

test('renders movie list loading state', () => {
  useSelector.mockReturnValueOnce({ isLoading: true })
  useDispatch.mockReturnValue(jest.fn())
  renderWithProviders(<MovieList />)
  const movies = screen.getByText(/Loading.../i);
  expect(movies).toBeInTheDocument()
});

test('should call axois api', () => {
  useSelector.mockReturnValueOnce({ isLoading: false })
  const func = jest.fn();
  useDispatch.mockReturnValue(func)
  axios.get.mockImplementation(() => Promise.resolve({ data: [mockMovie] }))

  renderWithProviders(<MovieList />)
  expect(func).toHaveBeenCalled();
});

test('should check movie list', () => {
  useSelector.mockReturnValueOnce({ data: [mockMovie] })
  const func = jest.fn();
  useDispatch.mockReturnValue(func)
  axios.get.mockImplementation(() => Promise.resolve({ data: [mockMovie] }));
  const selectedMovie = jest.fn()
  renderWithProviders(<MovieList />)
  userEvent.click(screen.getByTestId('movie'))
  selectedMovie(4)
  expect(selectedMovie).toHaveBeenCalledWith(4)
});

