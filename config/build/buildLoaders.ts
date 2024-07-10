import webpack from 'webpack';

/** Функция возвращающая массив лоудеров */
export function buildLoaders(): webpack.RuleSetRule[] {
    // Выносить в переменный лоудеры для соблюдения порядка в массиве
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [typescriptLoader];
}
