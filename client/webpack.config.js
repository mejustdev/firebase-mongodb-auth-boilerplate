// https://stackoverflow.com/questions/34706817/how-prevent-multiple-copies-of-react-from-loading
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      react: path.resolve('node_modules/react'),
    },
    node: {
      child_process: 'empty',
      // fs: "empty", // if unable to resolve "fs"
    },
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
  output: {
    libraryTarget: 'commonjs2',
  },
  engines: {
    node: '>=12.x',
  },
  peerDependencies: {
    react: '>=16.8.0',
    'react-dom': '>=16.8.0',
  },
};
