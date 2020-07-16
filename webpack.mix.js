let mix = require('laravel-mix');

mix.js('assets/js/app.js', 'dist/js/')
	.sass('assets/css/app.scss', 'dist/css')
	.setPublicPath('dist/');