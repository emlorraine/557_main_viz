// this file holds the interations with the pop-ups
let randomId = Math.floor(Math.random() * 10000) + 1; 
let totalSeconds = 0;
let dropDownUpdates = 0;
let exploredCountries = {};

//Counting the seconds of user 
var myTimer;
function setTimer(){
    myTimer = setInterval(countTimer, 1000);
}

function countTimer(){
    totalSeconds+=1;
}

let experimentBtn = document.querySelector(".go-to-experiment");

experimentBtn.addEventListener("click", function(){
    document.getElementById("experiment-page").style.visibility = "visible";
    document.getElementById("intro-pop-up").style.display = "none";
});

let endExperimentBtn = document.querySelector("#end-experiment");
 
endExperimentBtn.addEventListener("click", function() {
    document.getElementById("experiment-page").style.display = "none";
    document.getElementById("questions").style.display = "block"; 
    document.getElementById("userID").innerHTML = randomId;
    document.getElementById("userTime").innerHTML = totalSeconds;
    document.getElementById("userUpdates").innerHTML = dropDownUpdates;
    clearTimeout(myTimer);
    let str = "";
    for(let key in exploredCountries){
        str+= '<li><u>' +  key + "</u>: " + exploredCountries[key] + "</li>"
    }
    document.getElementById("countriesExplored").innerHTML = str;
});

function myFunction() {
    document.querySelector(".endAnalysis").classList.remove("disabled");
}


function update(){
    var selectBox = document.getElementById("country-selected");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    let files = ["data/world.csv", "data/world20.csv"];
    let promises = [];

    files.forEach(function (path) {
      promises.push(d3.csv(path));
    });

    dropDownUpdates+=1; 

    if(exploredCountries.hasOwnProperty(selectedValue)){
        exploredCountries[selectedValue] += 1;
    } else {
        exploredCountries[selectedValue] = 1;
    }

    Promise.all(promises).then(function (values) {
        var centralChart = new CentralChart(values); 
        var percentChange = new PercentChange(values); 
        var numberVis = new NumberVis(values, selectedValue); 
        percentChange.update(selectedValue);
        centralChart.update(selectedValue);
        // numberVis.update(selectedValue);
    })
}


// let endTaskBtn = document.querySelector("#end-task"); 

// endTaskBtn.addEventListener("click", function(){
//     document.getElementById("userid-pop-up").style.visibility = "visible";
//     document.getElementById("questions").style.display = "none"; 
//     document.querySelector(".generate-id").innerHTML = randomId;
// });

