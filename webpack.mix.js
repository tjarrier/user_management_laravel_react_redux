const { mix } = require('laravel-mix');
var path = require('path')

const ROOT = path.resolve(__dirname)
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
console.log(__dirname)
mix.webpackConfig({
    resolve: {
        alias: {
            '@containers': path.resolve(__dirname, './resources/assets/js/containers'),
            '@components': path.resolve(__dirname, './resources/assets/js/components'),
            '@router': path.resolve(__dirname, './resources/assets/js/router'),
            '@store': path.resolve(__dirname, './resources/assets/js/store'),
            '@assets': path.resolve(__dirname, './resources/assets/js/assets'),
            '@utils': path.resolve(__dirname, './resources/assets/js/utils'),
        },
        // modules: ['resources/assets/js', 'node_modules'],
    },
    devServer: {
        overlay: true,
    }

})

mix.browserSync('http://localhost:8000')

mix.react('resources/assets/js/index.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
