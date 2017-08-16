var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        bundle: './js/app.js',
        vendor: 'jquery',
        html: ['./index.html','./standard_package.html','./premium_package.html','./comfort_package.html' ]
    },
    output: {
        path: path.resolve('./build'),
        filename: "[name].js",
        publicPath: ''
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js', minChunks: Infinity })],
    watch: true,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.scss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loaders: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]',
                    context: ''
                }
            },
            {
                loader: 'image-webpack-loader',
                query: {
                    mozjpeg: {
                        progressive: true,
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    optipng: {
                        optimizationLevel: 5,
                    },
                    pngquant: {
                        quality: '75-90',
                        speed: 5,
                    },
                }
            }
            ]
        },
        {
            test: /\.(html)$/,
            loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
        },
        {
            test: /\.(eot|ttf|woff|woff2)$/,
            loader: 'url-loader'
        }
        ]
    }
};
