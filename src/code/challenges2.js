/* Bruno Minelli - T19 - A */
// Desafio 10
function techList(array, name) {
  let message = 'Vazio!';
  let newArray = [];

  if (array.length === 0) {
    return message;
  }

  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    let object = { tech: array[index], name };
    newArray.push(object);
  }

  return newArray;
}

// Desafio 11
function checkPhoneNumber(array, digit) {
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === digit) {
      repeat += 1;
    }
  }
  return repeat;
}

function generatePhoneNumber(array) {
  let message = '';
  let phone = `(${array.slice(0, 2).join('')}) ${array.slice(2, 7).join('')}-${array.slice(7, 11).join('')}`;
  if (array.length !== 11) {
    message = 'Array com tamanho incorreto.';
    return message;
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0 || checkPhoneNumber(array, array[index]) >= 3) {
      message = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  if (message === '') {
    return phone;
  }
  return message;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let r = /\d+/g;
  let numbers = string.match(r);
  let glasses = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    glasses += parseInt(numbers[index], 10);
  }

  let word = 'copo';
  if (glasses > 1) {
    word = 'copos';
  }
  let message = `${glasses} ${word} de água`;
  return message;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
