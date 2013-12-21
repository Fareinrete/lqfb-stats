'use strict';

//load 
//'http',

var REST = { activated: 'http://api.fareinrete.org/v1/users/activated' }

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
    }])
    .factory('Actives', function($http, $templateCache){
         return $http.jsonp(REST.activated, {cache: $templateCache});
    }); 
