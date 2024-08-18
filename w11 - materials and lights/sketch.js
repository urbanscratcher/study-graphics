function setup() {
  createCanvas(900, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(125);

  rectMode(CENTER);
  //   rotateX(frameCount);
  //   rotateZ(frameCount);
  rotateY(frameCount);
  translate(200, 0, 0);

  box(200);
}
