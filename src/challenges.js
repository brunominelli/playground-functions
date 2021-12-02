/* Bruno Minelli - T19 - A */
// Desafio 1
function compareTrue(firstBool, secondBool) {
  // seu código aqui
  let result = false;
  if (firstBool === true && secondBool === true)result = true; else result = false;
  return result;
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(string) {
  return `${string[string.length - 1]}, ${string[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (3 * wins) + ties;
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(array) {
  // seu código aqui
  let highNumber = 0;
  let countHighNumber = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= highNumber) {
      highNumber = array[i];
    }
  }

  for (let j = 0; j < array.length; j += 1) {
    if (highNumber === array[j]) {
      countHighNumber += 1;
    }
  }

  return countHighNumber;
}

// Desafio 7
// eslint-disable-next-line complexity
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let message;
  let positionCat1 = mouse - cat1;
  let positionCat2 = mouse - cat2;

  if (positionCat1 < 0) {
    positionCat1 = -positionCat1;
  } else if (positionCat2 < 0) {
    positionCat2 = -positionCat2;
  }
  if (positionCat1 > positionCat2) {
    message = 'cat2';
  } else if (positionCat2 > positionCat1) {
    message = 'cat1';
  } else if (positionCat1 === positionCat2) {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  // seu código aqui
  let message = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0) {
      message[i] = 'fizz';
    }
    if (array[i] % 5 === 0) {
      message[i] = 'buzz';
    }
    if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
      message[i] = 'fizzBuzz';
    }
    if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      message[i] = 'bug!';
    }
  }
  return message;
}

// Desafio 9
function encode() {
  // seu código aqui
}

function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
