'use strict';

/* Controllers */
var controllers = angular.module('lqfb-stats.controllers', []);

var showActive = function($scope) {
      $scope.obj = {meta : 'in cui ci sono i dati'};
  }

controllers.
  controller('showActive', showActive);