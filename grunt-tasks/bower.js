'use strict';

module.exports = {
  dev: {
    dest        : '<%= config.dev.root %>',
    js_dest     : '<%= config.dev.script %>/vendor',
    css_dest    : '<%= config.dev.style %>/vendor',
    less_dest   : '<%= config.dev.style %>/vendor',
    sass_dest   : '<%= config.dev.style %>/vendor',
    scss_dest   : '<%= config.dev.style %>/vendor',
    images_dest : '<%= config.dev.images %>',
    fonts_dest  : '<%= config.dev.font %>',
    svg_dest    : '<%= config.dev.font %>',
    options: {
      keepExpandedHierarchy: false,
      ignorePackages: ['jquery','modernizr']
    }
  }
};
