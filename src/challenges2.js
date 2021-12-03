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
    let object = { tech: array[index], name};
    newArray.push(object);
  }

  return newArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
