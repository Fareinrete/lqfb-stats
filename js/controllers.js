'use strict';

/* Controllers */
var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, Actives) {
   $scope.obj = {meta : 'in cui ci sono i dati'};
    
    function getActives() {
       $scope.data = Actives;
       console.log($scope.data)
    }
    getActives();
}

controllers.
    controller('showActive', showActive);
