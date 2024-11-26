import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/testUtil';
import { SearchForm } from '../index';

test('renders searchForm component with sort by', () => {
  renderWithProviders(<SearchForm />);
  const sortBy = screen.getByText(/Sort by.../i);
  expect(sortBy).toBeInTheDocument();
});

test('renders searchForm component with', () => {
  renderWithProviders(<SearchForm />);
  const searchElement = screen.getByTestId("searchElement");
  expect(searchElement).toBeInTheDocument();
});