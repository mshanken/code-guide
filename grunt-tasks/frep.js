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
  docs: {
    options: {
      replacements: '<%= config.replacements.bscontent %>'
    },
    files: [
      {
        /* Bootstrap 3 */
        expand: true,
        cwd: 'docs-assets/docs-src/bootstrap',
        src: ['**/*.html','!assets/*.html'],
        dest: '_site/public/docs',
        ext: '.ejs'
      },
      {
        /* Font Awesome */
        expand: true,
        cwd: 'docs-assets/docs-src/fontawesome',
        src: ['**/*.html','!assets/*.html'],
        dest: '_site/public/docs',
        ext: '.ejs'
      },
      {
        /* FuelUX 3 */
        expand: true,
        cwd: 'docs-assets/docs-src/fuelux',
        src: ['**/*.html','!assets/**/*.html'],
        dest: '_site/public/docs',
        ext: '.ejs'
      },
      {
        /* Jasny 3 */
        expand: true,
        cwd: 'docs-assets/docs-src/jasny',
        src: ['**/*.html','!assets/*.html'],
        dest: '_site/public/docs',
        ext: '.ejs'
      }
    ]
  },
  themes: {
    options: {
      replacements: '<%= config.replacements.themes %>'
    },
    files: [
      {
        /* bootstrap 3 */
        expand: true,
        cwd: 'docs-assets/docs-src',
        src: ['**/**/*.less','!**/bootstrap.less','!**/theme.less','!**/mixins.less','!**/mixins/*.less','!**/fuelux*.less','!**/jasny*.less','!**/skeleton.less'],
        dest: 'theme-builder/themes',
        ext: '.overrides'
      }
    ]
  },
  uidocs: {
    options: {
      replacements: '<%= config.replacements.uidocs %>'
    },
    files: [
      {
        expand: true,
        cwd: '_site/public/_docs/_UI-Docs/',
        src: ['**/*.{html.eco,html}'],
        dest: '_site/public/docs/',
        ext: '.ejs'
      }
    ]
  }
};  