// Force: a vector that cause an object with mass to accelerate
// Goal of forces: make objects respond to a variety of forces

// Newton in code: First Law
// "An object at rest stays at rest and an object in motion stays in motion"
// The p5 velocity vector will not change unless the object is acted upon

// Newton in code: Second Law
// Force = Mass x Acceleration
// Acceleration = Force / Mass
// This means that force is proportional to acceleration, but acceleration is inversely proportional to mass
// Let Mass be 1
// Acceleration = Force
// This means that the Acceleration vector of an object is equal to the Force vector acted on it
// applyForce(force) { acceleration = force }

// Force Accumulation
// Multiple forces can act on an object at the same time to simulate complex real world
// gravity, wind, friction, driving force, air resistance etc.
// applyForce(force) { acceleration.add(force) }
// e.g. Driving Car
// car.applyForce(gravity)
// car.applyForce(wind)
// car.applyForce(friction)
// car.applyForce(engine)

let ball;

function setup() {
  createCanvas(900, 600);
  ball = new Ball();
}

function draw() {
  background(0);
  let mouse = createVector(mouseX, mouseY);
  let dir = p5.Vector.sub(mouse, ball.location);
  dir.normalize();
  dir.mult(0.3);
  ball.applyForce(dir);
  ball.run();
}

class Ball {
  constructor() {
    this.acceleration = new createVector(0, 0);
    this.velocity = new createVector(0, 0);
    this.location = new createVector(width / 2, height / 2);
    this.size = 40;
  }

  run() {
    this.draw();
    this.move();
    this.bounce();
  }

  draw() {
    fill(125);
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }

  move() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    // Empty the bucket for other forces in the next frame added to it by multiplying 0
    // Initialize the accumulated force to 0
    this.acceleration.mult(0);
    this.velocity.limit(5);
  }

  bounce() {
    if (this.location.x > width - this.size / 2) {
      this.velocity.x *= -1;
      this.location.x = width - this.size / 2;
    } else if (this.location.x < this.size / 2) {
      this.velocity.x *= -1;
      this.location.x = this.size / 2;
    }
    if (this.location.y > height - this.size / 2) {
      this.velocity.y *= -1;
      this.location.y = height - this.size / 2;
    } else if (this.location.y < this.size / 2) {
      this.velocity.y *= -1;
      this.location.y = this.size / 2;
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }
}
