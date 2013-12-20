'use strict';

/* Directives */


angular.module('lqfb-stats.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
