var gulp = require('gulp');
var config = require('../config');
var browserSync  = require('browser-sync');

gulp.task('vendorScripts', function() {
    return gulp.src(config.vendor.src)
        .pipe(gulp.dest(config.vendor.dest))
        .pipe(browserSync.reload({stream:true}));;
});