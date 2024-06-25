function setup() {
    createCanvas(400, 400);
    background("purple");
  }
  
  function draw() {
  
    stroke("green");
    fill("yellow");
  
    console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 50, 50);
    }
  }