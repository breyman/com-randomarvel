import { render, screen } from '@testing-library/react';
import Page from '../components/Page';

beforeEach(() => {
    render(<Page />);
  });
  
it('renders random selector page by default', () => {
    const generateButton = screen.getByTestId('generate-random-marvel-button');
    expect(generateButton).toBeInTheDocument();
});