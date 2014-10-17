/*
 * grunt-companeo-concatanduglify-cached
 * https://github.com/Companeo/grunt-companeo-concatanduglify-cached
 *
 * Copyright (c) 2014 companeo
 * Licensed under the MIT license.
 */

/*globals module */

(function () {
    'use strict';

    module.exports = function (grunt) {

        // Project configuration.
        grunt.initConfig({
            jshint                          : {
                all     : [
                    'Gruntfile.js',
                    'tasks/*.js'
                ],
                options : {
                    jshintrc : '.jshintrc'
                }
            },

            // Configuration to be run (and then tested).
            companeo_concatanduglify_cached : {
                default_options : {
                    options : {
                    },
                    files   : {
                        'result/default_options' : ['test/fixtures/testing.js', 'test/fixtures/123.js'],
                        'result/options_default' : ['test/fixtures/123.js', 'test/fixtures/testing.js']
                    }
                }
            },

            // Unit tests.
            nodeunit                        : {
                tests : ['test/*_test.js']
            }

        });

        // Actually load this plugin's task(s).
        grunt.loadTasks('tasks');

        // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-contrib-nodeunit');

        // Whenever the "test" task is run, first clean the "tmp" dir, then run this
        // plugin's task(s), then test the result.
        grunt.registerTask('test', ['companeo_concatanduglify_cached', 'node_unit']);

        // By default, lint and run all tests.
        grunt.registerTask('default', ['jshint', 'companeo_concatanduglify_cached']);

    };
}());