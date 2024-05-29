function setup() {
  createCanvas(900, 600);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  noFill();
  stroke(255);

  translate(0, height / 2);
  beginShape();
  for (let x = 0; x <= width; x++) {
    let wave1 = (sin(x + frameCount) * height) / 4;
    let wave2 = (sin(x * 10 + frameCount) * height) / 20;
    let wave3 = noise(x / 10 + frameCount / 100) * 200;
    vertex(x, wave1 + wave2 + wave3);
  }
  endShape();
}
