let angle = 0;
let earthDistance = 200;

function setup() {
  createCanvas(800, 800, WEBGL);

  camera(0, -300, 600, 0, 0, 0, 0, 1, 0);
}

function draw() {
  background(127);

  // The Sun
  noStroke();
  sphere(70, 30, 30);

  // The Sun Lights
  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(255, 255, 255, 0, 0, 0);

  // The Earth
  push();
  rotateY(angle); // revolution
  translate(earthDistance, 0, 0); // revolving distance
  rotateY(angle * 365.25); // rotation
  ambientMaterial(255);
  sphere(30, 15, 15);
  pop();

  angle += 0.01;
}
