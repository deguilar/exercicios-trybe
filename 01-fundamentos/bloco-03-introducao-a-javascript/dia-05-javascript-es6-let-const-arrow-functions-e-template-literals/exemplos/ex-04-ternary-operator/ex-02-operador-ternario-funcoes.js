// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
);

console.log(checkIfElse(37));
console.log(checkTernary(17));

// // ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse2 = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary2 = (fruit) => 
  (fruit === `maçã`) ? `Essa fruta é vermelha` 
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar sua vida e a da pessoa que lerá seu código
// no futuro!

console.log(checkIfElse2('maçã'));
console.log(checkTernary2('maçã'));