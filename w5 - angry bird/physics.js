////////////////////////////////////////////////////////////////
// [Addition] Add score by 10 points when a box is offscreen
function updateScore(points) {
  score += points;
}
function drawScore() {
  push();
  fill(255);
  textSize(32);
  text("Score: " + score, 10, 40);
  pop();
}
function checkBoxOffscreen() {
  for (let i = boxes.length - 1; i >= 0; --i) {
    let box = boxes[i];
    if (isOffScreen(box)) {
      let pos = box.position;
      removeFromWorld(box);
      boxes.splice(i, 1);
      colors.splice(i, 1);
      updateScore(10); // 상자 파괴 시 10점 부여
    }
  }
}
////////////////////////////////////////////////////////////////
function setupGround() {
  ground = Bodies.rectangle(500, 600, 1000, 40, {
    isStatic: true,
    angle: 0,
  });
  World.add(engine.world, [ground]);
}

////////////////////////////////////////////////////////////////
function drawGround() {
  push();
  fill(128);
  drawVertices(ground.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupPropeller() {
  // your code here
  propeller = Bodies.rectangle(150, 480, 200, 15, {
    isStatic: true,
    angle: angle,
  });
  World.add(engine.world, [propeller]);
}
////////////////////////////////////////////////////////////////
//updates and draws the propeller
function drawPropeller() {
  push();
  // your code here
  Body.setAngle(propeller, angle);
  Body.setAngularVelocity(propeller, angleSpeed);
  angle += angleSpeed;
  drawVertices(propeller.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupBird() {
  // [Addition] the size of a bird is randomly distributed regarding the normal distribution, with a mean of 20 and a standard deviation of 6 by using randomGaussian().
  var bird = Bodies.circle(mouseX, mouseY, randomGaussian(20, 6), {
    friction: 0,
    restitution: 0.95,
  });
  Matter.Body.setMass(bird, bird.mass * 10);
  World.add(engine.world, [bird]);
  birds.push(bird);
}
////////////////////////////////////////////////////////////////
function drawBirds() {
  push();
  //your code here
  for (let i = 0; i < birds.length; i++) {
    let bird = birds[i];
    fill(255, 0, 0);
    drawVertices(bird.vertices);
    if (isOffScreen(bird)) {
      birds.splice(i, 1);
      removeFromWorld(bird);
      i--;
    }
  }
  pop();
}
////////////////////////////////////////////////////////////////
//creates a tower of boxes
function setupTower() {
  //you code here
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      let box = Bodies.rectangle(700 + j * 80, i * 80, 80, 80, {
        restitution: 0.8,
        friction: 0.5,
      });
      boxes.push(box);
      colors.push(color(0, random(10, 255), 0));
      World.add(engine.world, [box]);
    }
  }
}
////////////////////////////////////////////////////////////////
//draws tower of boxes
function drawTower() {
  push();
  //your code here
  noStroke();
  for (let i = 0; i < boxes.length; i++) {
    fill(colors[i]);
    drawVertices(boxes[i].vertices);
  }
  pop();
}
////////////////////////////////////////////////////////////////
function setupSlingshot() {
  //your code here
  slingshotBird = Bodies.circle(250, 200, 20, {
    friction: 0,
    restitution: 0.95,
  });
  Body.setMass(slingshotBird, slingshotBird.mass * 10);
  slingshotConstraint = Constraint.create({
    pointA: { x: 250, y: 170 },
    pointB: { x: 0, y: 0 },
    bodyB: slingshotBird,
    stiffness: 0.01,
    damping: 0.0001,
  });
  World.add(engine.world, [slingshotBird, slingshotConstraint]);
}
////////////////////////////////////////////////////////////////
//draws slingshot bird and its constraint
function drawSlingshot() {
  push();
  // your code here
  stroke(0);
  strokeWeight(2);
  fill(255, 127, 0);
  drawVertices(slingshotBird.vertices);
  pop();

  drawConstraint(slingshotConstraint);
}
/////////////////////////////////////////////////////////////////
function setupMouseInteraction() {
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 },
  };
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}
