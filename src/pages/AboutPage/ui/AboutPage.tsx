import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    // Подгружаем только для страницы "О нас" перевод
    const { t } = useTranslation('about');

    return <div>{t('О сайте')}</div>;
};

export default AboutPage;
