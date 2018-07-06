var gulp = require('gulp'),
  lint = require('gulp-tslint'),
  rimraf = require('rimraf'),
  ts = require('gulp-typescript'),
  tsProject = ts.createProject('tsconfig.json');

var paths = {
  src: './src/**/*.ts',
  dist: './dist',
  functionDefs: './src/**/function.json',
  host: './src/host.json',
  settings: './src/local.settings.json'
};

// clean
gulp.task('ts:clean-dist', (cb) => {
  rimraf(paths.dist, cb);
});

// building the ts files
gulp.task('ts:build-clean', ['ts:clean-dist'], (cb) => {
  return gulp
    .src(paths.src)
    .pipe(tsProject())
    .pipe(gulp.dest(paths.dist));
});
// copying the function definitions
gulp.task('ts:copy-func-defs-clean', ['ts:build-clean'], (cb) => {
  return gulp.src([paths.functionDefs, paths.host, paths.settings]).pipe(gulp.dest(paths.dist));
});

// building the ts files without cleaning
gulp.task('ts:build', (cb) => {
  return gulp
    .src(paths.src)
    .pipe(tsProject())
    .pipe(gulp.dest(paths.dist));
});
// copying the function definitions no clean
gulp.task('ts:copy-func-defs', ['ts:build'], (cb) => {
  return gulp.src([paths.functionDefs, paths.host, paths.settings]).pipe(gulp.dest(paths.dist));
});

// watch command for any changes
gulp.task('ts:watch', [], (cb) => {
  return gulp.watch([paths.src, paths.functionDefs], ['build']);
});

// linting
gulp.task('lint', [], cb => {
  gulp
    .src(paths.src)
    .pipe(lint({ formatter: 'verbose' }))
    .pipe(lint.report());
});

// default processes
gulp.task('clean', ['ts:clean-dist']);
gulp.task('watch', ['ts:watch']);


// build only
gulp.task('build', ['ts:copy-func-defs']);
gulp.task('build-clean', ['ts:copy-func-defs-clean']);

