function setup() {
  createCanvas(606, 406);
}

function draw() {
  background(225);
  strokeWeight(4);
  
  //main vak
  //1=lengte positie van 0, 2=hoogte positie van 0, 3=lengte vak, 4=hoogte vak
  fill("white");
  rect(4, 4, 600, 400);

  //mondriaan start rij 1
  fill("blue");
  rect(4, 4, 150, 50);

  fill("yellow");
  rect(4, 54, 50, 50);

  fill("nofill");
  rect(4, 104, 80, 80);

  fill("black");
  rect(4, 144, 140, 120);

  fill("nofill");
  rect(4, 264, 80, 140);

  //rij 2
  fill("black");
  rect(150, 4, 70, 50);

  fill("red");
  rect(54, 50, 80, 50);
}
