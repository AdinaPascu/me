let clockArrow = document.getElementById("clockArrow");

let degree = 0;
let timer;

function clockTick() {
    degree = degree + 6;
    clockArrow.style.transform = "rotate(" + degree + "deg)";
    timer = setTimeout(function(){
        clockTick()
    }, 1000);
}
clockTick();
