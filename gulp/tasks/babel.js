var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('gulp-babel');
var browserSync  = require('browser-sync');
var config = require('../config');
 
function compile(watch) {
    var bundler = watchify(browserify(config.js.tempDest + config.js.destFile, { debug: true }));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) { console.error(err); this.emit('end'); })
            .pipe(source(config.js.destFile))
            .pipe(buffer())
            .pipe(gulp.dest(config.js.dest))
            .pipe(browserSync.reload({stream:true}));
    }

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
};
 
function watch() {
    console.log('-> js build starting...');
    return compile(true);
    console.log('-> js build complete...');
};

gulp.task("babelConvert", function () {
    return gulp.src(config.js.src)
        .pipe(concat(config.js.destFile))
        .pipe(babel())
        .pipe(gulp.dest(config.js.tempDest))
        .pipe(browserSync.reload({stream:true}));;
});

gulp.task('babelBrowser', function() { 
    return watch(); 
});