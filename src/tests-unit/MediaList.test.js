import { render, screen } from '@testing-library/react';
import MediaList from '../components/MediaList';
import testData from '../data/marvel-test.json';

beforeEach(() => {
    render(<MediaList media={testData} />);
  });

// test for the correct icon class, color and link
it('displays table', () => {
    const generateTable = screen.getByText(/Captain America: The First Man on the Moon/i);
    expect(generateTable).toBeInTheDocument();
});