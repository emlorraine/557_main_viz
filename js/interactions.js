// this file holds the interations with the pop-ups
let randomId = Math.floor(Math.random() * 10000) + 1; 
let experimentBtn = document.querySelector(".go-to-experiment");

experimentBtn.addEventListener("click", function(){
    document.getElementById("experiment-page").style.visibility = "visible";
    document.getElementById("intro-pop-up").style.display = "none";
});

let endExperimentBtn = document.querySelector("#end-experiment");

endExperimentBtn.addEventListener("click", function(){
    document.getElementById("experiment-page").style.display = "none";
    document.getElementById("questions").style.display = "block"; 
    // document.querySelector(".generate-id").innerHTML = randomId;
});

let endTaskBtn = document.querySelector("#end-task");

endTaskBtn.addEventListener("click", function(){
    document.getElementById("userid-pop-up").style.visibility = "visible";
    document.getElementById("questions").style.display = "none"; 
    document.querySelector(".generate-id").innerHTML = randomId;
});