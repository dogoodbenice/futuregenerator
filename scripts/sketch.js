var cnv;
var prediction
let myFont;
let input, fbutton, sbutton;

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
  fbutton = createButton('submit');
  fbutton.position((windowWidth) / 2, ((windowHeight) / 2)+50);
  fbutton.mousePressed(setup);
}

function saveprediction() {
  sbutton = createButton('save');
  sbutton.position((windowWidth) / 2, ((windowHeight) / 2)+100);
  sbutton.mousePressed(saveCanvas('thefuture', 'jpg'));
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
  //translate(-240, -100, 0);
  textFont(myFont);
  prediction = text('We will use bananas as cars', 0, 0);
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
  for (var i = 0; i < 15; i++) {
    push()
      translate(random(-500,500), random(-200,200), random(-100,100));
      normalMaterial();
      rotateZ(random(1,50) * 0.01);
      rotateX(random(1,50) * 0.01);
      rotateY(random(1,50) * 0.01);
      torus(random(10,100), 20);
    pop();
  }
  // push()
  // translate(-240, -100, 0);
  // normalMaterial();
  // push();
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // plane(70);
  // pop();
  //
  // translate(240, 0, 0);
  // push();
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // box(70, 70, 70);
  // pop();
  //
  // translate(240, 0, 0);
  // push();
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // cylinder(70, 70);
  // pop();
  //
  // translate(-240 * 2, 200, 0);
  // push();
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // cone(70, 70);
  // pop();
  //
  //
  // pop();
}
