// Collision Detection
// The computational problem of detecting the intersection of 2+ objects
// If we have many bodies in a simulation, the problem quickly becomes complex and computationally expensive
// O(n^2)

// Optimization Solution
// Divide the collision detection process into 2 parts:
// 1. Broad Phase Collision Detection
// Find pairs of rigid bodies that might be colliding with each other, and exclude pairs that are certainly not colliding
// To optimize this task, physics engines often use space partitioning as well as bounding boxes
// Bounding boxes is to simplify the comparison between shapes
// Rather than going through all the vertices, first establish whether there is a chance for overlap using bounding boxes
// To minimize the number of overlap tests between the bounding boxes, we can use some space partitioning

// Space partitioning algorithms
// - uniform grids
// - octrees in 3D
// - quadtrees in 2D
// - spatial hashing
// - sort and sweep

// Quadtrees in 2D
//  - a data structure used to divide a 2D region into more manageable parts
//  - starts as a single node
//  - initially, objects added to the space are added to the single node of the quadtree
//  - when more objects are added, the node is split into 4 subnodes
//  - each object will then be put into one of those subnodes according to where it lies in 2D space
//  - any object that cannot fully fit inside the nodes boundary, will be placed in the parent node
//  - each subnode can continue subdividing as more objects are added
//  - the process continues recursively until the number of objects in a node reaches a certain threshold
//  - by dividing the space into smaller parts, we can quickly ensure that large groups of objects are not colliding, not needing to run an expensive collision detection algorithm
//  - O(nlogn)

// 2. Narrow Phase Collision Detection
// 점과 원의 충돌 검사
// - 점과 원의 중심 사이의 거리를 계산
// - 이 거리가 원의 반지름보다 작으면 충돌로 판단
// dist function 이용, we want to check if this point is inside the circle

// 원과 원의 충돌 검사
// - 두 원의 중심 사이의 거리를 계산
// - 이 거리가 두 원의 반지름의 합보다 작으면 충돌로 판단
// if(dist(bigCircleX, bigCircleY, smallCircleX, smallCircleY) < bigCircleRad + smallCircleRad) {
//   circles are colliding }

// 사각형과 점의 충돌 검사
// 점의 좌표가 사각형의 경계 내부에 있는지 확인
// 사각형의 왼쪽, 오른쪽, 위쪽, 아래쪽 경계와 비교

// 삼각형과 사각형의 충돌 검사
// 삼각형의 각 꼭짓점이 사각형 내부에 있는지 확인
// 사각형의 모서리가 삼각형 내부에 있는지 확인

let balls;
let clearButton;
let box;

///////////////////////////////////////////
function setup() {
  createCanvas(900, 600);
  balls = [];
  clearButton = new Button(20, 20, 80, 40, "Clear");
  box = new Box(this.width / 2 - 100, this.height / 2 - 50, 200, 100);
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

    // collision detection
    if (ball.isColliding()) {
      ball.color = color(255, 150, 150);
    }

    ball.run();
  });
  box.draw();
}

///////////////////////////////////////////
class Box {
  constructor(locX, locY, width, height) {
    this.locX = locX;
    this.locY = locY;
    this.width = width;
    this.height = height;
  }

  draw() {
    fill(color(255, 50, 50, 150));
    rect(this.locX, this.locY, this.width, this.height);
  }
}

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

  isColliding() {
    if (
      this.location.y > box.locY + this.size / 2 &&
      this.location.x > box.locX + this.size / 2 &&
      this.location.x < box.locX + box.width - this.size / 2 &&
      this.location.y < box.locY + box.height - this.size / 2
    ) {
      return true;
    }
  }

  run() {
    this.draw();
    this.move();
    this.bounce();
  }

  draw() {
    fill(this.color);
    this.color.setAlpha(this.age);
    noStroke();
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
      color(random(190, 255), random(210, 255), random(120, 180))
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
