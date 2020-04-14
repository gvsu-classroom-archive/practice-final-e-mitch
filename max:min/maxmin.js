document.getElementById("submit").addEventListener("click", calculate);
document.getElementById("more").addEventListener("click", addCells);
inputArea = document.getElementById("input-list");  

var total = 0;
var usedCells = 0;
var average 
var maximum 
var minimum 

function calculate(){
    inputsArray = document.getElementsByTagName("input");
    valuesArray = [];
    for (x = 0; x < inputsArray.length; x++){
        valuesArray.push(inputsArray[x].value);
    }

    console.log("Values array: " + valuesArray);
    for(i = 0; i < inputsArray.length; i++){
        if(inputsArray[i].value.length != 0){
            console.log(inputsArray[i].value);
            total = total + parseInt(inputsArray[i].value);
            usedCells += 1;
        }
    }
    average = total/usedCells;
    maximum = Math.max(...valuesArray);
    minimum = Math.min(...valuesArray);
    console.log("total: " + total);
    console.log("usedCells: " + usedCells);
    console.log("average: " + average);
    console.log("maximum: " + maximum);
    console.log("minimum: " + minimum);

    document.getElementById("min").innerHTML = minimum;
    document.getElementById("max").innerHTML = maximum;
    document.getElementById("average").innerHTML = average;

    for (a = 0; a < valuesArray.length; a ++){
        if(valuesArray[a] == maximum){
            document.getElementsByTagName("input")[a].style.backgroundColor = "#a1ffa4";
        }
    }

    for (b = 0; b < valuesArray.length; b ++){
        if(valuesArray[b] == minimum){
            document.getElementsByTagName("input")[b].style.backgroundColor = "#a1e4ff";
        }
    }
}

function addCells(){
    for (i = 0; i < 10; i++){
        cell = document.createElement("input", type = "text");
        inputArea.appendChild(cell);
    }
}