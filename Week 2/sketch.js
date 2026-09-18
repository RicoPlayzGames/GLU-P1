function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightBlue");

  fill("grey");
  rect(0, 500, 800, 100);

  textSize(130);
  fill("white");
  text("- - - - - - - - - -", 20, 575);

  fill("green");
  rect(0, 580, 800, 20);
  rect(0, 480, 800, 30);

  fill(100);
  strokeWeight(0);
  triangle(200, 480, 340, 150, 500, 480);
  triangle(100, 480, 340, 350, 500, 480);
  triangle(150, 480, 340, 250, 500, 480);
  triangle(300, 480, 450, 100, 700, 480);
  fill("brown");
  rect();


}