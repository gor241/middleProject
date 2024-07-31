import type { Configuration as DevServerConfig } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

/** Функция для конфигурации dev-server */
export function buildDevServer(options: BuildOptions): DevServerConfig {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
