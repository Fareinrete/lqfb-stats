'use strict';

//load 
//'http',
var ENDPOINTS = 
          { activated:       'http://vs1.proposte.fermareildeclino.it/~fale/activated.json',
            tl_activations:  'http://api.fareinrete.org/v1/users/activations?callback=JSON_CALLBACK',
            tl_activated:    'http://api.fareinrete.org/v1/users/lastlogin?callback=JSON_CALLBACK',
            admin_activated: 'http://api.fareinrete.org/v1/admins/activated?callback=JSON_CALLBACK'
           };

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
    .factory('Actives', function($http){
        return { 
            getActiveUsers: function() { return $http.get('file.json'); }
        }
     }); 
   
