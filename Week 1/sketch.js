function setup() {
  createCanvas(1400, 1500);
}

function draw() {
  background(220);
  strokeWeight(2);

  //stoplicht
  //1=X lengte positie van 0, 2=Y hoogte positie van 0, 3=lengte vak, 4=hoogte vak
  fill("grey");
  rect(65, 50, 70, 250);

  fill("grey");
  rect(85, 300, 30, 100);

  fill("red");
  circle(100, 100, 50);

  fill("orange");
  circle(100, 175, 50);

  fill("green");
  circle(100, 250, 50);

  text("5.", 50, 400);

  //vlag
  fill("nofill");
  rect(200, 10, 150, 100);

  fill("red");
  circle(275, 60, 55);

  text("2.", 175, 110);

  //naam
  fill("#1100FF");
  textSize("20");
  text("1.  Rico Borgdorff", 20, 30);

  //dobbelsteen
  fill("nofill");
  rect(400, 50, 100, 100, 20);

  fill("black");
  circle(450, 100, 30);
  text("6", 390, 150);

  //huis
  fill("nofill");
  //1=x as positie 1, 2=y as positie 1, 3=x as positie 2, 4=y as positie 2, 5=x as positie 3, 6=y as positie 3 
  triangle(200, 300, 250, 250, 300, 300);
  rect(200, 300, 100);
  text("4.", 175, 400);

  //schaakboard
  fill("black");
  square (350,250,300);
  fill("nofill");
  square (350,350,100);
  square (450,250,100);
  square (550,350,100);
  square (450,450,100);
  fill("black");
  text ("3.",325,550);

  //mario
  strokeWeight(0);
  fill("red");
  rect(800, 60, 120, 20);
  rect(780, 80, 180, 20);
  rect(820, 200, 20, 20);
  rect(820, 220, 20, 20);
  rect(880, 220, 20, 20);
  rect(820, 240, 80, 20);
  rect(800, 260, 20, 20);
  rect(840, 260, 40, 20);
  rect(900, 260, 20, 20);
  rect(800, 280, 120, 20);
  rect(780, 300, 160, 20)
  rect(780, 320, 60, 20);
  rect(880, 320, 60, 20);

  fill("brown");
  rect(780, 100, 80, 20);
  rect(880, 100, 20, 20);
  rect(760, 120, 20, 20);
  rect(800, 120, 20, 20);
  rect(880, 120, 20, 20);
  rect(760, 140, 20, 20);
  rect(800, 140, 40, 20);
  rect(900, 140, 20, 20);
  rect(760, 160, 40, 20);
  rect(880, 160, 80, 20);
  rect(780, 200, 40, 20);
  rect(840, 200, 60, 20);
  rect(760, 220, 60, 20);
  rect(840, 220, 40, 20);
  rect(900, 220, 60, 20);
  rect(740, 240, 80, 20);
  rect(900, 240, 80, 20);
  rect(780, 260, 20, 20);
  rect(920, 260, 20, 20);
  rect(760, 340, 60, 20);
  rect(900, 340, 60, 20);
  rect(740, 360, 80, 20);
  rect(900, 360, 80, 20);

  fill(255,204,153);
  rect(860, 100, 20, 20);
  rect(900, 100, 20, 20);
  rect(780, 120, 20, 20);
  rect(820, 120, 60, 20);
  rect(900, 120, 60, 20);
  rect(780, 140, 20, 20);
  rect(840, 140, 60, 20);
  rect(920, 140, 60, 20);
  rect(800, 160, 80, 20);
  rect(800, 180, 140, 20);
  rect(740, 260, 40, 20);
  rect(820, 260, 20, 20);
  rect(880, 260, 20, 20);
  rect(940, 260, 40, 20);
  rect(740, 280, 60, 20);
  rect(920, 280, 60, 20);
  rect(740, 300, 40, 20);
  rect(940, 300, 40, 20);

  fill("red");
  text("7.", 720, 375);

  //Yoshi
  fill("blue");
  rect(675, 600, 50, 25);
  rect(650, 625, 50, 25);
  square(650, 650, 25);
  rect(625, 675, 50, 25);
  rect(625, 700, 225, 25);
  rect(725, 675, 75, 25);
  rect(750, 650, 75, 25);
  square(825, 675, 25);
  rect(600, 725, 250, 50);
  rect(750, 775, 75, 25);
  square(725, 800, 25);
  rect(650, 825, 75, 75);
  rect(625, 875, 175, 25);
  rect(750, 850, 50, 25);
  rect(525, 850, 25, 50);
  rect(550, 875, 25, 50);
  rect(575, 900, 125, 50);
  rect(625, 950, 75, 25);

  fill("nofill")
  rect(675, 650, 25, 50);
  square(700, 625, 25);
  rect(650, 725, 75, 100);
  rect(625, 750, 25, 50);
  square(725, 775, 25);
  rect(725, 825, 25, 50);
  square(625, 850, 25);
  rect(575, 875, 50, 25);
  square(525, 900, 25);
  square(550, 925, 25);
  rect(575, 950, 50, 25);
  rect(700, 900, 50, 25);
  rect(675, 925, 50, 25);

  fill("black");
  rect(700, 650, 25, 50);
  rect(800, 675, 25, 25);

  fill("red")
  rect(575, 850, 50, 25);

  fill(216, 144, 48);
  rect(600, 975, 75, 50);
  square(675, 1000, 25);
  square(600, 700, 25);
  rect(575, 725, 25, 50);
  rect(600, 775, 25, 50);
  rect(625, 800, 25, 50);

  fill("blue")
  text("8.", 600, 650)
}