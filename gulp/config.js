var src = './src';
var dest = './bin';

module.exports = {
    css: {
        src: src + '/css/**/*.less',
        dest: dest + '/css/'
    },
    markup: {
        src: src + '/htdocs/**',
        dest: dest
    },
    assets: {
        src: src + '/assets/**',
        dest: dest + '/assets/'
    },
    vendor: {
        src: src + '/lib-vendor/**',
        dest: dest + '/lib/vendor/'
    },
    js: {
        src: src + '/lib/**/*.js',
        dest: dest + '/lib/',
        tempDest: './bin/temp/',
        destFile: 'main.js'
    },
    browserSync: {
        server: {
            baseDir: dest
        }
    }
};