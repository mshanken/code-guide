'use strict';

module.exports = {
  options: {
    mangle: false
  },
  js: {
    src:['<%= config.prod.script %>/build.js'],
    dest: '<%= config.prod.script %>/build.min.js'
  }
};