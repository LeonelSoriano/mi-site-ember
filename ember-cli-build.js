/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here

        babel: {
            blacklist: [
                'es6.arrowFunctions',
                'es6.blockScoping',
                'es6.classes',
                'es6.destructuring',
                'es6.parameters',
                'es6.properties.computed',
                // ...more options
            ],
            sourceMaps: 'inline'
        },


        'ember-cli-foundation-6-sass': {
            'foundationJs': 'all'
        },

        emberValidator: {
            useDateValidator: false
        }

    });



    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.
//app.import('bower_components/foundation-sites/dist/js/foundation.js');
    return app.toTree();
};