let { Engine, World, Bodies, Render } = Matter;

let engine;
let box1;
let ground1, ground2;
let circle;
let polygon;

function setup() {
  createCanvas(900, 600);
  engine = Engine.create();

  box1 = Bodies.rectangle(200, 200, 80, 80, {
    restitution: 0.8,
    friction: 0.5,
  });
  circle = Bodies.circle(80, 0, 20, {
    restitution: 0.8,
    friction: 0.5,
  });
  polygon = Bodies.polygon(100, 0, 5, 30, {
    restitution: 0.8,
    friction: 0.5,
  });

  ground1 = Bodies.rectangle(100, 200, 500, 10, {
    isStatic: true,
    angle: Math.PI * 0.06,
  });
  ground2 = Bodies.rectangle(500, 500, 500, 10, {
    isStatic: true,
    angle: Math.PI * -0.06,
  });

  World.add(engine.world, [box1, ground1, ground2, circle, polygon]);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  drawVertices(box1.vertices);
  drawVertices(circle.vertices);
  drawVertices(polygon.vertices);

  fill(125);
  drawVertices(ground1.vertices);
  drawVertices(ground2.vertices);
}

function drawVertices(vertices) {
  beginShape();
  for (let vert of vertices) {
    vertex(vert.x, vert.y);
  }
  endShape(CLOSE);
}
