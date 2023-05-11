// Altere a expressão if/else utilizando ternary operator.

let speed = 90;
const speedCar = (speed) => {
  if (speed >= 120) {
    return `Você ultrapassou o limite de velocidade`;
  } else {
    return `Você está na velocidade permitida`;
  }
};
console.log(speedCar(speed));


let speed2 = 130;
const speedCar2 = (speed) => (speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`);

console.log(speedCar2(speed2));


// OU

//mesma coisa da de cima, mas dando enter entre as opções
let speed3 = 100;
const speedCar3 = (speed) => (speed >= 120 
  ? `Você ultrapassou o limite de velocidade` 
  : `Você está na velocidade permitida`);

console.log(speedCar3(speed3));