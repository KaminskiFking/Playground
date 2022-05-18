// Desafio 1
function compareTrue(compare,compare2) {
  // seu código aqui
  if(compare && compare2){
    return true
  } else{
    return false
  }
  
}

// Desafio 2
function calcArea(base,altura) {
  // seu código aqui
  let area = base * altura / 2;

  return area

  
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui

  let dividir = string.split(' ')

  return dividir

}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let primeiroesegundo = arr[arr.length -1] + ', ' + arr[0]

  return primeiroesegundo
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  let pointsResult = (wins * 3) + ties

  return pointsResult


}

// Desafio 6
function highestCount() {
  // seu código aqui
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

// Desafio 10
function techList() {
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
  techList,
};
