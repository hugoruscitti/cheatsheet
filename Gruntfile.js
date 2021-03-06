/*
 * Assemble Example: Grid
 * http://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Assemble
 * MIT License
 */


module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    config: grunt.file.readJSON('src/config.json'),


    // Build static files from templates and data.
    assemble: {
      options: {
        helpers: '<%= config.helpers %>',
        assets: 'docs/assets'
      },
      pages: {
        options: {
          layout  : 'src/templates/layouts/default.hbs',
          partials: 'src/templates/partials/**/*.hbs',
          data    : ['src/data/cheatsheet.json', 'src/config.json']
        },
        files: {
          'docs' : [ 'src/templates/pages/cheatsheet.hbs' ]
        }
      }
    },


    less: {
      compile: {
        options: {
          paths: [ 'src/styles', 'src/styles/bootstrap']
        },
        files: {
          'docs/assets/css/cheatsheet.css': ['src/styles/cheatsheet.less'],
          'docs/assets/js/prettify/prettify.css': ['src/styles/components/prettify.less']
        }
      }
    },
    watch: {
      src: {
        files: [ 'src/**/*.*' ],
        tasks: [ 'assemble', 'less' ]
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task to be run.
  grunt.registerTask('default', [
    'assemble',
    'less'
  ]);
};
