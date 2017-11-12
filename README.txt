>npm install -g webpack

// dong goi file
>weboack ./app/app.js ./public/bundle.js

//webpack.config.js
module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    }
};

//run webpack forever
>webpack -w

//install babel
>npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
>npm install webpack --save
//update webpack.config.js
 module.exports = {
     entry: './app/app.js',
     output: {
         path: __dirname,
         filename: './public/bundle.js'
     }
 };
//end install babel
