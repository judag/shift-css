/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> Jordan Ranson;' +
            ' Licensed under the Apache2 license */\n',
        // Task configuration.
        less: {
            dist: {
                options: {
                    banner: '<%= banner %>',
                    paths: ["src"]
                },
                files: {
                    "dist/shift.css": "src/master.less"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            dist: {
                files: {
                    'dist/shift.css': ['dist/shift.css']
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/shift.min.css': ['dist/shift.css']
                }
            }
        },
        watch: {
            gruntfile: {
                files: ['src/*.less','src/**/*.less'],
                tasks: ['default']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin']);
    grunt.registerTask('watch', ['watch']);

};
