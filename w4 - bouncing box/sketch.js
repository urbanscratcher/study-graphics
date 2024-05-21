let { Engine, World, Bodies, Render } = Matter;

let engine;
let box1;
let ground;

function setup() {
  createCanvas(900, 600);
  engine = Engine.create();

  box1 = Bodies.rectangle(200, 200, 80, 80, {
    restitution: 0.8,
    friction: 0.01,
  });

  let options = { isStatic: true, angle: Math.PI * 0.06 };
  ground1 = Bodies.rectangle(400, 500, 810, 10, options);

  World.add(engine.world, [box1, ground1]);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  drawVertices(box1.vertices);

  fill(125);
  drawVertices(ground1.vertices);
}

function drawVertices(vertices) {
  beginShape();
  for (let vert of vertices) {
    vertex(vert.x, vert.y);
  }
  endShape(CLOSE);
}
