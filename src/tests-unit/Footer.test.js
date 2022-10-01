import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

// test for the correct icon class, color and link
it('displays footer links', () => {
  render(<Footer handlePageChange={event => setPage(event.target.title)} />);

  const generateElement = screen.getByText(/Generate Random Marvel/i);
  const listElement = screen.getByText(/Marvel List/i);
  const aboutElement = screen.getByText(/About/i);
  expect(generateElement).toBeInTheDocument();
  expect(listElement).toBeInTheDocument();
  expect(aboutElement).toBeInTheDocument();
});

// test for displaying warning if local data file was used
it('displays footer data file error', () => {
  render(<Footer handlePageChange={event => setPage(event.target.title)} usingLocalDataFile={true} />);
  
  const errorElement = screen.getByText(/local data/i);
  expect(errorElement).toBeInTheDocument();
});