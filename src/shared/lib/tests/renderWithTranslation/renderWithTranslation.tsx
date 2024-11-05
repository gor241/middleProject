// Хелпер для работы с i18next

import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nFotTests from 'shared/config/i18n/i18nFotTests';

/** HOC для правильной работы библиотеки i18n в тестах */
export function renderWithTranslation(component:ReactNode) {
    return render(
        <I18nextProvider i18n={i18nFotTests}>
            {component}
        </I18nextProvider>,
    );
}
