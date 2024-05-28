function setup() {
  createCanvas(200, 200);
  rectMode(CENTER);
}

function draw() {
  background(0);

  noiseDetail(1);
  noiseGrid();
}

function noiseGrid() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let n = noise(x / 100, y / 100, frameCount / 50);
      let c = map(n, 0, 1, 0, 255);
      stroke(c);
      point(x, y);
    }
  }
}
