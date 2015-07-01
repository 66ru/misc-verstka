var gulp = require('gulp'),
  autoprefixer = require('autoprefixer-core'),
  browserSync = require('browser-sync'),
  combiner = require('stream-combiner2'),
  less = require('gulp-less'),
  minimist = require('minimist'),
  postcss = require('gulp-postcss'),
  sourcemaps = require('gulp-sourcemaps'),

  lessOptions = {
    strictImports: true,
    ieCompat: true,
    relativeUrls: false,
  },

  autoprefixerOptions = {
    browsers: ['last 2 versions', 'Android >= 2.3', 'ie >= 10'],
    cascade: false
  },

  options = minimist(process.argv.slice(2)),

  dir = options.dir || '',

  browserSyncFiles = [
    options.dir + '/**/*.html',
    options.dir + '/css/**/*.css',
    options.dir + '/js/**/*.js',
    options.dir + '/img/**/*'
  ];

gulp.task('browser-sync', function() {
  browserSync.init(browserSyncFiles, {
    ui: {
      port: 3067
    },
    server: {
      baseDir: '.'
    },
    open: false,
    port: 3066
  });
});

gulp.task('build-styles', function() {
  var combined = gulp.src(options.dir + '/' + 'css/**/*.less')
    // .pipe(sourcemaps.init())
    .pipe(less(lessOptions))
    .pipe(postcss([ autoprefixer(autoprefixerOptions) ]))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(options.dir + '/' + 'css'));

  combined.on('error', console.error.bind(console));

  return combined;
});

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(options.dir + '/' + 'css/**/*.less', ['build-styles']);
})
