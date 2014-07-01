var gulp = require('gulp');
require('gulp-watch');

var less = require('gulp-less');
var lessOptions = {
	strictImports: true,
	ieCompat: true,
	relativeUrls: false,
};

gulp.task('mainmenuupgrade', function() {
	return gulp.src('./main_menu_upgrade/css/*.less')
		.pipe(less(lessOptions))
		.pipe(gulp.dest('./main_menu_upgrade/css'));
});

gulp.task('atms', function() {
	return gulp.src('./atms/css/*.less')
		.pipe(less(lessOptions))
		.pipe(gulp.dest('./atms/css'));
});

gulp.task('mobile', function() {
	return gulp.src('./mobile/css/*.less')
		.pipe(less(lessOptions))
		.pipe(gulp.dest('./mobile/css'));
});

gulp.task('weather', function() {
	return gulp.src('./weather/css/*.less')
		.pipe(less(lessOptions))
		.pipe(gulp.dest('./weather/css'));
});

gulp.task('newmain', function() {
	return gulp.src('./newMain/css/*.less')
		.pipe(less(lessOptions))
		.pipe(gulp.dest('./newMain/css'));
});

gulp.task('realty', function() {
	return gulp.src('./doska/realty/css/*.less')
		.pipe(less(lessOptions))
		.pipe(gulp.dest('./doska/realty/css'));
});

gulp.task('drugsearch', function() {
	return gulp.src('./drug_search/css/*.less')
		.pipe(less(lessOptions))
		.pipe(gulp.dest('./drug_search/css'));
});

gulp.task('newmain', function() {
	return gulp.src('./newMain/css/*.less')
		.pipe(less(lessOptions))
		.pipe(gulp.dest('./newMain/css'));
});

gulp.task('watch', function() {
	gulp.watch([
		'./newMain/css/less/**/*.less',
		'./newMain/css/less/**/*.css'
		], ['mainmenuupgrade', 'atms', 'mobile', 'weather', 'realty', 'newmain']);

	gulp.watch([
		'./mobile/css/*.less',
		'./mobile/css/foo.css',
		'./mobile/css/foo-doska.css',
		'./mobile/css/m-normalize.css',
		'./mobile/css/m-old-compat.css',
		'./blocks/**/*.css',
		'./weather/css/*.less',
		'./weather/css/weather-desktop.css'
		], ['mobile', 'weather']);

	gulp.watch('./doska/realty/**/*.less', ['realty']);
	gulp.watch('./drug_search/**/*.less', ['drugsearch']);
});
