let wholeBody = document.querySelector(".whole-body");
let button1 = document.querySelector("#button1");
let text = document.querySelector("#background-text");

button1.onclick = createColor

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
  
function redPart(){
    return Math.floor(Math.random() * 256);
}

function greenPart(){
    return Math.floor(Math.random() * 256);
}

function bluePart(){
    return Math.floor(Math.random() * 256);
}

function createColor(){
    console.log("Button Calisti")
    color = rgbToHex(redPart(), greenPart(), bluePart());
    wholeBody.style.background = color;
    text.textContent = "Background Color: " + color
}