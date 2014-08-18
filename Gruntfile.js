module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      main: {
        files: {
          'assets/stylesheets/main.css': 'assets/stylesheets/main.scss'
        }
      }
    },

    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      main: {
        files: [
          {
            expand: true,
            src: ['assets/js/*.js', '!assets/js/*.annotated.js'],
            ext: '.annotated.js',
            extDot: 'last'
          },
        ],
      },
    },

    useminPrepare: {
      html: 'assets/index.html',
      options: {
        dest: './'
      }
    },

    copy: {
      main: {
        src: 'assets/index.html',
        dest: 'index.html'
      },
      story: {
        src: 'assets/story.html',
        dest: 'story.html'
      }
    },

    usemin: {
      html: 'index.html',
      options: {
        assetsDirs: ['assets']
      }
    },

    nginclude: {
      options: {
        assetsDirs: ['assets']
      },
      your_target: {
        files: [
          {
            src: 'index.html',
            dest: 'index.html'
          },
          {
            src: 'story.html',
            dest: 'story.html'
          }
        ]
      }
    },

    watch: {
      all: {
        files: ['assets/**/*'],
        tasks: ['buildDev'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.registerTask('default', ['buildDev']);

  grunt.registerTask('prepareAngular', ['ngAnnotate']);

  grunt.registerTask('buildDev', [
    'prepareAngular',
    'sass',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'copy',
    'usemin',
    'nginclude'
  ]);
};
