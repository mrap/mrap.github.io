module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

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
    }

  });

  grunt.registerTask('default', ['buildDev']);

  grunt.registerTask('prepareAngular', ['ngAnnotate']);

  grunt.registerTask('buildDev', [
    'prepareAngular',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'copy',
    'usemin',
    'nginclude'
  ]);

  grunt.registerTask('buildProd', [
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'copy:index',
    'usemin',
    'nginclude'
  ]);
};
