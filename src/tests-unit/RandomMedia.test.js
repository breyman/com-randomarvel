import { render, screen, act } from '@testing-library/react';
import RandomMedia from '../components/RandomMedia';
import testData from '../data/marvel-test.json';

beforeEach(() => {
    render(<RandomMedia media={testData} />);
});
  
it('loads without media selected', () => {
    const mediaTitleDisplay = screen.getByTestId('title-display');
    expect(mediaTitleDisplay).toHaveTextContent('');
});

it('displays the title when the generate button is clicked', () => {

    act(() => {
        screen.getByTestId('generate-random-marvel-button').click();
    });

    const mediaTitleDisplay = screen.getByTestId('title-display');
    expect(mediaTitleDisplay).toHaveTextContent('Captain America: The First Avenger');
});

it('sets toggle button styling correctly', () => {
    // test toggle for All
    act(() => {
        screen.getByTestId('media-toggle-selector-all').click();
    });
    expect(screen.getByTestId('media-toggle-selector-all')).toHaveClass('is-selected');
    
    // test toggle for Movie
    act(() => {
        screen.getByTestId('media-toggle-selector-movie').click();
    });
    expect(screen.getByTestId('media-toggle-selector-movie')).toHaveClass('is-selected');
    
    // test toggle for TV
    act(() => {
        screen.getByTestId('media-toggle-selector-tv').click();
    });
    expect(screen.getByTestId('media-toggle-selector-tv')).toHaveClass('is-selected');
});