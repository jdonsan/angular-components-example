const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const vinylBuffer = require('vinyl-buffer');
const vinylSourceStream = require('vinyl-source-stream');
const ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', function () {
    var sources = browserify({ entries: ['./src/app/index.js'], debug: true })
        .transform(babelify, { presets: ["es2015"], sourceMaps: false });

    return sources.bundle()
        .pipe(vinylSourceStream('app.min.js'))
        .pipe(vinylBuffer())
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./js'));
});