let { Engine, World, Bodies, Render, Body } = Matter;

let engine;
let ground;
let boxes = [];
let box1;

// create propeller
let propeller;
let angle = 0;
let angleSpeed = 0.1;

function setup() {
  createCanvas(900, 600);
  engine = Engine.create();

  box1 = Bodies.rectangle(50, 0, 50, 50, {
    restitution: 0.8,
    friction: 0.5,
  });
  ground = Bodies.rectangle(500, 500, 500, 10, {
    isStatic: true,
    angle: Math.PI * -0.06,
  });
  propeller = Bodies.rectangle(width / 2, height / 2, 300, 15, {
    isStatic: true,
    angle: angle,
  });

  World.add(engine.world, [box1, ground, propeller]);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  drawVertices(box1.vertices);

  // propeller
  drawVertices(propeller.vertices);
  angle += angleSpeed; // update the angle to rotaet the propeller
  Body.setAngle(propeller, angle); // setAngle() used to change the angle of the propeller on screen
  Body.setAngularVelocity(propeller, angleSpeed); // setAngularVelocity() used to pass in the speed at which the propeller was moving so that the simulations of the boxes had information about how fast the propeller was moving.

  if (random(1) < 0.2) {
    generateObject(width / 2, 0);
  }

  for (let i = 0; i < boxes.length; i++) {
    drawVertices(boxes[i].vertices);

    if (isOffScreen(boxes[i])) {
      World.remove(engine.world, boxes[i]);
      boxes.splice(i, 1);
      i--;
    }
  }

  fill(125);
  drawVertices(ground.vertices);
}

function isOffScreen(body) {
  let pos = body.position;
  return pos.x < 0 || pos.x > width || pos.y > height;
}

function generateObject(x, y) {
  let b = Bodies.rectangle(x, y, random(10, 30), random(10, 30), {
    restitution: 0.8,
    friction: 0.5,
  });
  boxes.push(b);
  World.add(engine.world, [b]);
}

function drawVertices(vertices) {
  beginShape();
  for (let vert of vertices) {
    vertex(vert.x, vert.y);
  }
  endShape(CLOSE);
}
