'use strict';

module.exports = {
  less: {
    options: {
      replacements: '<%= config.replacements.less %>'
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.dev.style %>/vendor',
        src: ['bootstrap.less'],
        dest: '<%= config.dev.style %>/vendor',
        ext: '.less'
      }
    ]
  },
  ejs: {
    options: {
      replacements: '<%= config.replacements.bootstrap %>'
    },
    files: [
      {
        expand: true,
        cwd: '_site/public/docs/_includes/',
        src: ['**/*.html'],
        dest: '_site/public/docs/_includes/',
        ext: '.ejs'
      }
    ]
  }
};  