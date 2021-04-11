(function () {
  var instance = null;
  function init() {
    Promise.all([
      d3.csv("data/occupancy.csv"),
      d3.csv("data/permit.csv"),
      d3.csv("data/demolition.csv"),
    ]).then(function (files) {
        var occupancyChart = new OccupancyChart(files[0]); 
        occupancyChart.update()

        var permitChart = new PermitChart(files[1]); 
        permitChart.update()

        var demolitionChart = new DemolitionChart(files[2]); 
        demolitionChart.update()
    });
  }

  function Main() {}

  Main.getInstance = function () {
    var self = this;
    self.instance = new Main();
    init();
    return instance;
  };

  Main.getInstance();
})();