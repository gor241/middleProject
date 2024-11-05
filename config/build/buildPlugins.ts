import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

/** Функция возвращающая массив плагинов */
export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        // Для определения пути для html файла
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        // Для отслеживания процентов при сборке
        new webpack.ProgressPlugin(),
        // Для извлечения css в отдельный файл
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            // Путь для разбития файлы на отдельные части CSS
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // Для прокидывания глобальных переменных в приложение
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        // Плагин для анализа размера бандла
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
        // Настройка хот-режима, без перезагрузки страницы
        isDev && new webpack.HotModuleReplacementPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
    ];
}
