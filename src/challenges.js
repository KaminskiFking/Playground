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
function highestCount(array) {
  // seu código aqui

let numberofarray = array[0]
let numberofhits = 0;

  for(let i = 0; i < array.length; i++){
      if(array[i] > numberofarray){
        numberofarray = array[i]
      }
  }
  for(let index = 0; index < array.length; index++){
      if(numberofarray === array[index]){
          numberofhits += 1
      }
  }
  return numberofhits
}

// Desafio 7
function catAndMouse(positionrat,cat1,cat2) {
  // seu código aqui
let distancecat1 = Math.abs(positionrat - cat1);
let distancecat2 = Math.abs(positionrat - cat2);
let results = 0;

if(distancecat1 > distancecat2) {
  return results = 'cat2'
} else if(distancecat1 < distancecat2){
  return results = 'cat1'
} else if(distancecat1 === distancecat2){
  return results = 'os gatos trombam e o rato foge'
}


}



// Desafio 8
function fizzBuzz(arrayinteiros) {
  // seu código aqui

let results =  [];

  for(let i = 0; i < arrayinteiros.length; i++){
    
      if(arrayinteiros[i] % 3 == 0 && arrayinteiros[i] % 5 == 0){
        results.push('fizzBuzz');
      } else if(arrayinteiros[i] % 5 == 0){
        results.push('buzz');
      } else if(arrayinteiros[i] % 3 == 0){
        results.push('fizz');
      } else {
        results.push('bug!');
      }
      
      
  }

  
  return results

}

// Desafio 9
function encode(string) {
  // seu código aqui

  let separate = string.split('')
  let results = 0;

  for (let i = 0; i < string.length; i++){

        if(separate[i] === 'a'){
          separate[i] = '1'
        } else if(separate[i] === 'e'){
          separate[i] = '2'
        } else if(separate[i] === 'i'){
          separate[i] = '3'
        } else if(separate[i] === 'o'){
          separate[i] = '4'
        } else if(separate[i] === 'u'){
          separate[i] = '5'
        }
        results = separate.join('')
  }
  
  return results

}

function decode(string) {
  // seu código aqui

  let separate = string.split('')
  let results = 0;

  for (let i = 0; i < string.length; i++){

        if(separate[i] === '1'){
          separate[i] = 'a'
        } else if(separate[i] === '2'){
          separate[i] = 'e'
        } else if(separate[i] === '3'){
          separate[i] = 'i'
        } else if(separate[i] === '4'){
          separate[i] = 'o'
        } else if(separate[i] === '5'){
          separate[i] = 'u'
        }
        results = separate.join('')
  }
  
  return results
}

// Desafio 10
function techList(tecnologias,nomepessoa) {
  // seu código aqui

  if(tecnologias.length === 0 ){
    return "Vazio!"
  }

tecnologias.sort()


let arr = []

  for(let i = 0; i < tecnologias.length; i++){

    let results = {}

     results['tech'] = tecnologias[i];
     
     results['name'] = nomepessoa;
      
      arr.push(results);
      
      
  }


  return arr
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))

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
