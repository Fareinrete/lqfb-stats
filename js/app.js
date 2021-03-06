'use strict';

//load 
//'http',
var ENDPOINTS = 
          { activated:       'http://api.fareinrete.org/v1/users/activated?callback=JSON_CALLBACK',
            tl_activations:  'http://api.fareinrete.org/v1/users/activations?callback=JSON_CALLBACK',
            tl_login:    'http://api.fareinrete.org/v1/users/lastlogin?callback=JSON_CALLBACK',
            admin_activated: 'http://api.fareinrete.org/v1/admins/activated?callback=JSON_CALLBACK'
           };

// Declare app level module which depends on filters, and services
angular.module('lqfb-stats', [
  'ngRoute',
  'ngResource',
  'lqfb-stats.filters',
  'lqfb-stats.directives',
  'lqfb-stats.controllers'
])
    .config(['$routeProvider', function($routeProvider) {
      
      $routeProvider.otherwise({redirectTo: '/'});
    }])
    .value('version', '0.1')
    .factory('JsonFactory', function($http){
        return { 
            getActiveUsers: function() { return $http.jsonp(ENDPOINTS.activated); },
            getTLActivations: function() { return $http.jsonp(ENDPOINTS.tl_activations); },
            getTL_Login: function() { return $http.jsonp(ENDPOINTS.tl_login); },
            getAdminActivated: function() { return $http.jsonp(ENDPOINTS.admin_activated); }
        }
    }); 
   
