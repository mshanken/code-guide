'use strict';

module.exports = {
  js: {
    src: [
      '<%= config.prod.script %>/vendor/jquery*.js',
      '<%= config.prod.script %>/vendor/*.js',
      '<%= config.prod.script %>/vendor/lorem.js',
      '<%= config.prod.script %>/vendor/highlight.pack.js',
      '<%= config.prod.script %>/vendor/fuelux.js',
      '<%= config.prod.script %>/vendor/jasny-bootstrap',
      '<%= config.prod.script %>/app.js',
      '<%= config.prod.script %>/application.js',
      '!<%= config.prod.script %>/vendor/modernizr.js',
      '!<%= config.prod.script %>/vendor/html5shiv.js',
      '!<%= config.prod.script %>/vendor/respond.src.js'
    ],
    dest: '<%= config.prod.script %>/build.js'
  },
  css: {
    src: [
      '<%= config.prod.style %>/main.css',
      '<%= config.prod.style %>/vendor/docs.css',
      '<%= config.prod.style %>/vendor/default.css'
    ],
    dest: '<%= config.prod.style %>/build.min.css'
  }
} ;