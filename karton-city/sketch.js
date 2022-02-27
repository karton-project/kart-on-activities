let school, home, tree, hq, yacht;
let schoolX, schoolY, homeX, homeY, treeX, treeY, hqX, hqY, yachtX, yachtY, yachtTextX, yachtTextY;
let imageSize;
let yOff = 0;
let isSchoolX, isSchoolY, isHomeX, isHomeY, isHqX, isHqY;

function preload() {
  school = loadImage('img/school.png');
  home = loadImage('img/house.png');
  tree = loadImage('img/forest.png');
  hq = loadImage('img/headquarters.png');
  yacht = loadImage('img/yachting.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(112, 204, 31);
  setDimens();
  forest();
  image(school, schoolX, schoolY, imageSize, imageSize);
  image(home, homeX, homeY, imageSize, imageSize);
  image(hq, hqX, hqY, imageSize, imageSize);
  printTitle('HOŞ GELDİN!', width * 0.1, height * 0.1);
  printTitle('ÖĞRETMEN', schoolX + (imageSize / 2), schoolY + (imageSize / 2));
  printTitle('ÖĞRENCİ', homeX - (imageSize / 2), homeY + (imageSize / 2));
  printTitle('GELİŞTİRİCİ', hqX + (imageSize / 2), hqY + (imageSize / 2));
}

function changeBG() {
  background(200);
}

function printTitle(str, x, y) {
  fill(255);
  stroke(255);
  textFont('Bangers');
  textSize(min(height * 0.08, width * 0.08));
  text(str, x, y);
}

function setDimens() {
  imageSize = Math.min(width * 0.2, height * 0.2);
  schoolX = random(width * 0.08, width * 0.12);
  schoolY = random(height * 0.24, height * 0.28);
  homeX = random(width * 0.66, width * 0.74);
  homeY = random(height * 0.08, height * 0.12);
  hqX = random(width * 0.27, width * 0.33);
  hqY = random(height * 0.52, height * 0.58);
  yachtX = random(width * 0.46, width * 0.54);
  yachtY = random(height * 0.7, height * 0.8);
  yachtTextX = yachtX - imageSize;
  yachtTextY = yachtY + (imageSize *0.7);
}

function forest() {
  for (let i = 0; i < 3; i++) {
    treeX = random(width * 0.5);
    treeY = random(height * 0.3);
    image(tree, treeX, treeY, imageSize, imageSize);
  }
  for (let i = 0; i < 4; i++) {
    treeX = random(width * 0.5, width);
    treeY = random(height * 0.3, height * 0.6);
    image(tree, treeX, treeY, imageSize, imageSize);
  }
  for (let i = 0; i < 3; i++) {
    treeX = random(0, width * 0.1);
    treeY = random(height * 0.5, height * 0.6);
    image(tree, treeX, treeY, imageSize, imageSize);
  }
}

function waves(minHeight, maxHeight, noiseStart) {
  beginShape();
  var xOff = noiseStart;
  for (var x = 0; x <= width; x += 18) {
    var y = map(noise(xOff, yOff), 0, 1, minHeight, maxHeight);
    vertex(x, y);
    xOff += 0.05;
  }
  yOff += 0.002;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function drawYacht() {
  if (frameCount % 20 == 0) {
    if (yachtY > height) {
      yachtY = random(height * 0.75, width * 0.85);
    }
    yachtY += random(-2, 2);
  }
  image(yacht, yachtX, yachtY, imageSize, imageSize);
  text('TÜM İÇERİĞİ GÖR', yachtTextX, yachtTextY);
}

function draw() {
  checkMouseState();
  for (var i = 0; i < 4; i++) {
    push();
    colorMode(HSB, 360, 100, 100, 100);
    fill(color(200, 30, 100 - (i * 12), 80));
    waves(height * 0.9 + (i * 50), height * 0.8 + (i * 50), i);
    pop();
  }
  drawYacht();
}

function checkMouseState() {
  isSchoolX = mouseX > schoolX && mouseX < schoolX + imageSize;
  isSchoolY = mouseY > schoolY && mouseY < schoolY + imageSize;

  isHomeX = mouseX > homeX && mouseX < homeX + imageSize;
  isHomeY = mouseY > homeY && mouseY < homeY + imageSize;

  isHqX = mouseX > hqX && mouseX < hqX + imageSize;
  isHqY = mouseY > hqY && mouseY < hqY + imageSize;
}

function mouseClicked() {
  if (isSchoolX && isSchoolY) {
    console.log('Hello School');
  }

  if (isHomeX && isHomeY) {
    console.log('Hello Home');
  }

  if (isHqX && isHqY) {
    console.log('Hello HQ');
  }
}

function mouseMoved() {
  if ((isSchoolX && isSchoolY) || (isHomeX && isHomeY) || (isHqX && isHqY)) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}