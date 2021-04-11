
function OccupancyChart(occupancy){
    let self = this;
    self.occupancy = occupancy;
    self.init();
};

OccupancyChart.prototype.init = function(){

    var feb = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","29"];
    var march =["", "2","","","","6","7","","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29", "30",""]; 
    var april =["1", "","3","","5","6","7","8","9","10","","","","14","","16","17","18","","","21","22","23","","","","27","","",""]; 
    var may =["", "","","","5","","","","","","","","","","15","","","","","","","22","","","","","","","29", "30",""]; 
    var june =["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]; 
    var july =["", "2","","","","","","","","","","","","","","","","","","20","21","","","","","","27","28","","30",""]; 
    var august =["", "","3","","5","","","","","","","12","13","","","","","","","","","","23","","","","","","","",""]; 
    var september =["", "","","","","","","","","10","","","","","","16","","","","","","","23","","","","","28","",""]; 
    var october =["", "","","","","","","","","","","","13","","","","","","","","","","","","","","","","",""]; 
    var november =["","","3","","5","","","","","","","","","","","","","","","","","","","","","","","","","",""]; 
    var data =[feb, march,april,may,june,july,august,september,october,november]
    days = [29, 31, 30, 31, 30, 31, 31, 30, 31, 30];


    let self = this;
    self.margin = {top: 20, right: 175, bottom: 30, left: 175};
    self.svgBounds = d3.select("#calendar").node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = self.svgWidth/2;

    const svg = d3.select("#calendar").append("svg")
        .attr("width", 500)
        .attr("height", 500)
        .attr("class", "cluster");

    svg.selectAll("rect")
        .data(march)
        .enter()
        .append("rect")
        .attr("width", 25)
        .attr("height", 25)
        .attr("x", function(d,i){
            return (i%7)* 30; 
        })
        .attr("y", function(d,i){
            return Math.floor(i/7)%7 * 30;
        })
        .attr("fill", function(d){
            if(d===""){
                return "white"; 
            }
            else{
                return "red"; 
            }
        })
        .attr("stroke","black")             
}