module.exports = function (grunt) {
  'use strict';

  var pkg = grunt.file.readJSON('package.json');
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          // TODO: Modify This!
          "/Users/myname/Dropbox/Public/boilerplate.css": "boilerplate.less"
        }
      },
      production: {
        options: {
          paths: ["less"],
          yuicompress: true
        },
        files: {
          "dist/boilerplate.min.css": "boilerplate.less"
        }
      }
    },
    connect: {
      livereload: {
        options: {
          port: 9000
        }
      }
    },
    watch: {
      html: {
        files: 'views/*.html',
        tasks: [],
        options: {
          livereload: true,
          nospawn: true
        }
      },
      less: {
        files: ['*.less', 'less/*.less'],
        tasks: ['less:development'],
        options: {
          livereload: true,
          nospawn: true
        }
      }
    }
  });
  var taskName;
  for(taskName in pkg.devDependencies) {
    if(taskName.substring(0, 6) == 'grunt-') {
      grunt.loadNpmTasks(taskName);
    }
  }
  grunt.registerTask('live', ['connect', 'watch']);
  grunt.registerTask('default', ['less:development', 'live']);
};
