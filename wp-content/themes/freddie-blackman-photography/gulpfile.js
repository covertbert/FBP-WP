"use strict";

var gulp = require('gulp'),
	maps = require('gulp-sourcemaps'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	browserSync = require('browser-sync'),
	inquirer = require("inquirer"),
	replace = require('gulp-replace'),
	del = require('del'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer');


gulp.task('compileSass', function () {
	return gulp.src("scss/application.scss")
		.pipe(maps.init())
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('.'))
		.pipe(browserSync.stream());
});

gulp.task('clean', function () {
	del('dist');
});


gulp.task('serve', ['compileSass'], function () {
	browserSync({
		proxy: "fbp.dev",
		host: "localhost",
		notify: false
	});
	gulp.watch('scss/**/*.scss', ['compileSass']);
	gulp.watch(['*.php', 'js/**/*.js', 'scss/**/*.scss']).on("change", browserSync.reload);
});


gulp.task('setup', function () {
	inquirer.prompt([
			{
				type: 'input',
				name: 'Server',
				message: "What is the URL you've assigned to your local wordpress server?"
			}],
		function (answers) {
			var stringAnswer = answers.Server;
			gulp.src(['gulpfile.js'])
				.pipe(replace('proxy: "fbp.dev"', 'proxy: "' + stringAnswer + '"'))
				.pipe(gulp.dest('./'));
		});
});

gulp.task("build", ['clean'], function () {
	return gulp.src(['!./node_modules/**', '!./scss/**', '**/**/*.*', '!js/**/!(application.js)', '!js/*.js.map', '!*.css.map'], {base: './'})
		.pipe(gulp.dest('dist'));
});




