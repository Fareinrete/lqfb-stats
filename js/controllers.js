'use strict';

/* Controllers */
var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, Actives) {
   $scope.obj = {meta : 'in cui ci sono i dati'};
    
    function getActives() {
       $scope.data = Actives.get()
       $scope.meta = $scope.data.meta
    }
    getActives();
}

controllers.
    controller('showActive', showActive);
