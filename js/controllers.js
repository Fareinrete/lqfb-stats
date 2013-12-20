'use strict';

/* Controllers */
var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope) {
      $scope.obj = {meta : 'in cui ci sono i dati'};
  }

controllers.
  controller('showActive', showActive);
