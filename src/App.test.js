import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/testUtil';

const mockAxios = jest.genMockFromModule('axios')

mockAxios.create = jest.fn(() => mockAxios)

test('renders App header', () => {

  renderWithProviders(<App />)
  const headerElement = screen.getByText(/Front-end assignment Movies @ Etraveli Group/i);
  expect(headerElement).toBeInTheDocument();
});
