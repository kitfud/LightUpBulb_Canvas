var canvas = document.getElementById("myCanvas")
var scaleWidth = canvas.width/60;
var scaleHeight =canvas.height/60;
canvas.style.display="block"

var ctx = canvas.getContext("2d")

function drawBulb(color){
  ctx.beginPath();
    ctx.arc(30*scaleWidth, 23.5*scaleHeight, 22.5*scaleHeight, 0, 2 * Math.PI);
    //console.log("class",canvas.classList)
    //circule color "bulb" light color is the line below
    ctx.fillStyle = color
    ctx.stroke();
    ctx.fill();

    //This is the inside of the light bulb (WIRES) not color
    ctx.beginPath();
    ctx.moveTo(24*scaleWidth, 43*scaleHeight);
    ctx.lineTo(24*scaleWidth, 29.5*scaleHeight);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(36*scaleWidth, 43*scaleHeight);
    ctx.lineTo(36*scaleWidth, 29.5*scaleHeight);
    ctx.stroke();
    //End upper half of light bulb-------------------------------------------------------------------------------- 


    //This is the lower half of the lightbulb. ------------------------------------------------------------------
    //THIS IS A RECTANGLE
    ctx.fillStyle = "grey";
    ctx.fillRect(17.5*scaleWidth, 43*scaleHeight, 25*scaleWidth, 6*scaleHeight)

    //This is a smaller rectangle
    ctx.fillStyle = "black";
    ctx.fillRect(17.5*scaleWidth, 49*scaleHeight, 25*scaleWidth, 0.75*scaleHeight)

    //This is a smaller rectangle
    ctx.fillStyle = "grey";
    ctx.fillRect(17.5*scaleWidth, 49.75*scaleHeight, 25*scaleWidth, 3*scaleHeight)

    //This is a smaller rectangle
    ctx.fillStyle = "black";
    ctx.fillRect(18.75*scaleWidth, 52.75*scaleHeight, 22.5*scaleWidth, 0.75*scaleHeight)

    //This is a smaller rectangle
    ctx.fillStyle = "grey";
    ctx.fillRect(18.75*scaleWidth, 53.5*scaleHeight, 22.5*scaleWidth, 2*scaleHeight)

    //This is a smaller rectangle
    ctx.fillStyle = "black";
    ctx.fillRect(20*scaleWidth, 55.5*scaleHeight, 20*scaleWidth, 0.75*scaleHeight)

    //This is a smaller rectangle
    ctx.fillStyle = "grey";
    ctx.fillRect(22.5*scaleWidth, 56.25*scaleHeight, 15*scaleWidth, 2*scaleHeight)

    //This is a smaller rectangle
    ctx.fillStyle = "black";
    ctx.fillRect(25*scaleWidth, 58.25*scaleHeight, 10*scaleWidth, 1.75*scaleHeight)
    //End lower half of light bulb--------------------------------------------------------------------------------
}

drawBulb("white")

var defaultColor = "yellow"
var lightOn = false

function lightSwitch(){
if (!lightOn){
  document.getElementById("my_audio").play();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBulb(defaultColor)
    lightOn = true
}
  else{
    document.getElementById("my_audio").pause()
     ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBulb("white")
    lightOn=false
  }
}

var red = document.getElementById("red")
var green = document.getElementById("green")
var yellow = document.getElementById("yellow")

function removeClass(){
  var list = document.getElementById("colorList")
  //console.log(list.children)

  for (var i = 0; i<list.children.length;i++){
    if(list.children[i].classList[0]=="highlight"){
      list.children[i].remove("highlight")
    }
  }
}

function setGreen(){
  defaultColor="green"
   red.style.borderColor="black"
  green.style.borderColor="orange"
  yellow.style.borderColor="black"
  
  if (lightOn){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBulb(defaultColor)
    lightOn = true
  }
}

function setRed(){
  defaultColor="red"

   red.style.borderColor="orange"
  green.style.borderColor="black"
  yellow.style.borderColor="black"
    if (lightOn){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBulb(defaultColor)
    lightOn = true
  }
}

function setYellow(){
  defaultColor="yellow"
  red.style.borderColor="black"
  green.style.borderColor="black"
  yellow.style.borderColor="orange"

    if (lightOn){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBulb(defaultColor)
    lightOn = true
  }
}

// window.onload = function() {
//     document.getElementById("my_audio").play();
// }
