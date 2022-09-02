import { render, screen } from '@testing-library/react';
import App from '../App';

beforeEach(() => {
  render(<App />);
});

it('renders nav logo', () => {
  const headerLogo = screen.getByAltText('RandoMarvel Logo');
  expect(headerLogo).toBeInTheDocument();
});

it('renders footer', () => {
  const footerElement = screen.getByText(/About/i);
  expect(footerElement).toBeInTheDocument();
});