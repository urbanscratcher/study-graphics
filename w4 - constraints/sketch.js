let { Engine, World, Bodies, Render, Constraint } = Matter;

let engine;
let ground;

let constraint1;
let poly1A;
let poly1B;

let poly2;
let constraint2;

let poly3;
let constraint3;

function setup() {
  createCanvas(900, 600);

  // create an engine
  engine = Engine.create();

  // poly1A, poly1B
  poly1A = Bodies.polygon(700, 100, 6, 20);
  poly1B = Bodies.polygon(700, 250, 1, 50);
  constraint1 = Constraint.create({
    bodyA: poly1A,
    pointA: { x: 0, y: 0 }, // center (relative coords)
    bodyB: poly1B,
    pointB: { x: -10, y: -10 },
    stiffness: 0.01, // the lower, the more elastic
  });
  World.add(engine.world, [poly1A, poly1B, constraint1]);

  // poly2
  poly2 = Bodies.polygon(300, 200, 5, 40);
  constraint2 = Constraint.create({
    pointA: { x: 150, y: 50 },
    pointB: { x: -10, y: -20 },
    bodyB: poly2,
  });
  World.add(engine.world, [poly2, constraint2]);

  // poly3
  poly3 = Bodies.polygon(400, 100, 4, 30);
  constraint3 = Constraint.create({
    pointA: { x: 400, y: 120 },
    pointB: { x: -10, y: -10 },
    bodyB: poly3,
    stiffness: 0.001,
    damping: 0.05, // the lower, the more elastic
  });
  World.add(engine.world, [poly3, constraint3]);

  // ground
  ground = Bodies.rectangle(width / 2, height - 20, width, 10, {
    isStatic: true,
    angle: 0,
  });
  World.add(engine.world, [ground]);
}

function draw() {
  background(0);
  Engine.update(engine);

  stroke(255);
  fill(255);
  drawVertices(poly1A.vertices);
  drawVertices(poly1B.vertices);
  drawVertices(poly2.vertices);
  drawVertices(poly3.vertices);

  stroke(128);
  strokeWeight(3);
  drawConstraint(constraint1);
  drawConstraint(constraint2);
  drawConstraint(constraint3);

  noStroke();
  fill(128);
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

function drawConstraint(constraint) {
  let offsetA = constraint.pointA;
  let posA = { x: 0, y: 0 };
  if (constraint.bodyA) {
    posA = constraint.bodyA.position;
  }

  let offsetB = constraint.pointB;
  let posB = { x: 0, y: 0 };
  if (constraint.bodyB) {
    posB = constraint.bodyB.position;
  }

  line(
    posA.x + offsetA.x,
    posA.y + offsetA.y,
    posB.x + offsetB.x,
    posB.y + offsetB.y
  );
}
