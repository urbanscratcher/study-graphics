let time = 1000;

function setup() {
  createCanvas(900, 600);
  rectMode(CENTER);
}

function draw() {
  background(0);
  let nX = noise(time);
  let nY = noise(time + 5);

  let locX = map(nX, 0, 1, 0, width);
  let locY = map(nY, 0, 1, 0, height);
  let g = map(nX, 0, 1, 0, 255);
  let rotZ = map(nX, 0, 1, -15, 15);

  translate(locX, locY);

  rotate(rotZ);
  fill(0, g, 0);
  rect(0, 0, 100, 100);

  time = time + 0.01;
}
