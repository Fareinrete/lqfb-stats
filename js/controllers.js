'use strict';

/* Controllers */
var ENDPOINTS = 
          { activated:       'http://api.fareinrete.org/v1/users/activated?callback=JSON_CALLBACK',
            tl_activations:  'http://api.fareinrete.org/v1/users/activations?callback=JSON_CALLBACK',
            tl_activated:    'http://api.fareinrete.org/v1/users/lastlogin?callback=JSON_CALLBACK',
            admin_activated: 'http://api.fareinrete.org/v1/admins/activated?callback=JSON_CALLBACK'
           };

var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, $http) {
   $scope.status = null;
   $scope.data = null; 
    
    function getActives() {
        $http.jsonp(ENDPOINTS.activated)
           .success(function(data, status) {
               $scope.status = status;
               $scope.data = data;
               console.log($scope.data)
               console.log($scope.status)
           })
           .error(function(data, status) {
               $scope.data = data || "Request failed";
               $scope.status = status;
               console.log($scope.data)
               console.log($scope.status)
           });
       
    }
    getActives();
}

controllers.
    controller('showActive', showActive);
