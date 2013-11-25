module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			options: {
				strictImports: true,
				ieCompat: true,
				relativeUrls: false,
			},
			watch: {
				expand: true,
				src: ['newMain/css/*.less'],
				rename: function(dest, src) {
					var folder = src.substring(0, src.lastIndexOf('/')),
						filename = src.substring(src.lastIndexOf('/'), src.length);

					filename = filename.substring(0, filename.lastIndexOf('.'));

					return folder + filename + '.css';
				}
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['less']);
};
