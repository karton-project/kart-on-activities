let answer;
let isStarted;
let cnt = 0;

function setup() {
  createCanvas(windowWidth, windowHeight- (windowHeight / 6));
  answer = round(random(100));
  textAlign(CENTER);
  textSize(32);
  background(255, 255, 255);
  var inp = createInput();
  inp.input(guess);
}

function guess() {
  let n = this.value();
  background(255, 255, 255);
  if (n == answer) {
    text('Doğru!', width / 2, height / 2);
  }
  else if (n < answer) {
    text('Daha yüksek...', width / 2, height / 2);
  }
  else if (n > answer) {
    text('Daha düşük...', width / 2, height / 2);
  }
  isStarted = true;
}

function draw(){
  if (!isStarted) {
    text('0 ile 100 arasında bir değer gir', width / 2, height / 2);
    fill(0);
    triangle(width/2 - 30, windowHeight- (windowHeight / 6) - 60, width/2 + 30, windowHeight- (windowHeight / 6) - 60, width / 2, windowHeight - (windowHeight / 6) - 20);
  }
}