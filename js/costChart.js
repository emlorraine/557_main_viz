
function CostChart(occupancyData, permitData, demolitionData){
    let self = this;
    self.occupancyData = occupancyData;
    self.permitData = permitData;
    self.demolitionData = demolitionData;
    console.log(self.occupancyData)
    console.log(self.permitData)
    console.log(self.demolitionData)
    self.init();
};

CostChart.prototype.init = function(){
    let self = this;
    self.margin = {top: 20, right: 175, bottom: 30, left: 175};
    self.svgBounds = d3.select("#cost").node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = self.svgWidth/2;
    

    const svg = d3.select("#cost").append("svg")
        .attr("width", 1200)
        .attr("height", 600)
        .attr("class", "cost");

    var x = d3.scaleLinear()
        .domain(d3.extent(self.permitData, function(d) { return +d.YEAR; }))
        .range([0, 800 ]);
    svg.append("g")
        .attr("transform", "translate(75," + 500 + ")")
        .call(d3.axisBottom(x));

    var y = d3.scaleLinear()
        .domain([0, d3.max(self.permitData, function(d) { return +d.TOTALVALUE; })])
        .range([ 450, 0 ]);
    svg.append("g")
        .attr('transform', 'translate(' + 75 + ',' + 50 + ')') 
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
            return y(+d.TOTALVALUE) 
        }))
        .attr('transform', 'translate(' + 75 + ',' + 50 + ')') 

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
            return y(+d.TOTALVALUE) 
        }))
        .attr('transform', 'translate(' + 75 + ',' + 50 + ')') 

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
            console.log(d);
            return y(+d.TOTALVALUE) 
        }))
        .attr('transform', 'translate(' + 75 + ',' + 50 + ')') 
}