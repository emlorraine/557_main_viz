function CentralChart(worldData){
    let self = this;
    self.worldData = worldData;
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
        .domain([1960, 2020])
        // .domain([1999, 2019])
        .range([ padding, self.svgWidth - padding ]);

    var yScale = d3.scaleLinear()
        .domain([10000000, d3.max(self.worldData, function(d) { 
            return +d.World; 
        })])
        .range([ self.svgHeight - padding, padding ]);

    //world20.csv = last 20 years 
    //world.csv = full 

    d3.csv("data/world.csv", function(data){

        var arrayData = Object.values(data);

        // console.log(arrayData[0]);

        // "YEAR" = arrayData[0]
        // "POPULATIONS" = arrayData[1-n]
        // "COUNTRY NAMES" = Object.entries(data)

        // for(var i = 1; i < arrayData.length; i++){
        //     console.log(arrayData[i])
        // }
        // console.log(data);
        for(var i = 1; i < arrayData.length; i++){
            // console.log(arrayData[i]);
            // console.log(arrayData[0]);
            svg.append("circle")
                .attr("cx", xScale(arrayData[0]))
                .attr("cy", yScale(arrayData[i]))
                .attr("r", 2)
                .attr("fill", function(data){
                    console.log(data);
                    return "black";
                }) //Eventually set color scale 
    
        }
        console.log("-----------------------")
    })

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
