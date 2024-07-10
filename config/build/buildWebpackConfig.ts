import path from 'path';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { BuildOptions } from './types/config';
import webpack from 'webpack';

/** Функция для конфигурации путей webpack */
export function buildWebpackConfig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths } = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths.html),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolve(),
    };
}
