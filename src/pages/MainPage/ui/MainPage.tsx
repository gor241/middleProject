import { BugButton } from 'app/providers/ErrorBoundaries';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    // Подгружаем только для основной страницы перевод
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Основная страница')}
        </div>
    );
};

export default MainPage;
