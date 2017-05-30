(function(d3) {

// sample dataset to be used to create the pie chart
var dataset = [
  { label: 'Abulia', count: 10 },
  { label: 'Betelgeuse', count: 20 },
  { label: 'Cantaloupe', count: 30 },
  { label: 'Dijkstra', count: 40 }
];

// define dimensions for the chart

var width = 360,
	height = 360,
	radius = Math.min(width,height)/2; // divide by two to define the radius of pie chart

// define color spectrum
var color = d3.scaleOrdinal(d3.schemeCategory20b);

//create svg window
var svg = d3.select('#chart')
		   .append('svg')
		   .attr('width', width)
		   .attr('height', height)
		   .append('g')
		   .attr('transform', 'translate(' +(width/2) + ',' + (height/2) + ')');

var arc = d3.arc()
		  .innerRadius(0)
		  .outerRadius(radius);

var pie = d3.pie()
		  .value(function(d) {
		  	return d.count;
		  }).sort(null);	

var path = svg.selectAll('path')
			.data(pie(dataset))
			.enter()
			.append('path')
			.attr('d', arc)
			.attr('fill', function (d) {
				return color(d.data.label);
			});

})(window.d3);

