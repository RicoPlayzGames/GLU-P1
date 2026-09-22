//wolk 1 = start positie 900 x
let CloudBaseX = 900;
//wolk 2 = start positie 900 x
let CloudBaseX2 = 900;

//zon = start positie 0 x
let Xsun = 0;

//rode auto snelheid = 0
let CarSpeedRed = 0;
//blauwe auto snelheid = 0
let CarSpeedBlue = 0;

//blauwe auto = start positie 200
let BaseBlue = 200;

//rode auto = start positie 200
let BaseXRed = 200;
//detectie rode auto
let DetectionRedCar;

//rood licht = aan
let RedColor = "Red";
//oranje licht = uit
let orangeColor = "Black";
//groen licht = uit
let greenColor = "Black";

//basis van de cirkel
let CircleBase;
//grootte cirkel = 1
let CircleZ = 1;
//x positie cirkel
let CircleX;
//y positie cirkel
let CircleY;

//extra snelheid = 0
let SpeedPickUp = 0;

//speedboost actief = nee
let active = false;
//starttijd speedboost
let startTime;
//duur speedboost = 2500 milliseconden
let duration = 2500;

//vorige botsing = nee
let collisionPrev = false;

//canvas opzetten
function setup() {
  createCanvas(800, 600);
}

//Deze functie wordt uitgevoerd zodra de gebruiker een toets indrukt die eronder vermeld wordt.
function keyPressed() {
  //als Enter wordt ingedrukt
  if (keyCode === 13) {
    console.log("Enter was pressed");
    //als rood aan is, wordt het groen
    if (RedColor === "Red") {
      //rood licht uit
      RedColor = "Black";
      //oranje licht uit
      orangeColor = "Black";
      //groen licht aan
      greenColor = "Green";
      //rode auto snelheid 7
      CarSpeedRed = 7;
      //blauwe auto snelheid 5
      CarSpeedBlue = 5;
      //als oranje aan is, wordt het rood
    } else if (orangeColor === "Orange") {
      //rood licht aan
      RedColor = "Red";
      //oranje licht uit
      orangeColor = "Black";
      //groen licht uit
      greenColor = "Black";
      //rode auto stopt
      CarSpeedRed = 0;
      //blauwe auto stopt
      CarSpeedBlue = 0;
      //als groen aan is, wordt het oranje
    } else if (greenColor === "Green") {
      //rood licht uit
      RedColor = "Black";
      //oranje licht aan
      orangeColor = "Orange";
      //groen licht uit
      greenColor = "Black";
      //rode auto snelheid 2
      CarSpeedRed = 2;
      //blauwe auto snelheid 1
      CarSpeedBlue = 1;
    }
  }
}

//Deze functie wordt uitgevoerd zodra de gebruiker de muis indrukt.
function mousePressed() {
  //cirkelgrootte terug naar 1
  CircleZ = 1;
}

