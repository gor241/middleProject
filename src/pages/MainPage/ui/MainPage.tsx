import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    // Подгружаем только для основной страницы перевод
    const { t } = useTranslation('main');

    return <div>{t('Основная страница')}</div>;
};

export default MainPage;
