const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, '.dist'),
    filename: 'main.js',
        publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index.html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
    module: {
      rules: [
              {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader, 
            {loader: 'css-loader',
            options: { importLoaders: 1 }
          }, 
            'postcss-loader',
          ],
        },

        {
          test: /\.(png|svg|jpe?g|gif|woff(2)?|eot|ttf|otf)$/,
          type: 'asset/resource'
        },
        
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/'
        },
      ],
    },
}

