let { Engine, World, Bodies, Render } = Matter;

let engine;
let ground1, ground2;
let boxes = [];

function setup() {
  createCanvas(900, 600);
  engine = Engine.create();

  ground1 = Bodies.rectangle(100, 200, 500, 10, {
    isStatic: true,
    angle: Math.PI * 0.06,
  });
  ground2 = Bodies.rectangle(500, 500, 500, 10, {
    isStatic: true,
    angle: Math.PI * -0.06,
  });

  World.add(engine.world, [ground1, ground2]);
}

function draw() {
  background(0);
  Engine.update(engine);

  fill(255);
  generateObject(width / 2, 0);
  for (let i = 0; i < boxes.length; i++) {
    drawVertices(boxes[i].vertices);

    if (isOffScreen(boxes[i])) {
      World.remove(engine.world, boxes[i]);
      boxes.splice(i, 1);
      i--;
    }
  }

  fill(125);
  drawVertices(ground1.vertices);
  drawVertices(ground2.vertices);
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
