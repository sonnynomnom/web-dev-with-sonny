// RGB to HSL Converter 🎨
// @irlfede

function rgb2hsl() {

  console.log('Welcome to the AWESOME RGB to HSL converter!\n');

  console.log('Input an RGB color like ###, ###, ### to convert it to HSL.');
  console.log('Some examples:\n');

  console.log('RED:     255, 0, 0');
  console.log('ORANGE:  255, 128, 0');
  console.log('YELLOW:  255, 255, 0');
  console.log('GREEN:   0, 128, 0');
  console.log('BLUE:    0, 0, 255\n');

  const userChoice = getUserInput();
  const hslColor = colorConversion(userChoice);

  console.log(`HSL: ${hslColor[0]}°, ${hslColor[1]}%, ${hslColor[2]}%	`);

};

const colorConversion = colorArray => {

  let H, S, L;
  let [R1,G1,B1] = [colorArray[0]/255,colorArray[1]/255,colorArray[2]/255];

  let min = Math.min(R1,G1,B1);
  let max = Math.max(R1,G1,B1);
  let delta = max - min;

  L = (min + max) / 2;

  if (delta == 0) {
    return [0, 0, L];
  } else {
    S = (L >= 0.5) ? (max-min)/(2.0-max-min) : (max-min)/(max+min);
  }
  
  if (max == R1) {
    H = 60 * ((G1-B1)/(max-min));
  } else if (max == G1) {
    H = 60 * (2.0 + (B1-R1)/(max-min));
  } else if (max == B1) {
    H = 60 * (4.0 + (R1-G1)/(max-min));
  }

  return [parseInt(H), parseInt(100*S), parseInt(100*L)];

};

const getUserInput = () => {

  rgbString = prompt('RGB color: ');
  choice = rgbString.split(',');

  if (choice.length != 3){
    console.log('Did you forget a number?\n');
    getUserInput();
  } else if (choice[0] > 255 || choice[1] > 255 || choice[2] > 255) {
    console.log('RGB colors use 0-255\n');
    getUserInput();
  } else if (choice[0] < 0 || choice[1] < 0 || choice[2] < 0) {
    console.log('RGB colors use 0-255\n');
    getUserInput();
  }

  return choice;
  
};

rgb2hsl();