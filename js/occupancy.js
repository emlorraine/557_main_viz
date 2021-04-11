
function OccupancyChart(occupancyData){
    let self = this;
    self.occupancyData = occupancyData;
    self.init();
};

OccupancyChart.prototype.init = function(){
    let self = this;
    self.margin = {top: 20, right: 175, bottom: 30, left: 175};
    self.svgBounds = d3.select("#occupancy").node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = self.svgWidth/2;
    

    const svg = d3.select("#occupancy").append("svg")
        .attr("width", 450)
        .attr("height", 400)
        .attr("class", "occupancy");

    var x = d3.scaleLinear()
        .domain(d3.extent(self.occupancyData, function(d) { return +d.YEAR; }))
        .range([ 0, 350 ]);
    svg.append("g")
        .attr("transform", "translate(50," + 250 + ")")
        .call(d3.axisBottom(x)
            .ticks(5)
            .tickFormat(d3.format(".0f"))
        );

    var y = d3.scaleLinear()
        .domain([0, d3.max(self.occupancyData, function(d) { return +d.TOTALNUMBER; })])
        .range([ 200, 0 ]);
    svg.append("g")
        .attr("transform", "translate(50," + 50 + ")")
        .call(d3.axisLeft(y));
    svg.append("path")
      .datum(self.occupancyData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 3)
      .attr("d", d3.line()
        .x(function(d) { 
            return x(+d.YEAR) 
        })
        .y(function(d) { 
            return y(+d.TOTALNUMBER) 
        }))
        .attr("transform", "translate(50," + 50 + ")") 

    svg.append("text")
        .attr("y", 290)
        .attr("x", 225)
        .attr("class", "labels")
        .text("Year");
    
    svg.append("text")
        .attr("class", "labels")
        .attr("text-anchor", "end")
        .attr("y", 0)
        .attr("x", -100)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Number of permits");   
}