'use strict';

/* Controllers */

var controllers = angular.module('lqfb-stats.controllers', []);

var getJSON = function($scope, $http, JsonFactory, result) {
        JsonFactory.getActiveUsers()
           .success(function(data, status) {
               result['status'] = status;
               result['graph'] = data;
               console.log(result.graph)
               console.log(result.status)
           })
           .error(function(data, status) {
               result['graph'] = data || "Request failed";
               result['status'] = status;
               console.log(result.graph)
               console.log(result.status)
           });
       
    }

function showActive($scope, $http, JsonFactory) {
    var result = $scope.actives;
    getJSON(result);
    
}

function showDailyActivations($scope, $http, JsonFactory) {
     var result = $scope.tl_activations;
     getJSON(result)
}

controllers
    .controller('showActive', showActive)
    .controller('showDailyActivations', showDailyActivations);
