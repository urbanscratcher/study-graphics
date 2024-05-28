function setup() {
  createCanvas(900, 300);
  rectMode(CENTER);
  noiseSeed(10);
}

function draw() {
  background(255);

  // randomGrid();
  // noiseGrid();
  plotNoiseFn();

  noLoop();
}

function plotNoiseFn() {
  noiseDetail(4);
  noFill();
  beginShape();
  for (let x = 0; x < width; x++) {
    let n = noise(x / 100);
    let y = n * height;
    vertex(x, y);
  }
  endShape(OPEN);
}

function randomGrid() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let c = random(0, 255);
      stroke(c);
      point(x, y);
    }
  }
}

function noiseGrid() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      // make the steps smaller to get more detailed noise
      // by dividing x and y
      let n = noise(x / 100, y / 100);
      let c = map(n, 0, 1, 0, 255);
      stroke(c);
      point(x, y);
    }
  }
}
