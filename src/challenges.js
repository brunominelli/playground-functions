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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
