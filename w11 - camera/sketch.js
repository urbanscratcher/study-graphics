function setup() {
  createCanvas(900, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(125);

  // Camera Moving -----------------------------
  // let zLoc = map(sin(frameCount), -1, 1, 400, 800);

  // Zittering
  // let xLoc = map(noise(frameCount / 100), 0, 1, -500, 500);
  // let yLoc = map(noise(frameCount / 100 + 100), 0, 1, -500, 500);
  // let zLoc = map(noise(frameCount / 100 + 150), 0, 1, 300, 800);

  // Wavy flight
  // let xLoc = cos(frameCount) * height;
  // let yLoc = sin(frameCount * 3) * 300;
  // let zLoc = sin(frameCount) * height;

  // camera(xLoc, yLoc, zLoc, 0, 0, 0, 0, 1, 0);

  // Orientation ------------------------------
  let xAim = sin(frameCount) * 300; // -300 ~ 300
  camera(0, 0, height, xAim, 0, 0, 0, 1, 0);

  normalMaterial();
  torus(200, 50, 50, 50);
  translate(0, 100, 0);
  rotateX(90);
  fill(200);
  plane(500, 500);
}