//tekent de canvas met achtergrond en objecten
function draw() {
  background("lightBlue");

  //bergen
  fill(100);
  strokeWeight(0);
  triangle(200, 480, 340, 150, 500, 480);
  triangle(100, 480, 340, 350, 500, 480);
  triangle(150, 480, 340, 250, 500, 480);
  triangle(300, 480, 450, 100, 700, 480);
  //sneeuwtoppen
  fill("White");
  triangle(340, 150, 318.5, 200, 364.5, 200);
  triangle(450, 100, 410.5, 200, 516, 200);

  //bomen
  fill("Brown");
  rect(285, 350, 30, 150);
  rect(85, 350, 30, 150);
  //bladeren
  fill("DarkGreen");
  circle(300, 350, 100);
  circle(100, 350, 100);

  //weg
  fill("grey");
  rect(0, 500, 800, 100);
  textSize(130);
  fill("white");
  text("- - - - - - - - - -", 20, 575);

  //gras
  fill("green");
  rect(0, 580, 800, 20);
  rect(0, 480, 800, 30);

  //stoplicht
  fill(59, 59, 59);
  strokeWeight(0);
  rect(700, 420, 20, 70);
  rect(670, 260, 80, 160);

  //stoplicht kleuren
  fill(RedColor);
  circle(710, 290, 45);
  fill(orangeColor);
  circle(710, 340, 45);
  fill(greenColor);
  circle(710, 390, 45);

  fill("Yellow");
  strokeWeight(0);
  /* Tekent de zon: Xsun bepaalt de horizontale positie.
  50 bepaalt de verticale positie en 80 is de diameter.*/
  circle(Xsun, 50, 80);
  /*+= telt 1 op bij de huidige waarde van Xsun.
  Daardoor beweegt de zon ieder frame 1 pixel naar rechts.*/
  Xsun += 1;
  /*Controleert of de zon rechts uit beeld is geraakt.
  Het canvas is 800 pixels breed, maar de zon is 80 pixels groot.*/
  if (Xsun === 900) {
    //zon terug naar links op positie -100
    Xsun = -100;
  }

  //wolken
  fill("White");
  strokeWeight(0);
  circle(CloudBaseX, 80, 75);
  circle(CloudBaseX + 40, 100, 75);
  circle(CloudBaseX - 40, 100, 75);

  /*-= trekt 1 af van de huidige waarde van CloudBaseX.
  Daardoor beweegt wolk 1 ieder frame 1 pixel naar links.*/
  CloudBaseX -= 1;

  //als wolk 1 uit beeld is
  if (CloudBaseX <= -100) {
    //wolk 1 terug naar rechts
    CloudBaseX = 900;
  }

  circle(CloudBaseX2, 140, 75);
  circle(CloudBaseX2 + 40, 160, 75);
  circle(CloudBaseX2 - 40, 160, 75);

  //wolk 2 beweegt 3 naar links
  CloudBaseX2 -= 3;

  //als wolk 2 uit beeld is
  if (CloudBaseX2 <= -100) {
    //wolk 2 terug naar rechts
    CloudBaseX2 = 900;
  }

  //rode auto
  fill("Red");
  rect(BaseXRed, 420, 160, 80);
  rect(BaseXRed, 380, 100, 40);

  //banden kleur zwart
  fill("Black");
  circle(BaseXRed + 30, 500, 60);
  circle(BaseXRed + 130, 500, 60);
  //raam kleur lichtblauw
  fill("LightBlue");
  triangle(BaseXRed + 100, 420, BaseXRed + 160, 420, BaseXRed + 100, 380);

  //x positie rode auto
  let CarX = BaseXRed;
  //y positie rode auto
  let CarY = 420;
  //breedte botsingsgebied rood
  let carW = 80;
  //hoogte botsingsgebied rood
  let carH = 160;
  fill("red");
  rect(CarX, CarY, carH, carW);

  //cirkel x binnen rode auto
  let ConstX = constrain(CircleX, CarX, CarX + carW);
  //cirkel y binnen rode auto
  let ConstY = constrain(CircleY, CarY, CarY + carH);

  //afstand x rode auto
  let DistanceX = CircleX - ConstX;
  //afstand y rode auto
  let DistanceY = CircleY - ConstY;
  //totale afstand rode auto
  let Distance = sqrt(DistanceX * DistanceX + DistanceY * DistanceY);

  //rode auto beweegt
  BaseXRed += CarSpeedRed + SpeedPickUp;

  //als rode auto uit beeld is
  if (BaseXRed >= 1100) {
    //rode auto terug naar links
    BaseXRed = -200;
  }

  //blauwe auto kleur blauw
  fill("Blue");
  rect(BaseBlue, 460, 160, 80);
  rect(BaseBlue, 420, 100, 40);
  //banden kleur zwart
  fill("Black");
  circle(BaseBlue + 30, 540, 60);
  circle(BaseBlue + 130, 540, 60);
  //raam kleur lichtblauw
  fill("LightBlue");
  triangle(BaseBlue + 100, 460, BaseBlue + 160, 460, BaseBlue + 100, 420);

  //x positie blauwe auto
  let BlueCarX = BaseBlue;
  //y positie blauwe auto
  let BlueCarY = 460;
  //breedte botsingsgebied blauw
  let BlueCarW = 160;
  //hoogte botsingsgebied blauw
  let BlueCarH = 80;
  fill("Blue");
  rect(BlueCarX, BlueCarY, BlueCarW, BlueCarH);

  //cirkel x binnen blauwe auto
  let ConstBlueX = constrain(CircleX, BlueCarX, BlueCarX + BlueCarW);
  //cirkel y binnen blauwe auto
  let ConstBlueY = constrain(CircleY, BlueCarY, BlueCarY + BlueCarH);

  //afstand x blauwe auto
  let DistanceXBlue = CircleX - ConstBlueX;
  //afstand y blauwe auto
  let DistanceYBlue = CircleY - ConstBlueY;
  //totale afstand blauwe auto
  let DistanceBlue = sqrt(
    //afstand berekenen
    DistanceXBlue * DistanceXBlue + DistanceYBlue * DistanceYBlue,
  );

  //blauwe auto beweegt
  BaseBlue += CarSpeedBlue + SpeedPickUp;

  //als blauwe auto uit beeld is
  if (BaseBlue >= 1100) {
    //blauwe auto terug naar links
    BaseBlue = -200;
  }
  //voorste boomstam kleur bruin
  fill("Brown");
  rect(485, 450, 30, 150);
  //voorste bladeren kleur donkergroen
  fill("DarkGreen");
  circle(500, 450, 100);

  //als muisknop wordt ingedrukt
  if (mouseIsPressed == true) {
    //cirkel wordt groter
    CircleZ += 1;
    //cirkel volgt muis x
    CircleX = mouseX;
    //cirkel volgt muis y
    CircleY = mouseY;
  }

  //cirkel beweegt 1 naar beneden
  CircleY += 1;

  //cirkel kleur geel
  fill("Yellow");
  circle(CircleX, CircleY, CircleZ);

  //als cirkel onderaan is
  if (CircleY >= 575) {
    //cirkel naar beneden
    CircleY = 600;
  }

  //botsing met een auto
  let collisionNow = Distance < CircleZ / 2 || DistanceBlue < CircleZ / 2;

  //als botsing en geen boost actief
  if (collisionNow && !active) {
    //boost aan
    active = true;
    //starttijd opslaan
    startTime = millis();
    //melding botsing
    console.log("In collision");
    //cirkel x reset
    CircleX = 0;
    //cirkel y reset
    CircleY = 0;
    //cirkelgrootte reset
    CircleZ = 0;
  }

  //huidige botsing opslaan
  collisionPrev = collisionNow;

  //als boost actief is
  if (active) {
    //melding speedboost
    console.log("SpeedBoost");
    //extra snelheid 5
    SpeedPickUp = 5;

    //als 2,5 seconden voorbij zijn
    if (millis() - startTime > duration) {
      //melding boost klaar
      console.log("SpeedBoost Ended");
      //boost uit
      active = false;
      //extra snelheid terug naar 0
      SpeedPickUp = 0;
      //cirkel x reset
      CircleX = 0;
      //cirkel y reset
      CircleY = 0;
      //cirkelgrootte reset
      CircleZ = 0;
    }
  }
}
