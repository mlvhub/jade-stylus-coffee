'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({
    
    yeoman: {
      app: 'app',
      srcApp: 'src-app',
      srcTest: 'src-test',
      scripts: 'scripts',
      styles: 'styles',
      templates: 'templates',
      test: 'test',
      unit: 'unit'
    },

    watch: {
      jade: {
        files: ['<%= yeoman.srcApp %>/**/*.jade'],
        tasks: ['clean:jade', 'jade']
      },
      coffeeSrc: {
        files: [
          '<%= yeoman.srcApp %>/<%= yeoman.scripts %>/**/*.coffee'
        ],
        tasks: ['clean:coffee:src', 'coffee:src']
      },
      stylus: {
        files: ['<%= yeoman.srcApp %>/<%= yeoman.styles %>/**/*.styl'],
        tasks: ['clean:stylus', 'stylus'],
      },
      gruntFile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.srcApp %>/*.jade',
          '<%= yeoman.srcApp %>/<%= yeoman.templates%>/**/*.jade',
          '<%= yeoman.srcApp %>/<%= yeoman.scripts%>/**/*.coffee',
          '<%= yeoman.srcApp %>/<%= yeoman.styles%>/**/*.scss',
          '<%= yeoman.srcApp %>/<%= yeoman.images %>/**/*.{png,jpg,jpeg,gif,webp,svg}',
          '<$= yeoman.app %>/**/*'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: ['<%= yeoman.app %>']
        }
      }
    },

    jade: {
      index: {
        files: {
          '<%= yeoman.app %>/index.html': '<%= yeoman.srcApp %>/index.jade'
        }
      },
      templates: {
        expand: true,
        cwd: '<%= yeoman.srcApp %>',
        src: ['<%= yeoman.templates %>/**/*.jade'],
        dest: '<%= yeoman.app %>',
        ext: '.html'
      }
    },

    coffee: {
      src: {
        expand: true,
        cwd: '<%= yeoman.srcApp %>/',
        src: ['<%= yeoman.scripts %>/**/*.coffee'],
        dest: '<%= yeoman.app %>',
        ext: '.js'
      }
    },

    stylus: {
      compile: {
        files: {
          '<%= yeoman.app %>/<%= yeoman.styles %>/main.css': ['<%= yeoman.srcApp %>/<%= yeoman.styles %>/*.styl']
        }
      }
    },

    concurrent: {
      server: [
        'coffee',
        'jade',
        'stylus'
      ]
    },

    clean: {
      jade: {
        src: ['<%= yeoman.app %>/<%= yeoman.templates %>/*']
      },
      stylus: {
        src: ['<%= yeoman.app %>/<%= yeoman.styles %>/*']
      },
      coffee: {
        src: ['<%= yeoman.app %>/<%= yeoman.scripts %>/*'],
        test: ['<%= yeoman.test %>']
      },
      specs: {
        src: ['<%= yeoman.test %>/<%= yeoman.specs %>/*']
      }
    }

  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean',
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

};

