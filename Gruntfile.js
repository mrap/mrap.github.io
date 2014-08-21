module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      main: {
        files: {
          'main.css': 'assets/stylesheets/main.scss'
        },
      },
    },

    autoprefixer: {
      main: {
        src: 'main.css'
      }
    },

    useminPrepare: {
      html: 'assets/index.html',
      options: {
        root: './',
        dest: './',
      },
    },

    copy: {
      index: {
        src: 'assets/index.html',
        dest: 'index.html'
      }
    },

    cssmin: {
      options: {
        report: 'gzip'
      },
      main: {
        dest: 'main.css',
        src: 'main.css'
      }
    },

    usemin: {
      html: 'index.html',
      options: {
        assetsDirs: ['assets']
      }
    },

    watch: {
      options: {
        livereload: true
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['buildDev'],
      },
      assets: {
        files: ['assets/**/*'],
        tasks: ['buildDev'],
      },
    }

  });

  grunt.registerTask('default', ['buildDev']);
  grunt.registerTask('mainCSS', ['sass', 'autoprefixer']);

  grunt.registerTask('buildDev', [
    'useminPrepare',
    'mainCSS',
    'concat:generated',
    'cssmin:generated',
    // 'cssmin:generated',
    // 'uglify:generated',
    'copy:index',
    'usemin'
  ]);
};
