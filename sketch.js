const iterations = 200,
  bound = 16,
  minRange = -1,
  maxRange = 1,
  ca = 0.14,
  cb = 0.618;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();

  background(0);

  drawPixels();
}

function drawPixels() {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let a = map(i, 0, width, minRange, maxRange),
        b = map(j, 0, height, minRange * (height / width), maxRange * (height / width)),
        z = 0;

      for (let k = 0; k < iterations; k++) {
        const z2a = a * a - b * b,
          z2b = 2 * a * b;

        a = z2a + ca;
        b = z2b + cb;

        if (abs(a + b) > bound) {
          fill(255, map(k, 0, iterations, 0, 255));
          break;
        }
        else if (k == iterations - 1) {
          fill(255);
        }
      }

      rect(i, j, 1);
    }
  }
}