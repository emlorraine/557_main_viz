(function () {
  var instance = null;

  function init() {
    
    let files = ["./data/world.csv", "./data/world20.csv"];
    let promises = [];

    files.forEach(function (path) {
      promises.push(d3.csv(path));
    });

    Promise.all(promises).then(function (values) {
      var centralChart = new CentralChart(values); 

    })

  }

  function Main() {
    if (instance !== null) {
      throw new Error("Cannot instantiate more than one Class");
    }
  }

  Main.getInstance = function () {
    var self = this;
    self.instance = new Main();
    init();
    return instance;
  };

  Main.getInstance();
})();