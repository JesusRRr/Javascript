const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin')

module.exports ={
    entry: './frontend/app.js',
    output: {
        path:path.join(__dirname,'backend/public'),
        filename: 'bundle.js'
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:'./frontend/index.html',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
};