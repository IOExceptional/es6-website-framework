var gulp = require('gulp');

gulp.task('default', ['less', 'markup', 'babelConvert', 'vendorScripts', 'watch']);