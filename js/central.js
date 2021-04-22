function CentralChart(allData, country){
    let self = this;
    self.worldData = allData[1];
    self.world20Data = allData[1];
    self.init("Japan");
};

CentralChart.prototype.init = function(country){
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

    let node = svg.selectAll("circle").data(self.worldData);  

    for(var i = 1; i < self.worldData.length; i++){

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Lithuania"]))
            .attr("fill", "#15e10e") 
            .attr("r", function(){
                if(country === "Lithuania"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Lithuania"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Greece"]))
            .attr("fill", "#afb668") 
            .attr("r", function(){
                if(country === "Greece"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Greece"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Bangladesh"]))
            .attr("fill", "#fec699") 
            .attr("r", function(){
                if(country === "Bangladesh"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Bangladesh"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Brazil"]))
            .attr("fill", "#6f919a")
            .attr("r", function(){
                if(country === "Brazil"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Brazil"){
                    return "black";
                }
            })
            

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Philippines"]))
            .attr("fill", "#a5cd0e")
            .attr("r", function(){
                if(country === "Philippines"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Philippines"){
                    return "black";
                }
            })


        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["United Kingdom"]))
            .attr("fill", "#9193d2")
            .attr("r", function(){
                if(country === "United Kingdom"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "United Kingdom"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Portugal"]))
            .attr("fill", "#a84fd9")
            .attr("r", function(){
                if(country === "Portugal"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Portugal"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Mexico"]))
            .attr("fill", "#27ccef")
            .attr("r", function(){
                if(country === "Mexico"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Mexico"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Bulgaria"]))
            .attr("fill", "#3108a3")
            .attr("r", function(){
                if(country === "Bulgaria"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Bulgaria"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["South Africa"]))
            .attr("fill", "#d64023")
            .attr("r", function(){
                if(country === "South Africa"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "South Africa"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Korea, Dem. People’s Rep."]))
            .attr("fill", "#0ec07b")
            .attr("r", function(){
                if(country === "Korea, Dem. People’s Rep."){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Korea, Dem. People’s Rep."){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Germany"]))
            .attr("fill", "#ff0461")
            .attr("r", function(){
                if(country === "Germany"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Germany"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Venezuela, RB"]))
            .attr("fill", "#2a9e04")
            .attr("r", function(){
                if(country === "Venezuela, RB"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Venezuela, RB"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Italy"]))
            .attr("fill", "#8c74d1")
            .attr("r", function(){
                if(country === "Italy"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Italy"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Ukraine"]))
            .attr("fill", "#215988")
            .attr("r", function(){
                if(country === "Ukraine"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Ukraine"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Argentina"]))
            .attr("fill", "#d1c041")
            .attr("r", function(){
                if(country === "Argentina"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Argentina"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Japan"]))
            .attr("r", function(){
                if(country === "Japan"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Japan"){
                    return "black";
                }
            })
            .attr("fill", "#818b92")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Australia"]))
            .attr("fill", "#294335")
            .attr("r", function(){
                if(country === "Australia"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Australia"){
                    return "black";
                }
            })


        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Russian Federation"]))
            .attr("fill", "#2ddd59")
            .attr("r", function(){
                if(country === "Russian Federation"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Russian Federation"){
                    return "black";
                }
            })
            
    }    

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
}


CentralChart.prototype.update = function(country) {
    let self = this;

    let svg = d3.selectAll(".worldsvg");

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

    let node = svg.selectAll("circle").remove().exit().data(self.worldData);  

    for(var i = 1; i < self.worldData.length; i++){

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Lithuania"]))
            .attr("fill", "#15e10e") 
            .attr("r", function(){
                if(country === "Lithuania"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Lithuania"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Greece"]))
            .attr("fill", "#afb668") 
            .attr("r", function(){
                if(country === "Greece"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Greece"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Bangladesh"]))
            .attr("fill", "#fec699") 
            .attr("r", function(){
                if(country === "Bangladesh"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Bangladesh"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Brazil"]))
            .attr("fill", "#6f919a")
            .attr("r", function(){
                if(country === "Brazil"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Brazil"){
                    return "black";
                }
            })
            

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Philippines"]))
            .attr("fill", "#a5cd0e")
            .attr("r", function(){
                if(country === "Philippines"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Philippines"){
                    return "black";
                }
            })


        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["United Kingdom"]))
            .attr("fill", "#9193d2")
            .attr("r", function(){
                if(country === "United Kingdom"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "United Kingdom"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Portugal"]))
            .attr("fill", "#a84fd9")
            .attr("r", function(){
                if(country === "Portugal"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Portugal"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Mexico"]))
            .attr("fill", "#27ccef")
            .attr("r", function(){
                if(country === "Mexico"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Mexico"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Bulgaria"]))
            .attr("fill", "#3108a3")
            .attr("r", function(){
                if(country === "Bulgaria"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Bulgaria"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["South Africa"]))
            .attr("fill", "#d64023")
            .attr("r", function(){
                if(country === "South Africa"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "South Africa"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Korea, Dem. People’s Rep."]))
            .attr("fill", "#0ec07b")
            .attr("r", function(){
                if(country === "Korea, Dem. People’s Rep."){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Korea, Dem. People’s Rep."){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Germany"]))
            .attr("fill", "#ff0461")
            .attr("r", function(){
                if(country === "Germany"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Germany"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Venezuela, RB"]))
            .attr("fill", "#2a9e04")
            .attr("r", function(){
                if(country === "Venezuela, RB"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Venezuela, RB"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Italy"]))
            .attr("fill", "#8c74d1")
            .attr("r", function(){
                if(country === "Italy"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Italy"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Ukraine"]))
            .attr("fill", "#215988")
            .attr("r", function(){
                if(country === "Ukraine"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Ukraine"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Argentina"]))
            .attr("fill", "#d1c041")
            .attr("r", function(){
                if(country === "Argentina"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Argentina"){
                    return "black";
                }
            })

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Japan"]))
            .attr("r", function(){
                if(country === "Japan"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Japan"){
                    return "black";
                }
            })
            .attr("fill", "#818b92")

        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Australia"]))
            .attr("fill", "#294335")
            .attr("r", function(){
                if(country === "Australia"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Australia"){
                    return "black";
                }
            })


        nodes = node
            .enter()
            .append("circle")
            .attr("cx", xScale(self.worldData[i]["Year"]))
            .attr("cy", yScale(self.worldData[i]["Russian Federation"]))
            .attr("fill", "#2ddd59")
            .attr("r", function(){
                if(country === "Russian Federation"){
                    return 4;
                } else {
                    return 2.5;
                }
            })
            .style("stroke", function(){
                if(country === "Russian Federation"){
                    return "black";
                }
            })

        nodes.exit().remove();
            
    }    

    //Axis
	let xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(10)
        .tickFormat(d3.format("d"))

    let yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(10)
        
    svg.selectAll("x-axis")
        .attr("transform", "translate(0," + (self.svgHeight - 20) + ")")
        .call(xAxis);

    svg.selectAll("y-axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);
    
}
