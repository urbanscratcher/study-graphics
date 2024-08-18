function setup() {
  createCanvas(900, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(125);

  rectMode(CENTER);
  noStroke();

  translate(-width / 2 + width / 6, -height / 2 + height / 4, 0);
  push();
  normalMaterial();
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  plane(100);
  pop();

  translate(2 * (width / 6), 0, 0);
  push();
  normalMaterial();
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  box(100);
  pop();

  translate(2 * (width / 6), 0, 0);
  push();
  normalMaterial();
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  cylinder(100);
  pop();

  translate(0, 2 * (height / 4), 0);
  push();
  normalMaterial();
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  sphere(100);
  pop();

  translate(-2 * (width / 6), 0, 0);
  push();
  normalMaterial();
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  torus(90, 30);
  pop();

  translate(-2 * (width / 6), 0, 0);
  push();
  normalMaterial();
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  cone(100, 80, 20, 20);
  pop();
}
