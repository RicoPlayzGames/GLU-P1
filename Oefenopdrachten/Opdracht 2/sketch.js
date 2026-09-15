function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let x = 100
  //x= 100 op positite 20 links en 20 van boven
  text (x, 20, 20);

  let greeting = "Hello world"
  text (greeting, 20, 60);

  let A = 20;
  let B = 10;
  let som1 = A + B;
  let som2 = A - B;
  let som3 = A / B;
  let som4 = A * B;
  //y positie = 80
  let y = 80;
  //naam + som1 op 20 van links en y positie in dit geval start positie 80
  text ("optellen: "+ som1, 20, y);
  //y start positie 80 = 80+20 
  noLoop (y=y+20);
  text ("aftrekken: "+ som2, 20, y);
  noLoop (y=y+20);
  text ("gedeeld door: "+ som3, 20, y);
  noLoop (y=y+20);
  text ("keer: "+ som4, 20, y);
  noLoop (y=y+20);
}
