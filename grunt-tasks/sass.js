'use strict';

module.exports = {
  dist: {                            // Target
    options: {                       // Target options
      style: 'expanded'
    },
    files: {                         // Dictionary of files
      '_site/public/css/bootstrap.css': 'assets/bootstrap.scss'       // 'destination': 'source'
    }
  }
};