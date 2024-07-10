/** Тип для мода webpack */
export type BuildMode = 'production' | 'development';

/** Интерфейс для различных путей */
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

/** Интерфейс для переменной окружения */
export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

/** Интерфейс для конфигурации билда */
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
