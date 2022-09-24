import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';

beforeEach(() => {
    render(<Nav handlePageChange={event => setPage(event.target.title)} />);
  });

// test for the correct icon class, color and link
it('displays nav image', () => {
    const generateImage = screen.getByAltText("RandoMarvel Logo");
    expect(generateImage).toBeInTheDocument();
});