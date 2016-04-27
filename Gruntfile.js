module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg      : grunt.file.readJSON('package.json'),
		banner   : '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> @ <%= pkg.company.name%>' +
			' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.

		copy     : {
			dist: {
				files: [{
					expand: true
					, flatten: true
					, src: ['src/js-cookieBanner.js']
					, dest: 'dist/'
				}]
			},
			test: {
				files: [{
					expand: true
					, flatten: true
					, src: ['dist/js-cookieBanner.js', 'bower_components/jquery/dist/jquery.min.js']
					, dest: 'test/dist/js'
				},{
					expand: true
					, flatten: true
					, src: ['dist/js-cookieBanner.css']
					, dest: 'test/dist/css/'
				}]
			}
		},

		uglify   : {
			options: {
				banner: '<%= banner %>'
			},
			dist   : {
				src : 'dist/js-cookieBanner.js',
				dest: 'dist/js-cookieBanner.min.js'
			}
		},

		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: {
					'dist/js-cookieBanner.css': 'scss/js-cookieBanner.scss'
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sass');


	// Default task.
	grunt.registerTask('default', ['copy:dist', 'sass', 'jsBuild', 'uglify', 'copy:test']);

};