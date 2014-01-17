'use strict';

/* Controllers */

var controllers = angular.module('lqfb-stats.controllers', []);

function showIndex($scope, $http, JsonFactory) {
    $scope.actives = null;
    $scope.tl_activations = null;
      
    function getActives() {
        JsonFactory.getActiveUsers()
           .success(function(data, status) {
               $scope.actives = data;
               console.log($scope.actives);
               
           })
           .error(function(data, status) {
               $scope.actives = data
               console.log($scope.actives)
           });
       
    }
    function getDailyActivations() {
        JsonFactory.getTLActivations()
           .success(function(data, status) {
               $scope.tl_activations = data
               console.log($scope.tl_activations)
           })
           .error(function(data, status) {
               $scope.tl_activations = data
               console.log($scope.tl_activations)
           });
       
    }
    
    
    getActives();
    getDailyActivations();
}

controllers
    .controller('showIndex', showIndex);
