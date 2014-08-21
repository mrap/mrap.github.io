module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      main: {
        files: {
          'main.css': 'assets/stylesheets/main.scss'
        }
      }
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

  grunt.registerTask('buildDev', [
    'sass',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    // 'uglify:generated',
    'copy',
    'usemin',
  ]);
};
