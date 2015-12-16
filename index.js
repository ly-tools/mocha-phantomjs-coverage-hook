'use strict';

var fs = require('fs');

module.exports = function(name) {
  return {
    afterEnd: function(runner) {
      var coverage = runner.page.evaluate(function() {
        return window[name];
      });
      if (coverage) {
        console.log('Writing coverage to coverage/coverage.json');
        fs.write('coverage/coverage.json', JSON.stringify(coverage), 'w');
      } else {
        console.log('No coverage data generated');
      }
    }
  };
};
