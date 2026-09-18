function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  function keyPressed() {
    // if (keyCode === 87)
    //   console.log("W wordt ingedrukt")
    // if (keyCode === 83)
    //   console.log("S wordt ingedrukt")

    if (keyIsPressed) {
      if (keyCode == 32) {
        a = floor(random(0, 101));
        b = floor(random(0, 101));

        if (a <= b) {
          text("a is kleiner dan b", 300, 300);
        }
        if (b <= a) {
          text("a is groter dan b");
        }
        if ((a = b)) {
          text("ze zijn gelijk");
        }
      }
    }
  }
}
