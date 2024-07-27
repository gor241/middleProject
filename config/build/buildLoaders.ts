import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

/** Функция возвращающая массив лоудеров */
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // Выносить в переменный лоудеры для соблюдения порядка в массиве

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    // Если бы не использовали бы typescript, то нужно было бы ещё подключить  babel-loader

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Если режим разработчики, то обычный лоудер стилей, если нет минифицированный
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Включения режима поддержки css/scss modules
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        // с помощью функции ниже определяем для кого файла надо modules применять
                        auto: (resPath: string) =>
                            Boolean(resPath.includes('.module')),
                        // Здесь мы делаем в dev режиме удобочитабельные названия
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Компиляция из scss в css
            'sass-loader',
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [typescriptLoader, scssLoader, svgLoader, fileLoader];
}
