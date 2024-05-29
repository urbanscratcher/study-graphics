function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  noStroke();
  translate(width / 2, height / 2);
  fill(255);

  // theta produces a periodic result, where the circle was drawn round and round the center
  let theta = frameCount;

  // radius produces Archmedian spiral, where the circle was drawn from the center to the edge
  let radius = frameCount / 10;

  let x = cos(theta) * radius;
  let y = sin(theta) * radius;
  ellipse(x, y, 15, 15);
}
