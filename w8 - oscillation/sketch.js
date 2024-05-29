function setup() {
  createCanvas(900, 600);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  fill(255);
  translate(width / 2, height / 2);

  let amp = width / 2;
  let period = 360; // seconds
  let phase = 90; // start position
  let freq = 2; // 2 cycle per second (2 Hz)

  // frameCount takes 60 frames to complete a second
  // let locX = sin(360 * (frameCount / period) + phase) * amp;
  let locX = sin(frameCount * 6 * freq + phase) * amp;

  circle(locX, 0, 30);
}
