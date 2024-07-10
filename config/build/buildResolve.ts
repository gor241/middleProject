import { ResolveOptions } from 'webpack';

/** Функция возвращающая объект с расширениями */
export function buildResolve(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    };
}
