const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['./main.js', './about-me-item.js'],
    output: {
        'filename': 'bundle.js'
    }
}