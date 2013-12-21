'use strict';

//load 
//'http',


// Declare app level module which depends on filters, and services
angular.module('lqfb-stats', [
  'ngRoute',
  'ngResource',
  'lqfb-stats.filters',
  'lqfb-stats.services',
  'lqfb-stats.directives',
  'lqfb-stats.controllers'
])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/viewActive', {templateUrl: 'views/active.html', controller: 'showActive'});
      $routeProvider.when('/viewTimeLine', {templateUrl: 'views/timeline.html'});
      $routeProvider.otherwise({redirectTo: '/'});
    }]);
   
