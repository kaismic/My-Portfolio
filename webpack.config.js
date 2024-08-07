const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        'filename': 'bundle.js'
    }
}