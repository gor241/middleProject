import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

/** Функция возвращающая массив плагинов */
export function buildPlugins(
    pathHtml: string
): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: pathHtml,
        }),
        new webpack.ProgressPlugin(),
    ];
}
