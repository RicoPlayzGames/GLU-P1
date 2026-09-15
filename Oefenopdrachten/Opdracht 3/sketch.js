function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);

  //let naam = random getal tussen de 100
  let score = random(100);
  //noLoop naam doet de naam van de variabelen 1x een getal weergeven en niet continue een ander cijfer
  noLoop (score);
  //text geeft de variable score aan op positie 20, 20
  text (score,20,20)
  
  if (score >= 90 ){
    console.log("Uitstkend!");
  }

  if (score >= 70 && score <= 89){
      console.log("Goed Gedaan!")
    }

  if (score >= 50 && score <= 69){
      console.log("Voldoende!")
    }

  if (score <= 59){
      console.log("Onvoeldoende")
    }
  }

