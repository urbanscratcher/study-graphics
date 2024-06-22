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

  angle = random(0, 60);
  stroke(255);
  translate(200, height);
  branch(100, 3);
}
/////////////////////////////////////////////////
function branch(len, thickness) {
  let noiseVal = noise(frameCount * 0.01);
  let addAngle = map(noiseVal, 0, 1, -15, 15);

  if (len <= 4) {
    push();
    noStroke();
    let gColor = map(len, 0, 40, 180, 200);
    fill(gColor - 80, gColor, gColor - 100, 140);
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
    rotate(angle + addAngle);
    branch(len * random(0.5, 0.8), thickness * 0.8);
    pop();

    push();
    rotate(-angle + addAngle);
    branch(len * random(0.5, 0.8), thickness * 0.8);
    pop();
  }
}

// Coding train example
/*
var angle = 0;
var tree = [];
var leaves = [];
var count = 0;

function setup() {
  createCanvas(400, 400);
  let begin = createVector(width / 2, height);
  let end = createVector(width / 2, height - 100);
  let root = new Branch(begin, end);

  tree[0] = root;
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 6) {
    for (let i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(51);
  for (let i = 0; i < tree.length; i++) {
    tree[i].show();
    // tree[i].jitter();
  }
  for (let i = 0; i < leaves.length; i++) {
    fill(255, 0, 100, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0, 2);
  }
}
  */
