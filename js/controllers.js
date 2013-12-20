'use strict';

/* Controllers */
var controllers = angular.module('lqfb-stats.controllers', []);

function showActive($scope, Actives) {
   $scope.obj = {meta : 'in cui ci sono i dati'};
    
    function getActives() {
       $scope.data = Actives.list({limit:30})
    }
    getActives();
}

controllers.
    controller('showActive', showActive);