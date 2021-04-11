
function CentralChart(occupancyData, permitData, demolitionData){
    let self = this;
    self.occupancyData = occupancyData;
    self.permitData = permitData;
    self.demolitionData = demolitionData;
    self.init();
};

CentralChart.prototype.init = function(){
    let self = this;
    self.margin = {top: 20, right: 175, bottom: 30, left: 175};
    self.svgBounds = d3.select("#central").node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = self.svgWidth/2;
    

    const svg = d3.select("#central").append("svg")
        .attr("width", 900)
        .attr("height", 600)
        .attr("class", "central");

    var x = d3.scaleLinear()
        .domain(d3.extent(self.permitData, function(d) { return +d.YEAR; }))
        .range([ 0, 800 ]);
    svg.append("g")
        .attr("transform", "translate(50," + 500 + ")")
        .call(d3.axisBottom(x)
            .ticks(5)
            .tickFormat(d3.format(".0f"))
        );

    var y = d3.scaleLinear()
        .domain([0, d3.max(self.permitData, function(d) { return +d.TOTALNUMBER; })])
        .range([ 450, 0 ]);
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
        

    svg.append("path")
      .datum(self.permitData)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 3)
      .attr("d", d3.line()
        .x(function(d) { 
            return x(+d.YEAR) 
        })
        .y(function(d) { 
            return y(+d.TOTALNUMBER) 
        }))
        .attr("transform", "translate(50," + 50 + ")")

    svg.append("path")
      .datum(self.demolitionData)
      .attr("fill", "none")
      .attr("stroke", "green")
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
        .attr("y", 550)
        .attr("x", 425)
        .attr("class", "labels")
        .text("Year");
    
    svg.append("text")
        .attr("class", "labels")
        .attr("text-anchor", "end")
        .attr("y", 0)
        .attr("x", -200)
        .attr("dy", ".75em")
        .attr("transform", "rotate(-90)")
        .text("Number of permits");

    
}