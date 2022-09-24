import { render, screen } from '@testing-library/react';
import MediaList from '../components/MediaList';
import testData from '../data/marvel-test.json';

beforeEach(() => {
    render(<MediaList media={testData} />);
  });

// test for the correct icon class, color and link
it('displays nav image', () => {
    const generateImage = screen.getByAltText("RandoMarvel Logo");
    expect(generateImage).toBeInTheDocument();
});