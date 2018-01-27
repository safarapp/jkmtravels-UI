/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    dist:                         'dist', // 'dist',
    app:                          'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'zone':                       'node_modules/zone.js/dist/zone.js',
    'systemjs':                   'node_modules/systemjs/dist/system.src.js',
    'moment'   :                  'node_modules/moment/moment.js',
    'angular2-cookie':            'node_modules/angular2-cookie',
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',
    'core-js-shim':               'node_modules/core-js/client/shim.min.js',
    'reflect':                    'node_modules/reflect-metadata/Reflect.js',
    'ng2-datepicker':             'node_modules/ng2-datepicker/lib-dist',

    // angular bundles
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
    // other libraries
    'rxjs':                      'npm:rxjs',
    'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    'ng2-datepicker':             'npm:ng2-datepicker/lib-dist/ng2-datepicker.module.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'zone.js':                    { main: 'zone.js',  defaultExtension: 'js' },
    'reflect-metadata':           { main: 'Reflect.js',  defaultExtension: 'js' },
    'systemjs':                   { main: 'system.src.js',  defaultExtension: 'js' },

    app:                          { main: 'main.js',  defaultExtension: 'js' },
    'angular2-cookie':            { main: 'core.js',  defaultExtension: 'js' },
    'ng2-datepicker':             {defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular-in-memory-web-api':  { main: './index.js', defaultExtension: 'js' },
    'headervalues':               { main: 'headervalues.js',  defaultExtension: 'js' },
    'web_properties':             { main: 'web_properties.js',  defaultExtension: 'js' },
    'browserFingerPrint':         { main: 'browserFingerPrint.js',  defaultExtension: 'js' },
    'ng2-bootstrap':              { main: 'ng2-bootstrap.js',  defaultExtension: 'js' }

  };

  var paths = {
    // paths serve as alias
    'npm:': 'node_modules/'
  };

  var config = {
    map: map,
    packages: packages,
    paths: paths
  };

  System.config(config);

})(this);
