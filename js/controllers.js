'use strict';

/* Controllers */

var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, $http, JsonFactory) {
   $scope.status = null;
   $scope.graph = null; 
    
    function getActives() {
        JsonFactory.getActiveUsers()
           .success(function(data, status) {
               $scope.actives.status = status;
               $scope.actives.graph = data;
               console.log($scope.actives.graph)
               console.log($scope.actives.status)
           })
           .error(function(data, status) {
               $scope.actives.graph = data || "Request failed";
               $scope.actives.status = status;
               console.log($scope.actives.graph)
               console.log($scope.actives.status)
           });
       
    }
    function getTLActivations() {
        JsonFactory.getActiveUsers()
           .success(function(data, status) {
               $scope.tl_activations.status = status;
               $scope.tl_activations.graph = data;
               console.log($scope.tl_activations.graph)
               console.log($scope.tl_activations.status)
           })
           .error(function(data, status) {
               $scope.tl_activations.graph = data || "Request failed";
               $scope.tl_activations.status = status;
               console.log($scope.tl_activations.graph)
               console.log($scope.tl_activations.status)
           });
       
    }
    
    getActives();
    getTLActivations()
}

controllers.
    controller('showActive', showActive);
