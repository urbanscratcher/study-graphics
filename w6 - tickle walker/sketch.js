let tickler;
function setup() {
  createCanvas(900, 600);
  background(0);

  tickler = new Tickler(width / 2, height / 3, 50);
}

function draw() {
  background(0);

  if (tickler.checkMouseInCircle()) {
    tickler.tickled();
  }

  tickler.display();
}

class Tickler {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  display() {
    noStroke();
    fill(255);
    circle(this.x, this.y, this.size);
  }

  tickled() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }

  checkMouseInCircle() {
    let d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.size / 2) {
      return true;
    }
    return false;
  }
}
