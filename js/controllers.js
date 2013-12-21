'use strict';

/* Controllers */
var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, Actives) {
   $scope.obj = {meta : 'in cui ci sono i dati'};
    
    function getActives() {
       $scope.data = Actives
           .success(function(data, status) {
               $scope.status = status;
               $scope.data = data;
           })
           .error(function(data, status) {
               $scope.data = data || "Request failed";
               $scope.status = status;
           });
       console.log($scope.data)
       console.log($scope.status)
    }
    getActives();
}

controllers.
    controller('showActive', showActive);
