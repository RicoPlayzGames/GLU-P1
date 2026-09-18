let counter = 0;
let D = 1;
let wait = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  //
  counter = counter + 1;
  wait = wait + 1;

  fill("black");
  textSize(10);
  text("1. Houd B in om een blokje te laten verschijnen.", 20, 20);
  text("2. Druk op spatie om het getal op 0 te zetten.", 20, 120);
  text("3. Druk op enter om van rood -> groen -> oranje te gaan.", 20, 240);
  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.", 360, 20);

  //trafficlight frame
  fill("grey");
  rect(20, 250, 50, 150);
  rect(35, 400, 20, 100);
  fill("black");
  circle(45, 275, 40);
  circle(45, 325, 40);
  circle(45, 375, 40);

  textSize(100);
  text(counter, 20, 210);

  if (keyIsPressed) {
    if (key === "b") {
      strokeWeight(5);
      fill("white");
      rect(20, 40, 60, 60);
    }
  }

  if (counter >= 500) {
    counter = -1;
  } else if (keyIsPressed) {
    if (key == "space") {
      counter = -1;
    }
    if (keyCode == 32) {
      counter = -1;
    }
  }

  if (keyIsPressed && wait >= 15) {
    if (keyCode == ENTER) {
      D = D + 1;
      wait = 0;
    }
  }

  if (D == 1) {
    strokeWeight(2);
    fill("red");
    circle(45, 275, 40);
  } else if (D == 2) {
    strokeWeight(2);
    fill("orange");
    circle(45, 325, 40);
  } else if (D == 3) {
    strokeWeight(2);
    fill("green");
    circle(45, 375, 40);
  } else if (D == 4) {
    D = 1;
  }
}
