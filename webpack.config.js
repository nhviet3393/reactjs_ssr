/**
 * Created by BUOfPeThui on 12/11/2017.
 */
module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                //translate
                test: /\.jsx?$/,
                //except translate
                exclude: /node_modules/
            }
        ]
    }
};