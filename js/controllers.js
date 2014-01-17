'use strict';

/* Controllers */

var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, $http, JsonFactory) {
    var result = $scope.actives;
     
    function getActives() {
        JsonFactory.getActiveUsers()
           .success(function(data, status) {
               result.status = status;
               result.graph = data;
               console.log(result.graph)
               console.log(result.status)
           })
           .error(function(data, status) {
               result.graph = data || "Request failed";
               result.status = status;
               console.log(result.graph)
               console.log(result.status)
           });
       
    }
    
    
    getActives();
    
}

function showDailyActivations($scope, $http, JsonFactory) {
     var result = $scope.tl_activations;
    
     function getDailyActivations() {
        JsonFactory.getTLActivations()
           .success(function(data, status) {
               result.status = status;
               result.graph = data;
               console.log(result.graph)
               console.log(result.status)
           })
           .error(function(data, status) {
               result.graph = data || "Request failed";
               result.status = status;
               console.log(result.graph)
               console.log(result.status)
           });
       
    }
    
    getDailyActivations()
}

controllers
    .controller('showActive', showActive)
    .controller('showDailyActivations', showDailyActivations);
