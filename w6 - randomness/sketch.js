function setup() {
  createCanvas(900, 600);
  background(0);
  randomSeed(15); // pseudorandom number (starting point of the random function)
}

function draw() {
  let randX = random(0, width);
  let randY = random(0, height);

  noStroke();
  fill(random(255), 0, 0, random(255));
  let size = random(10, 25);
  ellipse(randX, randY, size, size);
}
