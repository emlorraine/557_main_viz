
function CentralChart(worldData){
    let self = this;
    self.worldData = worldData;
    self.init();
};

CentralChart.prototype.init = function(){
    let self = this;
    self.margin = {top: 20, right: 175, bottom: 30, left: 175};
    self.svgBounds = d3.select("#central").node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = self.svgWidth/2;
    

    const svg = d3.select("#central").append("svg")
        .attr("width", 1200)
        .attr("height", 1000)
        .attr("class", "central");

    var xScale = d3.scaleLinear()
        .domain(d3.extent(self.worldData, function(d) { return +d.Year; }))
        .range([ 0, 800 ]);

    svg.append("g")
        .attr("transform", "translate(400," + 500 + ")")
        .call(d3.axisBottom(xScale)
            .ticks(21)
            .tickFormat(d3.format(".0f"))
        );

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(self.worldData, function(d) { 
            return +d.World; 
        })])
        .range([ 450, 0 ]);
    svg.append("g")
        .attr("transform", "translate(400," + 50 + ")")
        .call(d3.axisLeft(yScale));


    var lines = svg.selectAll("line").data(self.worldData);
    lines.enter()
      .append("path")
        .attr("stroke", "black")
        .attr("stroke-width", 3)
        .attr("d", d3.line()
            .x(function(d) { return x(+d.Year); })
            .y(function(d) { return y(+d.World); }))
        .attr("transform", "translate(400," + 50 + ")")
    lines.exit().remove()
        

    // svg.append("path")
    //   .datum(self.permitData)
    //   .attr("fill", "none")
    //   .attr("stroke", "red")
    //   .attr("stroke-width", 3)
    //   .attr("d", d3.line()
    //     .x(function(d) { 
    //         return x(+d.YEAR) 
    //     })
    //     .y(function(d) { 
    //         return y(+d) 
    //     }))
    //     .attr("transform", "translate(500," + 50 + ")")

    // svg.append("path")
    //   .datum(self.demolitionData)
    //   .attr("fill", "none")
    //   .attr("stroke", "green")
    //   .attr("stroke-width", 3)
    //   .attr("d", d3.line()
    //     .x(function(d) { 
    //         return x(+d.YEAR) 
    //     })
    //     .y(function(d) { 
    //         return y(+d.TOTALNUMBER) 
    //     }))
    //     .attr("transform", "translate(500," + 50 + ")")

    svg.append("text")
        .attr("y", 550)
        .attr("x", 850)
        .attr("class", "labels")
        .text("Year");
    
    svg.append("text")
        .attr("class", "labels")
        .attr("text-anchor", "end")
        .attr("y", 300)
        .attr("x", -200)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Number of people");

    
}