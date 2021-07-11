//const colors = ["#8649D1", "#2D818C", "#E0CB80", "#FCC705","#2F646B"];

var cnv;

// let myFont;
// function preload() {
//   myFont = loadFont('assets/inconsolata.otf');
// }

function setup() {
  cnv = createCanvas(500, 500, WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  centerCanvas();
  cnv.position(x, y);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  cnv.parent('sketch-holder');
  background(255, 0, 200);
  background(255, 0, 200);
  predictionchooser();
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
  predictionchooser();
}
// function keyPressed() {
//   saveCanvas('sweets', 'jpg');
// }

//In the future there will be
function ITFTWB() {
  text('We will use bananas as cars', 10, 30);
}

//In the future word
function ITFTW() {
  text('There will be a word addfedf to mean love', 10, 30);
}


function predictionchooser() {
//  background(240);
  backgroundanimation()
  let r = random(5);

  if (r < 1) {
    ITFTW()
  } else if (r < 2) {
    ITFTWB()
  } else if (r < 3) {
    push()
    pop()
  } else if (r < 4) {

  } else {

  }

}

function backgroundanimation() {
  translate(-240, -100, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  plane(70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70, 70, 70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cylinder(70, 70);
  pop();

  translate(-240 * 2, 200, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cone(70, 70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();
}
