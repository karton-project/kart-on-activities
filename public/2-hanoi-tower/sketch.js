let DISK_HEIGHT;
let DISK_WIDTH;
let slider;
let NUM_DISKS = 5;

let towers = [];

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  background(255);
  textSize(12);

  slider = createSlider(0.1, 5, 1, 0.5);
  slider.position(windowWidth / 4, windowHeight * 0.8);

  DISK_HEIGHT = windowHeight * 0.05;
  DISK_WIDTH = windowWidth * 0.05;

  towers[0] = new Tower(windowWidth * 0.2, windowHeight * 0.3, windowHeight * 0.3);
  towers[1] = new Tower(windowWidth * 0.5, windowHeight * 0.3, windowHeight * 0.3);
  towers[2] = new Tower(windowWidth * 0.8, windowHeight * 0.3, windowHeight * 0.3);

  for (let i = NUM_DISKS; i-- > 0;) {
    towers[0].disks.push(new Disk(i));
  }

  frameRate(0.5);
}

function draw() {
  background(255);
  frameRate(slider.value());

  fill(0);
  strokeWeight(0);
  stroke(0);
  textAlign(CENTER);
  textSize(12);
  text("Simülasyon hızını değiştir: ".concat((slider.value() > 0.1) ? slider.value() - 0.1 : slider.value()), windowWidth / 2, windowHeight * 0.8);

  for (const tower of towers) {
    tower.show();
  }

  if (frameCount === pow(2, NUM_DISKS)) noLoop();

  if (frameCount % 2 === 1) {
    for (let i = 0; i < towers.length; i++) {
      const tower = towers[i];
      if (tower.top() && tower.top().size === 0) {
        tower.transfer(towers[(i + 1) % towers.length]);
        break;
      }
    }
  } else {
    let moved = false;
    for (let i = NUM_DISKS; i > 0; i--) {
      if (frameCount % pow(2, i) === 0) {

        for (let j = 0; j < towers.length; j++) {
          const tower = towers[j];

          if (tower.top() && tower.top().size === i) {
            let left = j - 1;
            left = left < 0 ? left + 3 : left;
            const right = (j + 1) % towers.length;

            if (tower.transfer(towers[left]) || tower.transfer(towers[right])) {
              moved = true;
              break;
            }
          }
        }
      }

      if (moved) break;
    }
  }

}

class Tower {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;

    this.disks = [];
  }

  top() {
    return this.disks[this.disks.length - 1];
  }

  transfer(tower) {
    if (this.disks.length === 0) return false;

    if (!tower.top() || tower.top().size > this.top().size) {
      tower.disks.push(this.disks.pop());
      return true;
    } else {
      // Can't place bigger on smaller
      return false;
    }
  }

  show() {
    strokeWeight(8);
    stroke(0);
    line(this.x, this.y, this.x, this.y + this.h);

    strokeWeight(1);
    for (let i = 0; i < this.disks.length; i++) {
      const offset = -i * DISK_HEIGHT;
      const disk = this.disks[i];

      disk.show(this.x, this.y + this.h + offset);
    }
  }
}

function lg(n, b) {
  return log(n) / log(b);
}

const BASE = NUM_DISKS / 3;
class Disk {

  constructor(size) {
    this.size = size;
    this.a = random(0, 360);
    this.b = random(50, 100);
    this.c = random(50, 100);
  }

  show(x, y) {
    colorMode(HSB, 100);
    fill(this.a, this.b, this.c);

    const w = DISK_WIDTH * lg(this.size + BASE, BASE);
    //console.log(w);
    rect(x - w / 2, y, w, DISK_HEIGHT);
  }
}