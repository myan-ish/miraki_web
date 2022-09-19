const path = require('path');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // Should be STATIC_URL + path/to/build
  publicPath: '/static/src/vue/dist/',

  // Output to a directory in STATICFILES_DIRS
  outputDir: path.resolve(__dirname, '../static/src/vue/dist/'),

  // Django will hash file names, not webpack
  filenameHashing: false,

  // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,

  devServer: {
    devMiddleware: {
      // see https://github.com/webpack/webpack-dev-server/issues/2958
      writeToDisk: true, 
    }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
