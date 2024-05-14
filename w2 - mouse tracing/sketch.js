function setup() {
  createCanvas(900, 600);
  background(0);
  ball = new Ball();
}

function draw() {
  ball.run();
}

class Ball {
  constructor() {
    // this.velocity = new createVector(random(-2, 2), random(-2, 2));
    // this.location = new createVector(random(width), random(height));
    this.velocity = new createVector(0, 0);
    this.location = new createVector(width / 2, height / 2);
    this.prevLocation = new createVector(width / 2, height / 2);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
  }

  run() {
    this.draw();
    this.move();
    // this.bounce();
    this.edges();
  }

  draw() {
    // fill(125);
    // ellipse(this.location.x, this.location.y, 40, 40);
    stroke(255);
    strokeWeight(3);
    line(
      this.location.x,
      this.location.y,
      this.prevLocation.x,
      this.prevLocation.y
    );
    this.prevLocation = this.location.copy();
  }

  move() {
    // Follow the mouse
    let mouse = createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.3);
    this.acceleration = dir;

    // Vector Addition
    // We add acceleration to velocity to get the new velocity.
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    // We add velocity to the previous location to get the new location, to jump to the new location frame after frame.
    this.location.add(this.velocity);
  }

  edges() {
    if (this.location.x < 0) this.location.x = width;
    else if (this.location.x > width) this.location.x = 0;
    if (this.location.y < 0) this.location.y = height;
    else if (this.location.y > height) this.location.y = 0;
  }

  bounce() {
    if (this.location.x < 0 || this.location.x > width) {
      this.velocity.x *= -1;
    }
    if (this.location.y < 0 || this.location.y > height) {
      this.velocity.y *= -1;
    }
  }
}
