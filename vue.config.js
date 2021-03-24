const path = require('path');
const src = './src';

module.exports = {
  runtimeCompiler: true,

  css: {
    modules: true
  },
	
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, src),
        '@layouts': path.resolve(__dirname, `${src}/layouts`),
        '@pages': path.resolve(__dirname, `${src}/pages`),
				'@mixins': path.resolve(__dirname, `${src}/mixins`),
				'@components': path.resolve(__dirname, `${src}/components`),
				'@views': path.resolve(__dirname, `${src}/views`)
      },
      extensions: ['.js', '.ts', '.vue', '.json', '.scss']
    }
  }
};