import { screen } from '@testing-library/react';
import { MoviesCard } from '../index';
import { useSelector } from 'react-redux';
import { renderWithProviders } from '../../../utils/testUtil';
import { mockMovie } from '../../../utils/mockData';


jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

test('renders moviecard with no data', () => {
  renderWithProviders(<MoviesCard />);
  const noRecord = screen.getByText(/No movie selected./i)
  expect(noRecord).toBeInTheDocument()
});

test('renders moviecard', () => {
  useSelector.mockReturnValueOnce(mockMovie)
  renderWithProviders(<MoviesCard />);
  const data = screen.getByText(/Directed By: George Lucas/i)
  expect(data).toBeInTheDocument()
});