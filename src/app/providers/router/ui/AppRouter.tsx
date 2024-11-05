import { Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
    <Routes>
        {/* Используем ранее объявленный конфиг */}
        {Object.values(routeConfig).map(({ path, element }: RouteProps) => (
            <Route
                key={path}
                path={path}
                element={
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">{element}</div>
                    </Suspense>
                }
            />
        ))}
    </Routes>
);

// {/* Suspense нужен для lazy компонентов */}



