(function () {
  var instance = null;
  function init() {
    Promise.all([
      d3.csv("data/occupancy.csv"),
      d3.csv("data/permits.csv"),
      d3.csv("data/demolition.csv"),
    ]).then(function (files) {
        var centralChart = new CentralChart(files[0], files[1], files[2]); 
        // var costChart = new CostChart(files[0], files[1], files[2]); 


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