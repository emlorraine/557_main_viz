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
        .range([ padding, self.svgWidth ]);
    var yScale = d3.scaleLinear()
        .domain([3893, 5769226171])
        .range([ self.svgHeight - padding, padding ]);

    d3.csv("data/world.csv", function(data){
            for(var i = 0; i < Object.entries(data).length; i++){
                // console.log("YEAR")
                // console.log(Object.entries(data)[0][1])
                // console.log("COUNTRY")
                // console.log(Object.entries(data)[i][0])
                // console.log("POPULATION")
                // console.log(Object.entries(data)[i][1])
                // console.log("-----------------------")
                svg.append("circle")
                    .attr("cx", xScale(Object.entries(data)[0][1]))
                    .attr("cy", yScale(Object.entries(data)[i][1]))
                    .attr("r", 2)
                    .attr("fill", "black")
            }
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
