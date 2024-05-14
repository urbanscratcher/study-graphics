let balls;

function setup() {
  createCanvas(900, 600);
  background(0);
  balls = Array.from({ length: 100 }, () => new Ball());
}

function draw() {
  balls.forEach((b) => b.run());
}

class Ball {
  constructor() {
    let randomX = width / 2 + random(-100, 100);
    let randomY = height / 2 + random(-100, 100);

    this.prevLocation = new createVector(randomX, randomY);
    this.location = new createVector(randomX, randomY);

    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
    // more higher, more uncontrollable
    this.maxVelocity = random(2, 5);
  }

  run() {
    this.draw();
    this.move();
  }

  draw() {
    stroke(color(170, 200, 255, 50));
    strokeWeight(random(0.1, 2));
    line(
      this.location.x,
      this.location.y,
      this.prevLocation.x,
      this.prevLocation.y
    );
    this.prevLocation = this.location.copy();
  }

  move() {
    let mouse = new createVector(mouseX, mouseY);
    let dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.3);
    this.acceleration = dir;

    this.velocity.limit(this.maxVelocity);
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
  }
}
