'use strict';

/* Controllers */
var REST = { activated: 'http://api.fareinrete.org/v1/users/activated' }

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}

var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, $http) {
   $scope.obj = {meta : 'in cui ci sono i dati'};
   $scope.status = null;
   $scope.data = null; 
    
    function getActives() {
        $http.jsonp({url: REST.activated, callback: 'JSON_CALLBACK'})
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
