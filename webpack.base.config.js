/* eslint-disable */
const webpack = require('webpack');
const HappyPack = require('happypack');
const cpuCount = require('os').cpus().length;

const happyPackPool = HappyPack.ThreadPool({ size: cpuCount - 1 });

module.exports = {
  entry: {
    index: ['./src/entry.jsx'],
    vendor: [
      'redux',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux-saga',
      'shineout',
      'object-assign',
      'classnames',
      'whatwg-fetch',
    ],
  },
  resolve: {
    modules: ['node_modules', 'web_modules'],
    extensions: ['.js', '.jsx', 'css', '.json'],
  },
  externals: {
    lodash: 'window._',
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    antd: 'window.antd',
    moment: 'window.moment',
    'babel-polyfill': 'undefined',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'happypack/loader?id=js',
          {
            loader: 'react-redux-component-loader',
            options: {
              externals: ['nav', 'login'],
              lazy: true,
              loading: 'Loading',
              reducerName: 'reducers',
              componentDir: 'component',
              reducerDecorator: 'reducerDecorator',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: /node_modules\/shineout/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.less$/,
        include: /node_modules\/shineout/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: {
                'so-theme': 'antd'
              },
            }
          }
        ]
      },
      {
        test: /component\/([^/]+\/)*type[s]?.js$/,
        exclude: /node_modules/,
        loaders: ['react-redux-types-loader'],
      },
      {
        test: /\/me\.json$/,
        use: [
          'babel-loader',
          {
            loader: 'react-redux-component-loader',
            options: {
              bundle: true,
              reducerName: 'reducers',
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ejs$/,
        use: ['ejs-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff)$/,
        use: ['file-loader?name=[hash:base64:7].[ext]'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
    }),
    new HappyPack({
      id: 'js',
      threadPool: happyPackPool,
      loaders: ['babel-loader?cacheDirectory=true'],
    }),
    new HappyPack({
      id: 'styles',
      threadPool: happyPackPool,
      loaders: ['style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[path]__[local]-[hash:base64:5]',
        'postcss-loader',
      ],
    }),
  ],
};
