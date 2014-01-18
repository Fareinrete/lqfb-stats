'use strict';

/* Controllers */

var controllers = angular.module('lqfb-stats.controllers', []);

function showIndex($scope, $http, JsonFactory) {
    $scope.actives = null;
    $scope.tl_activations = null;
    $scope.tl_Activated = null;
    $scope.admin_activated = null;
    
    var factories = { actives: JsonFactory.getActiveUsers(),
                      tl_activations: JsonFactory.getTLActivations(),
                      tl_Activated: JsonFactory.getTL_Activated(),
                      admin_activated: JsonFactory.getAdminActivated()}
    
    function getFactories(){
        for (var k in factories){
            factories[k].success(function(data, status) {
               $scope.k = data;
               console.log($scope.k);
               
               })
               .error(function(data, status) {
               $scope.k = data
               console.log($scope.k)
           });
            
        }
        
    }
      
    getFactories();
    console.log($scope)
}

controllers
    .controller('showIndex', showIndex);
