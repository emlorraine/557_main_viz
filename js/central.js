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
        .domain([1959, 2020])
        // .domain([1999, 2019])
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


    for(var i = 1; i < self.worldData.length; i++){
        svg.append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["India"]))
            .attr("r", 2)
            .attr("fill", "green")

        svg.append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Brazil"]))
            .attr("r", 2)
            .attr("fill", "yellow")
        

        svg.append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["China"]))
            .attr("r", 2)
            .attr("fill", "red")

        svg.append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["South Africa"]))
            .attr("r", 2)
            .attr("fill", "#012291")
    }
    

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
