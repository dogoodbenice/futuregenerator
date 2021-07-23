let cnv, prediction, myFont, fbutton, sbutton, abutton;
let fontSize = 22;
let buttonSpace = 50;
let texposX = 0;
let texposY = -25;
let texspace = 250;


let pluralobjects = ["scarves", "ties", "watches", "gloves", "handbags", "laptops", "books", "pens", "pans", "pants", "phones", "chips", "comedians", "fishes", "cubes", "eggs", "aubergines", "light bulbs", "ladders", "pizzas", "sandwiches", "kebabs", "baked potatoes", "samosas", "biscuits", "apples", "avocadoes", "milkshakes", "cabbages", "carrots", "potatoes", "onions", "lemons", "bananas", "grapes", "peaches", "oranges", "boots", "slippers", "socks", "flip flops", "guitars", "pianos", "chickens", "ovens", "plants", "ballerinas", "pots","trains","footballs","stadiums","sandals"];
let cryptocurrencies = ["Bitcoin", "Ethereum", "Tether","Cardano","XRP","Dogecoin","Litecoin","Dai","Filecoin","Stellar","Solana","VeChain"];
let fiat = ["British Pounds","Canadian Dollars", "Euros"]
let planets = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]
let feelings = ["hapiness","sadness","envy","hate","love","lust","content",""]

function preload() {
  myFont = loadFont('assets/Aileron-BlackItalic.otf');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  centerCanvas();
  rectMode(CENTER)
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  cnv.parent('sketch-holder');
  textFont(myFont);
  predictionchooser();
  backgroundshapes();
  showmethefuturebutton();
  //savepredictionbutton();
}

function showmethefuturebutton() {
  fbutton = createButton('🔮 '+'SHOW ME THE FUTURE  '+' 🔮 ');
  fbutton.position(width/2.3, ((windowHeight) / 1.5));
  fbutton.mousePressed(setup);
}

function savepredictionbutton() {
  sbutton = createButton('SAVE MY PREDICTION');
  sbutton.position((windowWidth) / 2.25, ((windowHeight) / 1.5) + buttonSpace*1.6);
  sbutton.mousePressed(saveCanvas('thefuture', 'jpg'));
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

//In the future we will replace
function ITFTWB() {
  push()
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  prediction = text('In the future we will replace ' + pluralobjects[Math.floor(Math.random() * pluralobjects.length)] + ' with ' + pluralobjects[Math.floor(Math.random() * pluralobjects.length)], texposX, texposY, texspace)
  pop()
}

//In the future word
function ITFTW() {
  push()
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  prediction = text('There will be a word addfedf to mean love', texposX, texposY, texspace);
  pop()
}

//In the future we will find
function ITFTWWF() {
  push()
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  prediction = text('In the future we will find ' + pluralobjects[Math.floor(Math.random() * pluralobjects.length)]+ ' on ' + planets[Math.floor(Math.random() * planets.length)], texposX, texposY, texspace);
  pop()
}

//In the future word
function CCV() {
  push()
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  prediction = text('One '+ cryptocurrencies[Math.floor(Math.random() * cryptocurrencies.length)] + ' will be worth ' + int(random(1,5000)) + ' '+ fiat[Math.floor(Math.random() * fiat.length)], texposX, texposY, texspace);
  pop()
}

//In the future word
function futureobjects() {
  push()
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  textFont(myFont);
  prediction = text('In the future we will use ' + pluralobjects[Math.floor(Math.random() * pluralobjects.length)] + ' as ' + pluralobjects[Math.floor(Math.random() * pluralobjects.length)], texposX, texposY, texspace);
  pop()
}

function predictionchooser() {
  background('black')
  let r = random(5);
  if (r < 1) {
    ITFTWB()
  } else if (r < 2) {
    ITFTW()
  } else if (r < 3) {
    CCV()
  } else if (r < 4) {
    futureobjects()
  } else {
    ITFTWWF()
  }
}

function backgroundshapes() {
  //generates funky shapes for the backdrop top
  for (let i = 0; i < 5; i++) {
    normalMaterial();
    push()
    translate(random(-700, 700), random(-500, -120), random(-100, 100));
    rotateZ(random(1, 360) * 0.01);
    rotateX(random(1, 360) * 0.01);
    rotateY(random(1, 360) * 0.01);
    torus(random(10, 100), 20);
    pop();
    push()
    translate(random(-700, 700), random(-400, -80), random(-100, 100));
    sphere(random(10, 50));
    pop();
    push();
    translate(random(-500, 500), random(-400, -80), random(-100, 100));
    rotateZ(random(1, 360));
    rotateX(random(1, 360) * 0.01);
    rotateY(random(1, 360) * 0.01);
    box(random(10, 70));
    pop();
    push();
    translate(random(-500, 500), random(-400, -120), random(-100, 100));
    rotateZ(random(1, 360) * 0.01);
    rotateX(random(1, 360) * 0.01);
    rotateY(random(1, 360) * 0.01);
    cylinder(random(10, 70));
    pop();
    push();
    translate(random(-500, 500), random(-400, -80), random(-100, 100));
    rotateZ(random(1, 360) * 0.01);
    rotateX(random(1, 360) * 0.01);
    rotateY(random(1, 360) * 0.01);
    cone(random(10, 70));
    pop();
  }
  //generates funky shapes for the backdrop bottom
  for (let i = 0; i < 5; i++) {
    normalMaterial();
    push()
    translate(random(-600, 600), random(150, 500), random(-100, 100));
    rotateZ(random(1, 360) * 0.01);
    rotateX(random(1, 360) * 0.01);
    rotateY(random(1, 360) * 0.01);
    torus(random(10, 100), 20);
    pop();
    push()
    translate(random(-600, 600), random(100, 250), random(-100, 100));
    sphere(random(10, 50));
    pop();
    push();
    translate(random(-600, 600), random(100, 250), random(-100, 100));
    rotateZ(random(1, 360));
    rotateX(random(1, 360) * 0.01);
    rotateY(random(1, 360) * 0.01);
    box(random(10, 70));
    pop();
    push();
    translate(random(-600, 600), random(100, 250), random(-100, 100));
    rotateZ(random(1, 360) * 0.01);
    rotateX(random(1, 360) * 0.01);
    rotateY(random(1, 360) * 0.01);
    cylinder(random(10, 70));
    pop();
    push();
    translate(random(-600, 600), random(100, 250), random(-100, 100));
    rotateZ(random(1, 360) * 0.01);
    rotateX(random(1, 360) * 0.01);
    rotateY(random(1, 360) * 0.01);
    cone(random(10, 70));
    pop();
  }

  //generates space like dots for the backdrop
  for (let i = 0; i < 500; i++) {
    push()
    stroke(255)
    strokeWeight(2)
    point(random(-1000, 1000), random(-500, 500))
    pop();
  }
}
