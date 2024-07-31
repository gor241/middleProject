import React, { FC, useMemo, useState } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme, ThemeContext,
} from '../lib/ThemeContext';

/** Компонент для оборачивания в context и получения доступа к темам(светлая/тёмная) */
const ThemeProvider: FC = ({ children }) => {
    const localTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme)
    || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(localTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
