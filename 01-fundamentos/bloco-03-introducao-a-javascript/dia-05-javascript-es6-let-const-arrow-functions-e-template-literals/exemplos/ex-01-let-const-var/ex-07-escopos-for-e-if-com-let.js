function minhaIdade () {
  for (let index = 37; index <= 100; index += 1) {
    console.log(index);
  }
  // console.log(index); vai dar erro, index não definida
}

minhaIdade();

function somaIdade () {
  let soma = 0;
  for (let index = 37; index <= 100; index += 1) {
    soma += index;
  }
  console.log(soma); //não da erro pq a variável soma foi declarada fora do for
}

somaIdade();


function somaIdade2 () {
  for (let index = 37; index <= 100; index += 1) {
    let soma = 0; //aqui sempre a variável soma vai valer zero em cada for;
    soma += index;
    console.log(soma);
  }
}

somaIdade2();