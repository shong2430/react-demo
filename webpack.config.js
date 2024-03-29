var path = require('path')

module.exports = {
    entry: ['./src/app.js'], // 在 index 檔案後的 .js 副檔名是可選的
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}