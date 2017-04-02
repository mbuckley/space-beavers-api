/*
 * WARNING: Tampering with how entry is populated could affect pattern matching
 */

const fs = require('fs')
const path = require('path')
const minimatch = require('minimatch')

const env = process.env.NODE_ENV || 'development'
const pattern = process.env.PATTERN || '*'

const entry = fs.readdirSync('functions')
  .filter(minimatch.filter(pattern))
  .reduce((map, funcName) => {
    map[funcName] = path.resolve(`functions/${funcName}/index.ts`)
    return map
  }, {})

const loaderRules = [];

loaderRules.push({
  test: /\.js$/,
  use: [
    { loader: 'babel-loader' }
  ]
});

loaderRules.push({
  test: /\.ts$/,
  loader: "ts-loader!tslint-loader"
});

module.exports = {
  target: 'node',
  entry,
  module: {
    rules: loaderRules
  },
  output: {
    path: 'dist',
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [ 'node_modules', 'lib' ]
  }
}
