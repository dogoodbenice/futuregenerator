var cnv;
let myFont;

function preload() {
  myFont = loadFont('assets/Aileron-BlackItalic.otf');
}

function setup() {
  cnv = createCanvas(1500, 1500, WEBGL);
  centerCanvas();
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  cnv.parent('sketch-holder');
  textFont(myFont);
  predictionchooser();
}

function draw() {

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
  console.log(mouseX);
}
// function keyPressed() {
//   saveCanvas('sweets', 'jpg');
// }

//In the future there will be
function ITFTWB() {
  //translate(-240, -100, 0);
  textFont(myFont);
  text('We will use bananas as cars', 0, 0);
}

//In the future word
function ITFTW() {
  //translate(-240, -100, 0);
  textFont(myFont);
  text('There will be a word addfedf to mean love', 0, 0);
}

//In the future word
function CCV() {

  push()
  translate(-240, -100, 0);
  textFont(myFont);
  text('One bitcoin will be worth'+random(0,50000)+' pounds', 0, 0);
  pop()
}


function predictionchooser() {
 background('grey');
 backgroundanimation()
  let r = random(5);

  if (r < 1) {
    CCV()
  } else if (r < 2) {
    CCV()
  } else if (r < 3) {
    CCV()
  } else if (r < 4) {
    CCV()
  } else {
    CCV()
  }

}

function backgroundanimation() {
  push()
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
  pop();
}
