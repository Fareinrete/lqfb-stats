'use strict';

/* Controllers */

var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, $http, JsonFactory) {
   $scope.status = null;
   $scope.graph = null; 
    
    function getActives() {
        JsonFactory.getActiveUsers()
           .success(function(data, status) {
               $scope.status = status;
               $scope.description = data.description;
               $scope.graph = data;
               console.log($scope.graph)
               console.log($scope.status)
           })
           .error(function(data, status) {
               $scope.graph = data || "Request failed";
               $scope.status = status;
               console.log($scope.graph)
               console.log($scope.status)
           });
       
    }
    getActives();
}

controllers.
    controller('showActive', showActive);
