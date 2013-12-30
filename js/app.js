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
  'lqfb-stats.filters',
  'lqfb-stats.directives',
  'lqfb-stats.controllers'
])
    .config(['ngRoute', '$routeProvider', function($routeProvider) {
      $routeProvider.otherwise({redirectTo: '/'});
    }])
    .value('version', '0.1')
    .factory('JsonFactory', ['ngResource', function($http){
        return { 
            getActiveUsers: function() { return $http.get('js/file.json'); }
        }
     }]); 
   

