let audioInput;

function setup() {
  createCanvas(windowWidth, windowHeight);

  audioInput = new p5.AudioIn();
  audioInput.start();
}

function draw() {
  // Background
  background(0);

  let amplitude = audioInput.getLevel();

  circle(width / 2, height / 2, amplitude * 1000);
}

function mousePressed() {
  userStartAudio();
}
