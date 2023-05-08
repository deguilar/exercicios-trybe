// 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = 'Sim';

for (let valor in info) {
  console.log(info[valor]);
}