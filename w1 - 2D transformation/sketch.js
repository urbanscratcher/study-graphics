var secLength = 160;
var secWidth = 1;
var minLength = 140;
var minWidth = 3;
var hourLength = 90;
var hourWidth = 5;

function setup() {
  createCanvas(900, 600);
  rectMode(CENTER);
}

function draw() {
  background(255);

  // Origin을 60, 60 변환한 후 그린 사각형
  drawTransFigures();

  // 2D 변환 후 그린 고양이 (코드가 간단해짐)
  drawCat(mouseX, mouseY);

  // top-left를 중심으로 변환하고, 45도 회전, scale 적용한 사각형
  rotRect(400, 100);

  // push/pop을 이용한 일시적 스타일/변환 적용
  tempTrans();

  // 시계 그리기
  drawClock();
}

function drawClock() {
  push();
  translate(width / 2 + 100, height / 2 + 100);

  ellipse(0, 0, 350, 350);

  // second hand
  push();
  strokeWeight(secWidth);
  stroke(200, 0, 0);
  var secAngle = map(second(), 0, 60, 0, 360);
  rotate(radians(secAngle));
  line(0, 0, 0, -secLength);
  pop();

  // minute hand
  push();
  strokeWeight(minWidth);
  var minAngle = map(minute(), 0, 60, 0, 360);
  rotate(radians(minAngle));
  line(0, 0, 0, -minLength);
  pop();

  // hour hand
  push();
  strokeWeight(hourWidth);
  var hourAngle = map(hour(), 0, 12, 0, 360);
  rotate(radians(hourAngle));
  line(0, 0, 0, -hourLength);
  push();
  translate(0, -hourLength + 20);
  ellipse(0, 0, 20, 20);
  pop();
  pop();

  var hours = 12;
  var hourStep = 360 / hours;
  for (var i = 0; i < hours; i++) {
    push();
    rotate(radians(i * hourStep));
    translate(0, -155);
    line(0, 0, 0, -20);
    pop();
  }

  pop();
}

function tempTrans() {
  push();
  fill(0);
  translate(200, 200);
  rotate(radians(45));
  rect(0, 0, 200, 200);

  // 변환점이나 스타일을 일시적으로 적용 (push/pop)
  push();
  fill(255, 0, 0);
  translate(100, 100);
  ellipse(0, 0, 30, 30);
  pop();

  push();
  fill(255, 0, 0);
  translate(-100, -100);
  ellipse(0, 0, 30, 30);
  pop();
  pop();
}

function rotRect(x, y) {
  push();
  fill(0);
  rect(x, y, 100, 100);

  fill(125);
  translate(x, y);
  rotate(radians(45));
  scale(0.5, 0.5);
  rect(0, 0, 100, 100);
  pop();
}

function drawTransFigures() {
  push();
  // 종이를 60,60만큼 옮긴다 (Origin 변경)
  translate(60, 60);

  fill(0);
  rect(10, 10, 100, 100);
  ellipse(0, 0, 20, 20);
  ellipse(-60, -60, 20, 20);
  pop();
}

function drawCat(x, y) {
  push();
  // rectMode(CENTER);
  strokeWeight(2);

  translate(x, y);

  rect(0, 0, 100, 100); // face
  rect(-20, -20, 25, 10); // left eye
  rect(+20, -20, 25, 10); // right eye
  rect(0, +5, 7, 25); // nose
  rect(0, +30, 30, 5); // mouth
  triangle(-50, -50, -30, -70, -10, -50); // left ear
  triangle(+50, -50, +30, -70, +10, -50); // right ear
  pop();
}
