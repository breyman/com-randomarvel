import { render, screen, act } from '@testing-library/react';
import WatchMedia from '../components/WatchMedia';

// test for the correct icon class, color and link
it('displays correct icons', () => {
    render(<WatchMedia streaming="disney" color="#af0614" link="https://www.disneyplus.com/movies/captain-america-the-first-avenger/6xvB6xZ4r95O" />);

    expect(screen.getByTestId('media-icon')).toHaveClass('fa-dplus');
    expect(screen.getByTestId('media-icon-link')).toHaveStyle('color: #af0614');
    expect(screen.getByTestId('media-icon-link')).toHaveAttribute('href', 'https://www.disneyplus.com/movies/captain-america-the-first-avenger/6xvB6xZ4r95O');
});