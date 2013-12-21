'use strict';

/* Controllers */
var REST = { activated: 'http://api.fareinrete.org/v1/users/activated?callback=JSON_CALLBACK' }

var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, $http) {
   $scope.obj = {meta : 'in cui ci sono i dati'};
   $scope.status = null;
   $scope.data = null; 
    
    function getActives() {
        $http.jsonp(REST.activated)
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
