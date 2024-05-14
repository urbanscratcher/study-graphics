function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(125);
  let mouse = createVector(mouseX, mouseY);
  let center = createVector(width / 2, height / 2);

  // Vector Subtraction
  // So if we subtracted location from the new location, what would we get? We will get velocity. How many steps do we need in order to go from here to there? That's what's subtraction does. We will get the distance, the steps that separate the new location from the old location.
  mouse.sub(center);

  // Calculating magnitude
  text("Magnitude: " + int(mouse.mag()), 10, 20);
  rect(10, 30, mouse.mag(), 10);

  // Normalizing vector
  // Mainly indicates the direction. The size is always 1.
  let normal = mouse.copy();
  text("Normal: " + normal.normalize(), 10, 60);
  normal = normal.mult(25);
  line(40, 90, 40 + normal.x, 90 + normal.y);

  // Vector Scaling
  // multiplication and division
  mouse.mult(1);
  // mouse.div(2);

  translate(width / 2, height / 2);
  strokeWeight(3);
  line(0, 0, mouse.x, mouse.y);
}
