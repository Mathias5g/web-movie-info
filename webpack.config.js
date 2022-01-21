const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: ['./src/js/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};