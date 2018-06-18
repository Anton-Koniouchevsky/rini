const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, 'src/index.jsx')],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, './dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: ['node_modules'],
                loader: 'babel-loader',
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(eot|svg|ttf|otf|woff2?)$/,
                loader: "file-loader",
                options: {
                    name: "assets/fonts/[name].[ext]",
                },
            }, 
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "assets/images/[name].[ext]",
                    },
                },
            }, {
                test: /\.(wav|mp3)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "assets/sounds/[name].[ext]",
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: './src/assets/images/favicon.png',
        }),
        new HtmlWebpackPlugin({ 
            template: 'src/index.html',
            favicon: './src/assets/images/favicon.png',
            filename: '200.html',
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    devServer: {
        open: true,
        historyApiFallback: true
    }
}