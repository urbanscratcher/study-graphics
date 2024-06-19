// Code from a modified Daniel Shiffman example
// https://thecodingtrain.com/

// Advanced: Add wind to your sketch by adding a certain amount to your random angle within branch() using the noise() function. Knowing what you know now about particles, you could have leaves falling of the tree at random times!

var angle = 0;
var seed;

function setup() {
  createCanvas(400, 400);
  seed = random(1000);
}
////////////////////////////////////////////////
function draw() {
  background(255);
  angleMode(DEGREES);
  randomSeed(seed);
  angle = random(0, 80);
  stroke(255);
  translate(200, height);
  branch(100, 3);
}
/////////////////////////////////////////////////
function branch(len, thickness) {
  if (len <= 3) {
    noLoop();
  } else {
    push();
    noStroke();

    let gColor = map(len, 0, 40, 235, 0);
    let tran = map(len, 0, 90, 220, 0);
    fill(gColor - 80, gColor, gColor - 100, tran);
    ellipse(0, 0, random(3, 10), random(2, 15));
    pop();
  }

  let hColor = map(len, 0, 100, 170, 0);
  stroke(hColor + 30, hColor, hColor);
  strokeWeight(thickness);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * random(0.5, 0.8), thickness * 0.8);
    pop();
    push();
    rotate(-angle);
    branch(len * random(0.5, 0.8), thickness * 0.8);
    pop();
  }
}
