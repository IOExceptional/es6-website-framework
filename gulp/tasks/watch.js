var gulp = require('gulp');
var config = require('../config');

// Watch Files For Changes
gulp.task('watch', ['babelBrowser', 'browserSync'], function() {
    gulp.watch(config.js.src, ['babelConvert']);
    gulp.watch(config.css.src, ['less']);
    gulp.watch(config.markup.src, ['markup']);
    gulp.watch(config.assets.src, ['assets']);
    gulp.watch(config.vendor.src, ['vendorScripts']);
});
