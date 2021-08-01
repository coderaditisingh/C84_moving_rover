canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=80;
backgroungImg="mars.jpg";
roverImg="rover.png";
roverX=10;
roverY=10;

function add()
{
backgroungImgtag= new Image();
backgroungImgtag.onload= uploadBackground();
backgroungImgtag.src= backgroungImg;
roverImgtag= new Image();
roverImgtag.onload= uploadRover();
roverImgtag.src= roverImg;
}

function uploadBackground()
{
    ctx.drawImage(backgroungImg,0,0,canvas.width,canvas.height);
}

function uploadRover()
{
ctx.drawImage(roverImgtag,roverX,roverY,rover_width,rover_height);
}

window.addEventListener("keydown",my_key_down);

function my_key_down(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed=='38')
{
    up();
    console.log("up");
}
if(keyPressed=='40')
{
    down();
    console.log("down");
}
if(keyPressed=='37')
{
    left();
    console.log("left");
}
if(keyPressed=='39')
{
    right();
    console.log("right");
}
}

