var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var paths = {
    libs: [
      'js/libs/jquery.js'
    ],
    scripts: [
        'js/main.js',
        'js/seasonSelector.js'
    ],
    styles: [
        'css/main.scss'
    ]
};

gulp.task('default', () => console.log("Tasks: compile-styles, compile-scripts, compile-libs, build"));

gulp.task('build', ['compile-styles', 'compile-scripts', 'compile-libs']);

gulp.task('compile-styles', function() {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            // .pipe(autoprefixer({
            //     browsers: ['last 2 versions']
            // }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('compile-scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
            .pipe(babel({ presets: ['es2015'] }))
            .pipe(uglify().on('error', function(err){throw err;}))
            .pipe(concat('js/main.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'));
});

gulp.task('compile-libs', function() {
    return gulp.src(paths.libs)
        .pipe(sourcemaps.init())
            .pipe(babel({ presets: ['es2015'] }))
            .pipe(uglify().on('error', function(err){throw err;}))
            .pipe(concat('js/libs.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'));
});
