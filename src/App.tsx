import React, { Suspense } from 'react';
import './index.scss';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>MainPage</Link>
            <Link to={'/about'}>AboutPage</Link>
            {/* Suspense нужен для lazy компонентов */}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
