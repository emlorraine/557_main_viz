function CentralChart(allData){
    let self = this;
    console.log(allData);
    self.worldData = allData[0];
    self.world20Data = allData[1];
    self.init();
};

CentralChart.prototype.init = function(){
    let self = this;
    let divVisualization = d3.select(".world-pop-chart");
    self.svgBounds = divVisualization.node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width;
    self.svgHeight = self.svgWidth/2;

    var svg = divVisualization.select("svg")
        .attr("id", "visualization")
        .attr("width",self.svgWidth)
        .attr("height",self.svgHeight)

    var padding = 80;

    //Scale
    var xScale = d3.scaleLinear()
        .domain([1999, 2019])
        .range([ padding, self.svgWidth - padding ]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(self.worldData, function(d) { 
            return +d.China; 
        })])
        .range([ self.svgHeight - padding, padding ]);

    //world20.csv = last 20 years 
    //world.csv = full 

    // console.log(arrayData[0]);

    // "YEAR" = arrayData[0]
    // "POPULATIONS" = arrayData[1-n]
    // "COUNTRY NAMES" = Object.entries(data)

    let tooltip = d3.select(".visualization")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "#fff")
      .style("border", "solid")
      .style("border-width", "3px")
      .style("padding", "4px")
      .style("position", "absolute")
      .style("border-radius", "6px")

    let node = svg.selectAll("circle").data(self.worldData);  

    for(var i = 1; i < self.worldData.length; i++){
        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["India"]))
            .attr("r", 3)
            .attr("fill", "green") 

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Brazil"]))
            .attr("r", 3)
            .attr("fill", "yellow")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["China"]))
            .attr("r", 3)
            .attr("fill", "red") 

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["South Africa"]))
            .attr("r", 3)
            .attr("fill", "#012291")
    }

    // Tooltips
    // svg.selectAll("circle").on("mousemove", (event, d) => {    
    //     console.log(d);        
    //     tooltip
    //         .style("opacity", 1)
    //     tooltip
    //         .html("<h4>Country: South Africa</h4>  <h4>Population: "+ d["South Africa"] + "</h4>")
    //         .style("left", (event.pageX+30) + "px")
    //         .style("top", (event.pageY+30) + "px")
    //     })
    //     .on("mouseout", (event, d) => {
    //         tooltip
    //             .style("opacity", 0)
    //     }) 
    

    //Axis
	let xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(10)

    let yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(10)
        
    svg.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", "translate(0," + (self.svgHeight - padding) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis y-axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);
    }
