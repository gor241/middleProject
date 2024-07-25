import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

/** Функция возвращающая объект с расширениями */
export function buildResolves(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        // Абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
