var cnv;
var prediction
let myFont, fbutton, sbutton;

function preload() {
  myFont = loadFont('assets/Aileron-BlackItalic.otf');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  centerCanvas();
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  cnv.parent('sketch-holder');
  textFont(myFont);
  predictionchooser();
  backgroundshapes();
  showmethefuturebutton();
  saveprediction();
}

function showmethefuturebutton() {
  fbutton = createButton('SHOW ME THE FUTURE');
  fbutton.position((windowWidth) / 2.25, ((windowHeight) / 1.5)+50);
  fbutton.mousePressed(setup);
}

function saveprediction() {
  sbutton = createButton('SAVE MY PREDICTION');
  sbutton.position((windowWidth) / 2.25, ((windowHeight) / 1.5)+100);
  //sbutton.mousePressed(saveCanvas('thefuture', 'jpg'));
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function mousePressed() {
  setup()
}

//In the future there will be
function ITFTWB() {
  push()
  translate(-240, (windowHeight - height) / 2, 0);
  textFont(myFont);
  prediction = text('We will use bananas as cars', 0, 0);
  pop()
}

//In the future word
function ITFTW() {
  push()
  translate(-240, (windowHeight - height) / 2, 0);
  textFont(myFont);
  prediction = text('There will be a word addfedf to mean love', 0, 0);
  pop()
}

//In the future word
function CCV() {
  push()
  translate(-240, (windowHeight - height) / 2, 0);
  textFont(myFont);
  prediction = text('One bitcoin will be worth ' + random(0, 50000) + ' pounds', 0, 0);
  pop()
}

function predictionchooser() {
  background('black')
  let r = random(5);
  if (r < 1) {
    CCV()
  } else if (r < 2) {
    ITFTWB()
  } else if (r < 3) {
    CCV()
  } else if (r < 4) {
    ITFTW()
  } else {
    CCV()
  }
}

function backgroundshapes() {
  //generates our funky shapes for the backdrop
  for (var i = 0; i < 3; i++) {
    normalMaterial();
    push()
      translate(random(-500,500), random(-200,200), random(-100,100));
      rotateZ(random(1,360) * 0.01);
      rotateX(random(1,360) * 0.01);
      rotateY(random(1,360) * 0.01);
      torus(random(10,100), 20);
    pop();
    push();
    translate(random(-500,500), random(-200,200), random(-100,100));
    rotateZ(random(1,360) * 0.01);
    rotateX(random(1,360) * 0.01);
    rotateY(random(1,360) * 0.01);
    plane(random(10,70));
    pop();
    push()
    translate(random(-500,500), random(-200,200), random(-100,100));
    sphere(random(10,50));
    pop();
    push();
    translate(random(-500,500), random(-200,200), random(-100,100));
    rotateZ(random(1,360));
    rotateX(random(1,360) * 0.01);
    rotateY(random(1,360) * 0.01);
    box(random(10,70));
    pop();
    push();
    translate(random(-500,500), random(-200,200), random(-100,100));
    rotateZ(random(1,360) * 0.01);
    rotateX(random(1,360) * 0.01);
    rotateY(random(1,360) * 0.01);
    cylinder(random(10,70));
    pop();
    push();
    translate(random(-500,500), random(-200,200), random(-100,100));
    rotateZ(random(1,360) * 0.01);
    rotateX(random(1,360) * 0.01);
    rotateY(random(1,360) * 0.01);
    cone(random(10,70));
    pop();
  }
  //generates our space dots for the backdrop
  for (var i = 0; i < 100; i++) {
    push()
      stroke(255)
      strokeWeight(2)
      ellipse(random(-1000,1000),random(-500,500),2)
    pop();
  }
}
