'use strict';

/* Controllers */

var controllers = angular.module('lqfb-stats.controllers', []);

function showIndex($scope, $http, JsonFactory) {
    $scope.actives = null;
    $scope.tl_activations = null;
    var actives = $scope.actives;
    var tl = $scope.tl_activations;
     
    function getActives() {
        JsonFactory.getActiveUsers()
           .success(function(data, status) {
               actives['status'] = status;
               actives['graph'] = data;
               console.log(actives['status'])
               console.log(actives['status'])
           })
           .error(function(data, status) {
               actives['graph'] = data || "Request failed";
               actives['status'] = status;
               console.log(actives['graph'])
               console.log(actives['status'])
           });
       
    }
    function getDailyActivations() {
        JsonFactory.getTLActivations()
           .success(function(data, status) {
               tl['status'] = status;
               tl['graph'] = data;
               console.log(tl['graph'])
               console.log(tl['status'])
           })
           .error(function(data, status) {
               tl['status'] = status;
               tl['graph'] = data;
               console.log(tl['graph'])
               console.log(tl['status'])
           });
       
    }
    
    
    getActives();
    getDailyActivations()
}

function showDailyActivations($scope, $http, JsonFactory) {
     
    
     
    
    
}

controllers
    .controller('showActive', showActive)
    .controller('showDailyActivations', showDailyActivations);
