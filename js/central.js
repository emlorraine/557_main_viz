
function CentralChart(worldData){
    let self = this;
    self.worldData = worldData;
    self.init();
};

CentralChart.prototype.init = function(){
    let self = this;
    let divVisualization = d3.select("#world-pop-chart");
    self.svgBounds = divVisualization.node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width;
    self.svgHeight = self.svgWidth/2;

    // self.margin = {top: 20, right: 175, bottom: 30, left: 175};
    // self.svgBounds = d3.select("#word-pop-chart").node().getBoundingClientRect();
    // self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    // self.svgHeight = self.svgWidth/2;

    var svg = divVisualization.select("svg")
        .attr("id", "visualization")
        .attr("width",self.svgWidth)
        .attr("height",self.svgHeight)

    var padding = 80;

    //Scale
    var xScale = d3.scaleLinear()
        .domain(d3.extent(self.worldData, function(d) { return +d.Year; }))
        .range([ padding, self.svgWidth ]);


    var yScale = d3.scaleLinear()
        .domain([d3.min(self.worldData, function(d) { 
            return +d.World; 
        }), d3.max(self.worldData, function(d) { 
            return +d.World; 
        })])
        .range([ self.svgHeight - padding, padding ]);
    
    //Adding line
    var aLineGenerator = d3.line()
        .x(function (d) {
            return xScale(+d.Year);
        })
        .y(function (d) {
            return yScale(+d.World);
        });

    svg.append("path")
        .data(self.worldData)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 3)
        .attr("d", aLineGenerator(self.worldData));

    //Axis
	let xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(21)

    let yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(21)
        
    svg.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", "translate(0," + (self.svgHeight - padding) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis y-axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    // svg.append("g")
    //     .call(d3.axisBottom(xScale)
    //         .ticks(21)
    //         .tickFormat(d3.format(".0f"))
    //     )
    //     .attr("transform", "translate(0," + self.svgHeight + ")");
    

    // svg.append("g")
    //     .call(d3.axisLeft(yScale));

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

    // svg.append("text")
    //     .attr("y", 550)
    //     .attr("x", 850)
    //     .attr("class", "labels")
    //     .text("Year");
    
    // svg.append("text")
    //     .attr("class", "labels")
    //     .attr("text-anchor", "end")
    //     .attr("y", 300)
    //     .attr("x", -200)
    //     .attr("dy", ".75em")
    //     .attr("transform", "rotate(-90)")
    //     .text("Number of people");

    
}