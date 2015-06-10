var gulp = require('gulp');
var changed    = require('gulp-changed');
var config = require('../config');
var browserSync  = require('browser-sync');
var browserSync  = require('browser-sync');

gulp.task('assets', function() {
    return gulp.src(config.assets.src)
        .pipe(changed(config.assets.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.assets.dest))
        .pipe(browserSync.reload({stream:true}));
});