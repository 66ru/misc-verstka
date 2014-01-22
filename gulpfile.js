var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');

gulp.task('atms', function() {
	return gulp.src('./atms/css/*.less')
		.pipe(less({
			strictImports: true,
			ieCompat: true,
			relativeUrls: false,
		}))
		.pipe(gulp.dest('./atms/css'));
});

gulp.task('newmain', function() {
	return gulp.src('./newMain/css/*.less')
		.pipe(less({
			strictImports: true,
			ieCompat: true,
			relativeUrls: false,
		}))
		.pipe(gulp.dest('./newMain/css'));
});

gulp.task('watch', function() {
	gulp.watch('./newMain/css/less/**/*.less', function() {
		gulp.run('atms');
	});
});
