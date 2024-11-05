import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation }
    from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Sidebar render', () => {
        renderWithTranslation(<Sidebar />); // Обёртка для перевода i18next
        expect(screen.getByTestId('sidebar')).toBeInTheDocument(); // Проверяем наличие в DOM
    });
    test('Sidebar toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle'); // Находим по data-testid
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn); // fireEvent - ивент с возможностью клика
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed'); // Проверяем навесился ожидаемый класс
    });
});
