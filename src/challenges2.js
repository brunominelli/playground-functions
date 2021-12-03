/* eslint-disable max-lines-per-function */
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

// eslint-disable-next-line complexity
function generatePhoneNumber(array) {
  // seu código aqui
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
