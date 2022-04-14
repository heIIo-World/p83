var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

var curPosX = "";
var curPosY = "";
var color = "";
var lineWidth  ="";
    
    color = "black";
    width_of_line = 2;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
 color = document.getElementById("color").value;
 
lineWidth  =document.getElementById("lineWidth").value; 
   
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    
    curPosX = e.clientX  - canvas.offsetLeft;
    curPosY = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown") {
        
        
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(curPosX, curPosY);
        ctx.stroke();
        
    
    }
    
    last_position_of_x = curPosX;
    last_position_of_y = curPosY;
    
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e){
    
    last_position_of_x = curPosX;
    last_position_of_y = curPosY;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e){
    
    curPosX = e.touches[0].clientX - canvas.offsetLeft;
    curPosY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.curPosXidth = lineWidth;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(curPosX, curPosY);
    ctx.stroke();
    
    last_position_of_x = curPosX;
    last_position_of_y = curPosY;
 
}

function clearArea() {
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}