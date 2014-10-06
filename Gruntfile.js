'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({
    
    yeoman: {
      app: 'app',
      srcApp: 'src-app',
      srcTest: 'src-test',
      test: 'test',
      unit: 'unit',
      assets: 'assets',
      images: 'images'
    },

    watch: {
      jade: {
        files: ['<%= yeoman.srcApp %>/**/*.jade'],
        tasks: ['clean:jade', 'jade']
      },
      coffeeSrc: {
        files: [
          '<%= yeoman.app %>/**/*.coffee'
        ],
        tasks: ['clean:coffee:src', 'coffee:src']
      },
      coffeeTest: {
        files: [
          '<%= yeoman.srcTest %>/<%= yeoman.unit%>/**/*.coffee'
        ],
        tasks: ['clean:coffee:test', 'coffee:test']
      },
      stylus: {
        files: ['<%= yeoman.srcApp %>/**/*.styl'],
        tasks: ['clean:stylus', 'stylus'],
      },
      karma: {
        files: [
          '<%= yeoman.srcApp %>/**/*.coffee',
          '<%= yeoman.srcTest %>/<%= yeoman.unit %>/**/*.coffee'
        ],
        tasks: ['karma:unit:run']
      },
      gruntFile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.srcApp %>/**/*.jade',
          '<%= yeoman.srcApp %>/**/*.coffee',
          '<%= yeoman.srcApp %>/**/*.styl',
          '<%= yeoman.srcApp %>/<% yeoman.assets %>/<%= yeoman.images %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
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
        src: ['**/*.jade'],
        dest: '<%= yeoman.app %>',
        ext: '.html'
      }
    },

    coffee: {
      src: {
        expand: true,
        cwd: '<%= yeoman.srcApp %>/',
        src: ['**/*.coffee'],
        dest: '<%= yeoman.app %>',
        ext: '.js'
      },
      test: {
        expand: true,
        cwd: '<%= yeoman.srcTest %>',
        src: ['**/*.coffee'],
        dest: '<%= yeoman.test %>',
        ext: '.js'
      }
    },

    stylus: {
      compile: {
        files: {
          '<%= yeoman.app %>/<%= yeoman.assets %>/main.css': ['<%= yeoman.srcApp %>/**/*.styl']
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
        src: ['<%= yeoman.app %>/**/*.html']
      },
      stylus: {
        src: ['<%= yeoman.app %>/**/*.css']
      },
      coffee: {
        src: ['<%= yeoman.app %>/**/*.js', '!<%= yeoman.app %>/bower_components/**'],
        test: ['<%= yeoman.test %>']
      },
      specs: {
        src: ['<%= yeoman.test %>/<%= yeoman.unit %>/*']
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js',
        runnerPort: 9876
      },
      unit: {
        background: true
      }
    },

    jasmine: {
      tests: {
        src: '<%= yeoman.app %>/**/*.js',
        options: {
          specs: '<%= yeoman.test %>/<%= yeoman.unit %>/**/*.js',
          vendor: [
            'bower_components/requirejs/require.js'
          ]
        }
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
      'karma:unit:start',
      'watch'
    ]);
  });

};

