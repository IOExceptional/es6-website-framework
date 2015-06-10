var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var config = require('../config');


gulp.task('less', function () {
    return gulp.src(config.css.src)
        .pipe(less({
                paths: [ path.join(__dirname, 'less', 'includes') ]
            }))
        .pipe(gulp.dest(config.css.dest));
});