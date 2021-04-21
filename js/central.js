function CentralChart(allData){
    let self = this;
    self.worldData = allData[1];
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

    var padding = 70;

    //Scale
    var xScale = d3.scaleLinear()
        .domain([1999, 2019])
        .range([ padding, self.svgWidth - padding ]);

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(self.worldData, function(d) { 
            return +d.Pakistan; 
        })])
        .range([ self.svgHeight - 20, 10 ]);

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
            .attr("cy", yScale(self.worldData[i]["Pakistan"]))
            .attr("r", 2.5)
            .attr("fill", "#15e10e") 

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Peru"]))
            .attr("r", 2.5)
            .attr("fill", "#afb668") 

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Bangladesh"]))
            .attr("r", 2.5)
            .attr("fill", "#fec699") 

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Brazil"]))
            .attr("r", 2.5)
            .attr("fill", "#6f919a")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Philippines"]))
            .attr("r", 2.5)
            .attr("fill", "#a5cd0e")


        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["United Kingdom"]))
            .attr("r", 2.5)
            .attr("fill", "#9193d2")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Iran, Islamic Rep."]))
            .attr("r", 2.5)
            .attr("fill", "#a84fd9")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Mexico"]))
            .attr("r", 2.5)
            .attr("fill", "#27ccef")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Togo"]))
            .attr("r", 2.5)
            .attr("fill", "#3108a3")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Egypt, Arab Rep."]))
            .attr("r", 2.5)
            .attr("fill", "#e24181") 

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["South Africa"]))
            .attr("r", 2.5)
            .attr("fill", "#d64023")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Korea, Dem. People’s Rep."]))
            .attr("r", 2.5)
            .attr("fill", "#0ec07b")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Germany"]))
            .attr("r", 2.5)
            .attr("fill", "#ff0461")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Venezuela, RB"]))
            .attr("r", 2.5)
            .attr("fill", "#2a9e04")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Italy"]))
            .attr("r", 2.5)
            .attr("fill", "#8c74d1")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Ukraine"]))
            .attr("r", 2.5)
            .attr("fill", "#215988")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Argentina"]))
            .attr("r", 2.5)
            .attr("fill", "#d1c041")


        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Nigeria"]))
            .attr("r", 2.5)
            .attr("fill", "#48593e")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Japan"]))
            .attr("r", 2.5)
            .attr("fill", "#818b92")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Australia"]))
            .attr("r", 2.5)
            .attr("fill", "#294335")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Russian Federation"]))
            .attr("r", 2.5)
            .attr("fill", "#2ddd59")
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
        .tickFormat(d3.format("d"))

    let yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(10)
        
    svg.append("g")
        .attr("class", "axis x-axis")
        .attr("transform", "translate(0," + (self.svgHeight - 20) + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis y-axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);


    svg.select("text.axis-title").remove();
    svg.append("text")
        .attr("class", "axis-title")
        .attr("x", -5)
        .attr("y", -15)
        .attr("dy", ".1em")
        .style("text-anchor", "end")
        .text("Annual Visitors");
    }
