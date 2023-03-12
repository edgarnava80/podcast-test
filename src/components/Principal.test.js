import { screen, render } from '@testing-library/react';
import Principal from './Principal';

describe('Tests de vista Principal', () => {
    test('Debe mostrar el título', () => {
        render(<Principal />);
        expect(screen.getByText('Podcaster')).toBeInTheDocument();
    });
    test('Debe mostrar label de filtro con los 100 podcasts iniciales', () => {
        render(<Principal />);
        expect(screen.getByText('100')).toBeInTheDocument();
    });
    test('Debe mostrar input de filtro', () => {
        render(<Principal />);
        expect(screen.getByPlaceholderText('Filter podcasts...')).toBeInTheDocument();
    });
    test('Debe mostrar el listado de podcasts', async () => {
        await render(<Principal />);
        const podcasts = screen.getAllByRole('article');
        expect(podcasts.length).toBe(100);
    });
});