var historyApiFallback = require('connect-history-api-fallback');

module.exports = function () {
  var root = '';
  var app = root + 'app/';
  var index = root + 'index.html';

  var build = {
    path: 'dist/',
    app: 'build/app/',
    fonts: 'build/fonts',
    assetPath: 'build/assets/',
    assets: {
      lib: {
        js: 'lib.js',
        css: 'lib.css'
      }
    }
  };

  var fonts = {
    in: ['app/css/font/*.*'],
    out: 'dist/css/font'
  };
  /* ----- inline-image(pathToFile) ----- */


  var browserSync = {
    local: {
      injectChanges: true,
      port: 3002,
      server: {
        baseDir: './build',
        middleware: [historyApiFallback()]
      }
    },
    dev: {
      injectChanges: true,
      port: 3003,
      server: {
        baseDir: './dist',
        middleware: [historyApiFallback()]
      }
    },
    prod: {
      port: 3001,
      server: {
        baseDir: './' + build.path,
        middleware: [historyApiFallback()]
      }
    }
  };

  var systemJs = {
    builder: {
      normalize: true,
      minify: true,
      mangle: true,
      globalDefs: {DEBUG: false}
    }
  };

  var config = {
    root: root,
    app: app,
    fonts: fonts,
    browserSync: browserSync,
    systemJs: systemJs
  };

  return config;

};