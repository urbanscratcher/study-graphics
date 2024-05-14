// Gravity
// A natural phenomenon by which all things with mass are attracted to one another
// In p5, a vector with values (0, 0.1) that is added to the acceleration

// Friction (Opposite reaction)
// Gravity is a natural phenomenon by which all things with mass are attracted to one another (by Law of Interaction)
// In p5,
// 1. Get the velocity vector
// 2. Calculate the opposite vector
// 3. Scale by a friction coefficient
// 4. Apply the force

let ball;

function setup() {
  createCanvas(900, 600);
  ball = new Ball();
}

function draw() {
  background(0);

  // apply gravity
  let gravity = new createVector(0, 0.1);
  ball.applyForce(gravity);

  // apply friction
  let friction = ball.velocity.copy();
  friction.mult(-1); // opposite direction
  friction.normalize();
  friction.mult(0.01);
  ball.applyForce(friction);

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
