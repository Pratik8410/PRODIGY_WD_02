var hr = 0;
var min = 0;
var sec = 0;
var count = 0; 
var timer;

var display = document.querySelector(".timer")
var laps = document.querySelector(".laps")


function start(){
    if(!timer){
        timer = setInterval(stopwatch, 10)
    }
}

function stop(){
    stopTimer()  
}

function reset(){
    stopTimer()
    count = 0
    sec = 0
    min = 0
    hr = 0
    display.innerHTML = getTimer()
}


function stopwatch(){
    display.innerHTML = getTimer()
    count++              
    if(count == 100){
        count = 0
        sec++
    }
    if(sec == 60){
        sec = 0
        min++
    }
    if(min == 60){
        min = 0
        hr++
    }
    
    if(hr == 13){
        hr = 1
    } 
}

function getTimer(){
    return (hr<10 ? "0" + hr: hr) + " : " + (min<10 ? "0" + min : min) + " : " + (sec<10 ? "0" + sec : sec) + " : " + (count<10 ? "0" + count : count); 
}


function stopTimer(){
    clearInterval(timer)
    timer = false 
}


function lap() {
    if(timer) {   
        var Li = document.createElement("li")   
        Li.innerHTML = getTimer() 
        laps.appendChild(Li) 
    }
}

function resetLap(){
    laps.innerHTML = ""
}