// Code particles that fall when the mouse is dragged and bounce on the ground
let balls;
let clearButton;

///////////////////////////////////////////
function setup() {
  createCanvas(900, 600);
  balls = [];
  clearButton = new Button(20, 20, 80, 40, "Clear");
}

function draw() {
  background(0);
  clearButton.draw();
  balls.forEach(function (ball) {
    // apply gravity
    let gravity = new createVector(0, 0.1);
    ball.applyForce(gravity);

    // apply friction
    let friction = ball.velocity.copy();
    friction.mult(-1); // opposite direction
    friction.normalize();
    friction.mult(0.04);
    ball.applyForce(friction);

    // reduce alpha value of the color of the ball
    ball.age -= 1;
    ball.run();
  });
}

///////////////////////////////////////////
class Ball {
  constructor(mouseX, mouseY, color) {
    this.age = 255;
    this.color = color;
    this.color.setAlpha(this.age);
    this.acceleration = new createVector(0, 0);
    this.velocity = new createVector(random(-3, 3), random(-3, 3));
    this.location = new createVector(mouseX, mouseY);
    this.size = random(8, 30);
  }

  run() {
    this.draw();
    this.move();
    this.bounce();
  }

  draw() {
    this.color.setAlpha(this.age);
    noStroke();
    fill(this.color);
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }

  move() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
    this.velocity.limit(8);
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

class Button {
  constructor(locX, locY, width, height, text) {
    this.unhoveredColor = color(200);
    this.hoveredColor = color(180);
    this.clickedColor = color(160);

    this.locX = locX;
    this.locY = locY;
    this.width = width;
    this.height = height;
    this.text = text;
    this.color = this.unhoveredColor;
  }

  draw() {
    this.changeBgColor();
    fill(this.color);
    rect(this.locX, this.locY, this.width, this.height);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.text, this.locX, this.locY, this.width, this.height);
  }

  changeBgColor() {
    if (
      mouseX > this.locX &&
      mouseX < this.locX + this.width &&
      mouseY > this.locY &&
      mouseY < this.locY + this.height &&
      !mouseIsPressed
    ) {
      this.color = this.hoveredColor;
    } else if (
      mouseX > this.locX &&
      mouseX < this.locX + this.width &&
      mouseY > this.locY &&
      mouseY < this.locY + this.height &&
      mouseIsPressed
    ) {
      this.color = this.clickedColor;
    } else {
      this.color = this.unhoveredColor;
    }
  }

  buttonPressed() {
    balls = [];
  }
}

///////////////////////////////////////////
function mouseDragged() {
  balls.push(
    new Ball(
      mouseX,
      mouseY,
      color(random(190, 255), random(100, 210), random(100, 230))
    )
  );
}

function mousePressed() {
  if (
    mouseX > clearButton.locX &&
    mouseX < clearButton.locX + clearButton.width &&
    mouseY > clearButton.locY &&
    mouseY < clearButton.locY + clearButton.height
  ) {
    clearButton.buttonPressed();
  }
}
