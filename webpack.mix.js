const { mix } = require('laravel-mix');

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
/*
mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
*/
/*
* External libraries
*/
mix.combine([
    'node_modules/react/dist/react.min.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/redux/dist/redux.min.js',
    'node_modules/react-redux/dist/react-redux.min.js',
    'node_modules/babel-standalone/babel.min.js',
    'node_modules/socket.io-client/socket.io.min.js',
], 'public/javascripts/vendor.js');
/*
* React components
*/
mix.combine([
    'resources/javascripts/react/keyboard.react.js',
    'resources/javascripts/react/player.react.js',
    'resources/javascripts/react/cuckoo.react.js',
    'resources/javascripts/react/app.react.js'
], 'public/javascripts/app.js');
/*
* Redux components
*/
mix.combine([
    'resources/javascripts/redux/player.redux.js',
    'resources/javascripts/redux/cuckoo.redux.js',
    'resources/javascripts/redux/root.redux.js',
], 'public/javascripts/redux.js');
/*
* Addition scripts
*/
mix.combine([
    'resources/javascripts/throttle.js',
    'resources/javascripts/socket.js',
], 'public/javascripts/index.js');
/*
* stylesheets
*/
mix.combine([
    'resources/stylesheets/player.css',
    'resources/stylesheets/cuckoo.css',
], 'public/stylesheets/styles.css');
