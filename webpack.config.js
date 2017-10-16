'use strict';

const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin   = require('stylelint-webpack-plugin');
const path              = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
    entry: './src/editor.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                /**
                 * Use for all JS files loaders below
                 * - babel-loader
                 * - eslint-loader
                 */
                test: /\.js$/,
                use : [
                    /** Babel loader */
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ 'env' ]
                        },
                    },
                    /** ES lint For webpack build */
                    {
                        loader: 'eslint-loader',
                        options: {
                            fix: true,
                            sourceType: 'module'
                        }
                    }
                ]
            },
            {
                /**
                 * Use for all CSS files loaders below
                 * - extract-text-webpack-plugin
                 * - postcss-loader
                 */
                test: /\.css$/,
                include: __dirname + '/src',
                use: ExtractTextPlugin.extract([
                    {
                        loader: 'css-loader',
                        options: {
                          minimize: 1,
                          importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ])
            },
            {
                test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/,
                include: /\/node_modules\//,
                loader: 'file-loader?name=[1].[ext]&regExp=node_modules/(.*)'
            },
            {
                test: /\.(png|svg|jpg|ttf|eot|woff|woff2)$/,
                exclude: /\/node_modules\//,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeOut: 100
    },
    /*eval - самая быстрая сборка и пересборка
    *Вообще не строит source-map
    * Устроен так, что создает виртуально-логические файлы, что
    * облегчает отладку, так как позволяет заходить в каждый файл
    * На прдакшен не подходит
    * */
    devtool: NODE_ENV === 'development' ? 'eval' : false,
    externals: {

    },
    plugins: [

        /** Lint CSS */
        new StyleLintPlugin({
            context : './src/styles',
            files : 'main.css'
        }),

        /** Минифицируем CSS и JS */
        new webpack.optimize.UglifyJsPlugin(),

        /** Block build if errors found */
        new webpack.NoEmitOnErrorsPlugin(),

        /** Extract CSS bundle */
        new ExtractTextPlugin('bundle.css')
    ]
};