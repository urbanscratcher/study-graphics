function setup() {
  createCanvas(500, 500);
  background(0);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);

  fill(255);

  translate(90, 55);
  let lengthX;
  let lengthY;
  let gapY = 10;
  let gapX = 76;

  const lengthXParams = {
    amp: 34,
    phaseEven: 0,
    phaseOdd: 180,
    freq: 0.3,
  };
  const lengthYParams = {
    amp: 4,
    phaseEven: 0,
    phaseOdd: 180,
    freq: 0.3,
  };
  const minValue = 4;

  const changePhaseX = -10;
  const changePhaseY = -6;
  const changePhaseJ = -26;

  for (let i = 0; i < 40; i++) {
    if (i % 2 == 0) {
      lengthXParams.phaseEven += changePhaseX;
      lengthX =
        sin(frameCount * 6 * lengthXParams.freq + lengthXParams.phaseEven) *
          lengthXParams.amp +
        (lengthXParams.amp + minValue);

      lengthYParams.phaseEven += changePhaseY;
      lengthY =
        sin(frameCount * 6 * lengthYParams.freq + lengthYParams.phaseEven) *
          lengthYParams.amp +
        (lengthYParams.amp + minValue);
    } else {
      lengthXParams.phaseOdd += changePhaseX;
      lengthX =
        sin(frameCount * 6 * lengthXParams.freq + lengthXParams.phaseOdd) *
          lengthXParams.amp +
        (lengthXParams.amp + minValue);

      lengthYParams.phaseOdd += changePhaseY;
      lengthY =
        sin(frameCount * 6 * lengthYParams.freq + lengthYParams.phaseOdd) *
          lengthYParams.amp +
        (lengthYParams.amp + minValue);
    }
    for (let j = 0; j < 5; j++) {
      let val = j * changePhaseJ;
      if (i % 2 == 0) {
        lengthX =
          sin(
            frameCount * 6 * lengthXParams.freq +
              (lengthXParams.phaseEven + val)
          ) *
            lengthXParams.amp +
          (lengthXParams.amp + minValue);
      } else {
        lengthX =
          sin(
            frameCount * 6 * lengthXParams.freq + lengthXParams.phaseOdd + val
          ) *
            lengthXParams.amp +
          (lengthXParams.amp + minValue);
      }
      rect(j * gapX, i * gapY, lengthX, lengthY, 30);
    }
  }
}
