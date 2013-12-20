'use strict';


// Declare app level module which depends on filters, and services
angular.module('lqfb-stats', [
  'ngRoute',
  'lqfb-stats.filters',
  'lqfb-stats.services',
  'lqfb-stats.directives',
  'lqfb-stats.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewActive', {templateUrl: 'views/active.html', controller: 'MyCtrl1'});
  $routeProvider.when('/viewTimeLine', {templateUrl: 'views/timeline.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
