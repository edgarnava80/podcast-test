import { screen, render } from '@testing-library/react';
import Principal from './Principal';

describe('Tests de vista Principal', () => {
    test('Debe mostrar el título', () => {
        render(<Principal />);
        expect(screen.getByText('Podcaster')).toBeInTheDocument();
    });

});