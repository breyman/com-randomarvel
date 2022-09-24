import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

beforeEach(() => {
    render(<Footer handlePageChange={event => setPage(event.target.title)} />);
  });

// test for the correct icon class, color and link
it('displays footer links', () => {
    const generateElement = screen.getByText(/Generate Random Marvel/i);
    const listElement = screen.getByText(/Marvel List/i);
    const aboutElement = screen.getByText(/About/i);
    expect(generateElement).toBeInTheDocument();
    expect(listElement).toBeInTheDocument();
    expect(aboutElement).toBeInTheDocument();
});