const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/admin/app.js', 'public/js/admin-app.js')
    .js('resources/js/app.js', 'public/js')
    // .copy('resources/css/style.css', 'public/css')
    .sass('resources/scss/main.scss', 'public/css')
    .sass('resources/scss/media.scss', 'public/css')
    .copyDirectory('resources/img', 'public/img')
    .copyDirectory('resources/fonts', 'public/fonts')
    .copyDirectory('resources/favicon', 'public/favicon')

if (mix.inProduction()) {
    mix.version().sourceMaps();
}
