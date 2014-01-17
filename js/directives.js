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
            valuesactivated: '='
        },
        link: function(scope, element, attrs) {
            scope.$watch('valuesactivated', function(data) {
                if(data) {
                    console.log('values from directive: ', data);
                    //d3.select('svg').remove();
                    var width = (document.documentElement.clientWidth / 100) * 16,
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
                        return d.data.status+':'+d.data.user_count;
                    
                    });
                }
            });
        }
    };
}).directive('graphactivations', function() {
    return {
        restrict: 'E',
        scope: {
            valuesactivations: '='
        },
        link: function(scope, element, attrs) {
            scope.$watch('valuesactivations', function(data) {
                if(data) {
                    console.log('values from directive: ', data);
                    
			var w = 600;
			var h = 100;
			var barPadding = 1;
			var barPadding = 3;
           			var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];
                    
            console.log('dataset: ', dataset);        
			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
			   .attr("y", function(d) {
			   		return h - (d * 4);
			   })
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return d * 4;
			   });    
                    
                }
            });
        }
    }
});
