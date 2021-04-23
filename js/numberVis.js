function NumberVis(allData, country){
    let self = this;
    self.worldData = allData[1];
    self.world20Data = allData[1];
    console.log(self.worldData);
    self.init(country);
};


NumberVis.prototype.init = function(country){

    let self = this;
    let divVisualization = d3.select(".numberPercentChange");
    self.svgBounds = divVisualization.node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width;
    self.svgHeight = self.svgWidth/2;

    var svg = divVisualization.select("svg")
        .attr("id", "visualization")
        .attr("width",self.svgWidth)
        .attr("height",self.svgHeight)

    var padding = 70;
    let diff = (((self.worldData[20][country] - self.worldData[0][country])/self.worldData[0][country]) *100).toFixed(2);

    svg.selectAll("text").text("");
    svg.append("text")
        .text(function(){
            return diff+ "%";
        })
        .style('fill', function(d){
            console.log(diff);
            if(+(diff) < 0){
                return "#e41a1c";
            } else {
                return "#377eb8";
            }
        })
        .attr("x", function(){
            return self.svgWidth/2;
        })
        .attr("y", function(){
            return self.svgHeight/2;
        })
        .style("font-size", 40)
        .style("font-weight", 800)
        .style("text-anchor", "middle");

}

NumberVis.prototype.update = function(country){


    var svg = d3.select(".numberPercentCahngesvg");

    var padding = 70;



    svg.selectAll("text").exit().remove();

    svg.selectAll("text")
        .text(function(){
            return self.worldData[0][country];
        })
        .attr("color", "black")
        .attr("x", function(){
            return self.svgWidth/2;
        })
        .attr("y", function(){
            return self.svgHeight/2;
        })
        
}
