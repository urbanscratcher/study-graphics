var font;
function preload() {
  font = loadFont("assets/Calistoga-Regular.ttf");
}

var points;

function setup() {
  createCanvas(900, 400);
  fill(255, 104, 204, 150);
  noStroke();

  points = font.textToPoints("c o d e", 50, 300, 300, {
    sampleFactor: 0.3,
    simplifyThreshold: 0,
  });
}

function draw() {
  background(0);

  let dX = map(mouseX, 0, width, 1, 55);

  // *** your code here ****
  for (let p of points) {
    let x = p.x + random(-dX, dX);
    let y = p.y + random(-dX, dX);
    ellipse(x, y, 15, 15);
  }

  noLoop();
}

function mouseMoved() {
  loop();
}
