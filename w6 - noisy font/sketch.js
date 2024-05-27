var points;
var font;
function preload() {
  font = loadFont("assets/Calistoga-Regular.ttf");
}

//////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(900, 400);
  background(0);

  points = font.textToPoints("c o d e", 50, 300, 300, {
    sampleFactor: 0.3,
    simplifyThreshold: 0,
  });
}

//////////////////////////////////////////////////////////////////////
function draw() {
  fill(0, 5);
  rect(0, 0, width, height);

  // **** Your code here ****
  let scaledFrameCount = frameCount * 0.01;
  // amt depending on mouseX
  const amt = map(mouseX, 0, width, 0, 80);

  // trailing effect
  const trail = map(mouseY, 0, height, 0, 255);

  for (let p of points) {
    let nX = noise(p.x + scaledFrameCount);
    let amtX = map(nX, 0, 1, -amt, amt);

    let nY = noise(p.y + scaledFrameCount);
    let amtY = map(nY, 0, 1, -amt, amt);

    let x = p.x + amtX;
    let y = p.y + amtY;

    // different colors
    const r = map(nX, 0, 1, 0, 255);
    const g = map(nX, 0, 1, 255, 0);
    noStroke();
    fill(r, g, 204, trail);

    // different sizes
    const radius = map(nX, 0, 1, 0.8, 15);
    ellipse(x, y, radius, radius);
    scaledFrameCount += 1;
  }
}
