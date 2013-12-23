'use strict';
/* Directives */
var directives = angular.module('lqfb-stats.directives', []);
directives.directive('appVersion', ['version',
    function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }
]).directive('graphactives', function() {
    return {
        restrict: 'E',
        scope: {
            values: '='
        },
        link: function(scope, element, attrs) {
            scope.$watch('values', function(data) {
                if(data) {
                    console.log('values from directive: ', data);
                    //d3.select('svg').remove();
                    var width = (document.documentElement.clientWidth / 100) * 20,
                        height = 150,
                        radius = Math.min(width, height) / 2;
                    
                    var color = d3.scale.ordinal().range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
                    
                    var arc = d3.svg.arc().outerRadius(radius - 10).innerRadius(4);
                    
                    var pie = d3.layout.pie().sort(null).value(function(d) {
                        return d.user_count;
                    });
                    
                    var svg = d3.select("graphactives").append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 3 + "," + height / 2 + ")");
                    
                    var g = svg.selectAll(".arc").data(pie(data)).enter().append("g").attr("class", "arc");
                    
                    g.append("path").attr("d", arc).style("fill", function(d) {
                        return color(d.data.status);
                    });
                    
                    g.append("text").attr("transform", function(d) {
                        return "translate(" + arc.centroid(d) + ")";
                    }).attr("dy", ".35em").style("text-anchor", "middle").text(function(d) {
                        return d.data.status;
                    
                    });
                }
            });
        }
    };
});