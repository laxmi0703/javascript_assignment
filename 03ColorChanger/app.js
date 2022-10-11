document.querySelector("#button").onclick = function (){
    changeColor()
};
function changeColor() {
    var colors = ["yellow", "blue", "black"];
    var color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector("#canvas").style.backgroundColor = color;
}