import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
//create css file per js file: https://webpack.kr/plugins/mini-css-extract-plugin/
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

const plugins: webpack.WebpackPluginInstance[] = [
    new HTMLWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        chunks: ['index'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testredmons.html',
        filename: 'testredmons.html',
        chunks: ['testredmons'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testyellowmons.html',
        filename: 'testyellowmons.html',
        chunks: ['testyellowmons'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testredindexes.html',
        filename: 'testredindexes.html',
        chunks: ['testredindexes'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testyellowindexes.html',
        filename: 'testyellowindexes.html',
        chunks: ['testyellowindexes'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testgoldmons.html',
        filename: 'testgoldmons.html',
        chunks: ['testgoldmons'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testcrystalmons.html',
        filename: 'testcrystalmons.html',
        chunks: ['testcrystalmons'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testgoldindexes.html',
        filename: 'testgoldindexes.html',
        chunks: ['testgoldindexes'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testcrystalindexes.html',
        filename: 'testcrystalindexes.html',
        chunks: ['testcrystalindexes'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testredtrainers.html',
        filename: 'testredtrainers.html',
        chunks: ['testredtrainers'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testyellowtrainers.html',
        filename: 'testyellowtrainers.html',
        chunks: ['testyellowtrainers'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testgoldtrainers.html',
        filename: 'testgoldtrainers.html',
        chunks: ['testgoldtrainers'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testcrystaltrainers.html',
        filename: 'testcrystaltrainers.html',
        chunks: ['testcrystaltrainers'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testredtypes.html',
        filename: 'testredtypes.html',
        chunks: ['testredtypes'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testyellowtypes.html',
        filename: 'testyellowtypes.html',
        chunks: ['testyellowtypes'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testgoldtypes.html',
        filename: 'testgoldtypes.html',
        chunks: ['testgoldtypes'],
    }),
    new HTMLWebpackPlugin({
        template: './public/Test/testcrystaltypes.html',
        filename: 'testcrystaltypes.html',
        chunks: ['testcrystaltypes'],
    }),
];
isDevelopment
    ? plugins.push(new ReactRefreshWebpackPlugin())
    : plugins.push(new MiniCssExtractPlugin());

const config: webpack.Configuration = {
    mode: isDevelopment ? 'development' : 'production',
    devServer: {
        hot: true,
        port: 3000,
    },
    entry: {
        index: './src/index.tsx',
        testredmons: './src/Test/testredmons.tsx',
        testyellowmons: './src/Test/testyellowmons.tsx',
        testredindexes: './src/Test/testredindexes.tsx',
        testyellowindexes: './src/Test/testyellowindexes.tsx',
        testgoldmons: './src/Test/testgoldmons.tsx',
        testcrystalmons: './src/Test/testcrystalmons.tsx',
        testgoldindexes: './src/Test/testgoldindexes.tsx',
        testcrystalindexes: './src/Test/testcrystalindexes.tsx',
        testredtrainers: './src/Test/testredtrainers.tsx',
        testyellowtrainers: './src/Test/testyellowtrainers.tsx',
        testgoldtrainers: './src/Test/testgoldtrainers.tsx',
        testcrystaltrainers: './src/Test/testcrystaltrainers.tsx',
        testredtypes: './src/Test/testredtypes.tsx',
        testyellowtypes: './src/Test/testyellowtypes.tsx',
        testgoldtypes: './src/Test/testgoldtypes.tsx',
        testcrystaltypes: './src/Test/testcrystaltypes.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        // more configurations: https://webpack.js.org/configuration/
    },
    plugins,
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        // automatically resolve certain extensions (Ex. import './file' will automatically look for file.js)
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'],
        alias: {
            // absolute path importing files
            '@pages': path.resolve(__dirname, './src/pages'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|\.test\.js|\.test\.tsx)/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                isDevelopment && require.resolve('react-refresh/babel'),
                            ].filter(Boolean),
                        },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/i, // .sass or .scss
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // for Tailwind CSS
                    'postcss-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
};

export default config;
