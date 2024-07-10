import { ResolveOptions } from 'webpack';

/** Функция возвращающая объект с расширениями */
export function buildResolves(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    };
}
