var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var config = require('./gulp.config')();
var tscConfig = require('./tsconfig.json');
const zip = require('gulp-zip');
var fs = require('fs');
var bump = require('gulp-bump');
var replaceBaseRef= require('gulp-replace-task');
var replaceBaseUrl = require('gulp-replace');
var concat = require("gulp-concat");
var Builder = require('systemjs-builder');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var inlineNg2Template = require('gulp-inline-ng2-template');
var builder = new Builder('', 'systemjs.config.js');
var htmlreplace = require('gulp-html-replace');
var bundleHash = new Date().getTime();
var mainBundleName = bundleHash + '.main.bundle.js';
var vendorBundleName = bundleHash + '.vendor.bundle.js';

gulp.task('clean', ['del-build'], function () {
    return del(['dist']);
});

gulp.task('del-build', function () {
    return del(['build']);
});

//copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', function () {
    return gulp.src(['app/**/*', '!app/scss/*.css'], {base: './'})
        .pipe(gulp.dest('build'))
});

gulp.task('copy:css', ['copy:font'], function () {
    return gulp.src(['app/**/*.css'], {base: './'})
        .pipe(gulp.dest('dist'))
});

gulp.task('copy:font', function () {
    return gulp.src(['app/css/font*/*'], {base: './'})
        .pipe(gulp.dest('dist'))
});

gulp.task('copy:images', function () {
    return gulp.src(['app/images/*'], {base: './'})
        .pipe(gulp.dest('dist'))
});

gulp.task('copy:js', function () {
    return gulp.src(['app/js/*'], {base: './'})
        .pipe(gulp.dest('build'))
});

gulp.task('copy:sysconfig', function () {
    return gulp.src([ 'systemjs.config.js'])
        .pipe(gulp.dest('build'))
});

/// copy dependencies
gulp.task('copy:libs', function () {
    return gulp.src([
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/zone.js/dist/**',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/rxjs/**',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/@angular/**',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/ng2-bootstrap/**',
        'node_modules/moment/moment.js ',
        'node_modules/angular2-cookie/**',
        'node_modules/ng2-datepicker/**'
    ], {base: './node_modules'})
        .pipe(gulp.dest('build/node_modules'))
});

gulp.task('bundle:vendor', function () {
    return builder
        .buildStatic('app/vendor.js', './dist/app/lib/js/' + vendorBundleName)
        .catch(function (err) {
            console.log('Vendor bundle error');
            console.log(err);
        });
});

// TypeScript compile
gulp.task('compile', function () {
    var tsResult = gulp.src('app/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tscConfig.compilerOptions));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('dist/app'))
		.pipe(gulp.dest('build/app'));
});

// TypeScript compile and inline
gulp.task('compile:inline', function () {
    var tsResult = gulp.src('build/app/**/*.ts')
        .pipe(inlineNg2Template(
            {
                base: '/',
                target: 'es5',
                useRelativePaths: true,
                templateFunction: false
            }))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('build/app'))
        .pipe(ts(tscConfig.compilerOptions));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('build/app'));
});

// Generate systemjs-based builds
gulp.task('bundle:app', function() {
    var builder = new Builder('build', './systemjs.config.js');
    return builder.buildStatic('app', 'dist/app/lib/js/' + mainBundleName)
});

// Minify JS bundle
gulp.task('minify:js', function() {
    return gulp
        .src('build/app/js/app.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/app/js'));
});

gulp.task('copy:index', function () {
    return gulp.src(['index.html'])
        .pipe(gulp.dest('build'))
});

gulp.task('copy:sysconfig', function () {
    return gulp.src([ 'systemjs.config.js'])
        .pipe(gulp.dest('build'))
});

gulp.task('replace', function () {
    return gulp.src('index.html')
        .pipe(htmlreplace({
            'app': 'app/lib/js/'+mainBundleName,
            'vendor': 'app/lib/js/'+vendorBundleName
        }))
        .pipe(gulp.dest('./dist'));
});

var getVersion = function () {
    var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    return pkg.version;
};

gulp.task('dist:zip', function () {
    return gulp.src('./dist/**')
        .pipe(zip('cd_'+getVersion()+'.zip'))
        .pipe(gulp.dest('./dist'));
});

var watch = require('gulp-watch');


var source = './app',
    destination = './build';

gulp.task('watch-folder', function() {
    gulp.src(source + '/**/*', {base: source})
        .pipe(watch(source, {base: source}))
        .pipe(gulp.dest(destination));
});

gulp.task('build', function(cb) {
    runSequence('clean', ['copy:assets', 'copy:css', 'copy:images', 'copy:sysconfig', 'copy:libs', 'bundle:vendor'], 'compile:inline','bundle:app','minify:js', 'replace', 'dist:zip', cb);
});

gulp.task('build-local', ['build-dev'], function () {
    browserSync.init(config.browserSync.local);
    gulp.watch(['app/**/*'], ['compile', 'copy:assets']).on('change', reload);
    gulp.watch(['index.html'], ['copy:index']).on('change', reload);
});

gulp.task('build-dev', function(cb) {
    runSequence('clean', ['compile', 'copy:libs','copy:js','copy:assets', 'copy:sysconfig', 'copy:index'], cb);
});

gulp.task('build-live', ['build'], function () {
    browserSync.init(config.browserSync.dev);
});