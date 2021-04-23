function PercentChange(allData){
    let self = this;
    self.worldData = allData[1];
    self.world20Data = allData[1];
    self.init("Japan");
};

PercentChange.prototype.init = function(country) {
    let self = this;
    let divVisualization = d3.select(".percentChange");
    self.svgBounds = divVisualization.node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width;
    self.svgHeight = self.svgWidth/2;

    var svg = divVisualization.select("svg")
        .attr("id", "visualization")
        .attr("width",self.svgWidth)
        .attr("height",self.svgHeight)

    let tooltip = d3.select(".percentChange")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "#fff")
        .style("border", "solid")
        .style("border-width", "3px")
        .style("padding", "4px")
        .style("position", "absolute")
        .style("border-radius", "6px")

    var padding = 35;

    //Scale
    var xScale = d3.scaleBand()
        .range([padding, self.svgWidth - padding])
        .paddingInner(0.1);

    var yScale = d3.scaleLinear()
        .range([self.svgHeight - padding , 0 ])
        // .nice()

    let countryPercentage = self.calculatePercentage(country);

    xScale.domain(countryPercentage.map(function(d) { return +d["year"]; }));

    let maxChange = Math.max(Math.abs(d3.min(countryPercentage, function(d) { return +d["percentChange"]; })), d3.max(countryPercentage, function(d) { return +d["percentChange"]; }));
    yScale.domain([-maxChange, maxChange]);

    var bars = svg.selectAll(".bar")
        .remove()
        .exit()
        .data(countryPercentage)

    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", function(d){
            if(+d["percentChange"] < 0){
                return "#e41a1c";
            } else {
                return "#377eb8";
            }
        })
        .attr("x", function(d){ return xScale(+d["year"]); })
        .attr("y", function(d){ return yScale(Math.max(0, +d["percentChange"])); })
        .attr("height", function(d){ return Math.abs(yScale(+d["percentChange"]) - yScale(0)); })
        .attr("width", xScale.bandwidth())
        .on("mousemove", (event, d) => {        
            tooltip
                .style("opacity", 1)
            tooltip
                .html("<h4>Year: " + d["year"] +  "</h4>  <h4>% Change: "+ d["percentChange"].toFixed(2) + "</h4>")
                .style("left", (event.pageX+30) + "px")
                .style("top", (event.pageY+30) + "px")
            })
            .on("mouseout", (event, d) => {
                tooltip
                    .style("opacity", 0)
            }) 

    //Axis
	let xAxis = d3.axisBottom()
        .scale(xScale)

    let yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(10)

        

    svg.append("g")
        .attr("class", "axis y-axis")
        .attr("transform", "translate(" + 0 + ",178)")
        .call(yAxis)
        .call(xAxis);
}


PercentChange.prototype.update = function(country) {
    let self = this;
    var padding = 35;

    let tooltip = d3.select(".percentChange")
        .select("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "#fff")
        .style("border", "solid")
        .style("border-width", "3px")
        .style("padding", "4px")
        .style("position", "absolute")
        .style("border-radius", "6px")    

    let svg = d3.selectAll(".percentCahngesvg");

    //Scale
    var xScale = d3.scaleBand()
        .range([padding, self.svgWidth - padding])
        .paddingInner(0.1);

    var yScale = d3.scaleLinear()
        .range([self.svgHeight - padding , 0 ])
        // .nice()

    let countryPercentage = self.calculatePercentage(country);

    xScale.domain(countryPercentage.map(function(d) { return +d["year"]; }));

    let maxChange = Math.max(Math.abs(d3.min(countryPercentage, function(d) { return +d["percentChange"]; })), d3.max(countryPercentage, function(d) { return +d["percentChange"]; }));
    yScale.domain([-maxChange, maxChange]);

    var t = d3.transition()
        .duration(750)
        .ease(d3.easeLinear);

    var bars = svg.selectAll(".bar")
        .remove()
        .exit()
        .data(countryPercentage)

    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("fill", function(d){
            if(+d["percentChange"] < 0){
                return "#e41a1c";
            } else {
                return "#377eb8";
            }
        })
        .attr("x", function(d){ return xScale(+d["year"]); })
        .attr("y", function(d){ return yScale(Math.max(0, +d["percentChange"])); })
        .attr("height", function(d){ return Math.abs(yScale(+d["percentChange"]) - yScale(0)); })
        .attr("width", xScale.bandwidth())
        .on("mousemove", (event, d) => {           
            tooltip
                .style("opacity", 1)
            tooltip
                .html("<h4>Year: " + d["year"] +  "</h4>  <h4>% Change: "+ d["percentChange"].toFixed(2) + "</h4>")
                .style("left", (event.pageX+30) + "px")
                .style("top", (event.pageY+30) + "px")
            })
            .on("mouseout", (event, d) => {
                tooltip
                    .style("opacity", 0)
            }) 

    //Axis
	let xAxis = d3.axisBottom()
        .scale(xScale)

    let yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(10)

    svg.selectAll(".y-axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);
}


PercentChange.prototype.calculatePercentage = function(country) {
    let self = this;
    let prevYear= self.worldData[0]["Year"];
    let prevPop = self.worldData[0][country];
    let dataObj = [];
    for(let i = 1; i < self.worldData.length; i++){
        let currentPopulation = self.worldData[i][country];
        let newYear =  self.worldData[i]["Year"];

        let countryPercentChange = ((currentPopulation-prevPop)/prevPop)*100;

        dataObj.push({
            "year": newYear,
            "percentChange": countryPercentChange
        });

        prevPop = currentPopulation;
        prevYear = newYear;
    }

    return dataObj;
}