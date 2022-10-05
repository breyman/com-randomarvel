import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import MediaList from '../components/MediaList';
import testData from '../data/marvel-test.json';

beforeEach(() => {
    render(<MediaList media={testData} />);
  });

// test for the correct icon class, color and link
it('displays table', () => {
    const generateTable = screen.getByText(/Captain America: The First Avenger/i);
    expect(generateTable).toBeInTheDocument();
});

// text is properly displayed with a link value
it('displays table', () => {
  const generateLink = screen.getByTestId("title-link");
  expect(generateLink).toHaveAttribute("href", expect.stringContaining("https://www.disneyplus.com/movies/captain-america-the-first-avenger/6xvB6xZ4r95O"));
});
