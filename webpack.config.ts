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
    template: './public/testredmons.html',
	filename: 'testredmons.html',
	chunks: ['testredmons'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testyellowmons.html',
	filename: 'testyellowmons.html',
	chunks: ['testyellowmons'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testredindexes.html',
	filename: 'testredindexes.html',
	chunks: ['testredindexes'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testyellowindexes.html',
	filename: 'testyellowindexes.html',
	chunks: ['testyellowindexes'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testgoldmons.html',
	filename: 'testgoldmons.html',
	chunks: ['testgoldmons'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testcrystalmons.html',
	filename: 'testcrystalmons.html',
	chunks: ['testcrystalmons'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testgoldindexes.html',
	filename: 'testgoldindexes.html',
	chunks: ['testgoldindexes'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testcrystalindexes.html',
	filename: 'testcrystalindexes.html',
	chunks: ['testcrystalindexes'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testredtrainers.html',
	filename: 'testredtrainers.html',
	chunks: ['testredtrainers'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testyellowtrainers.html',
	filename: 'testyellowtrainers.html',
	chunks: ['testyellowtrainers'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testgoldtrainers.html',
	filename: 'testgoldtrainers.html',
	chunks: ['testgoldtrainers'],
  }),
  new HTMLWebpackPlugin({
    template: './public/testcrystaltrainers.html',
	filename: 'testcrystaltrainers.html',
	chunks: ['testcrystaltrainers'],
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
    testredmons: './src/testredmons.tsx',
    testyellowmons: './src/testyellowmons.tsx',
    testredindexes: './src/testredindexes.tsx',
    testyellowindexes: './src/testyellowindexes.tsx',
    testgoldmons: './src/testgoldmons.tsx',
    testcrystalmons: './src/testcrystalmons.tsx',
    testgoldindexes: './src/testgoldindexes.tsx',
    testcrystalindexes: './src/testcrystalindexes.tsx',
    testredtrainers: './src/testredtrainers.tsx',
    testyellowtrainers: './src/testyellowtrainers.tsx',
    testgoldtrainers: './src/testgoldtrainers.tsx',
    testcrystaltrainers: './src/testcrystaltrainers.tsx',
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
        exclude: /node_modules/,
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
