/* 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais) */

let peca = 'RAinhA';
let pecaMinusculoa = peca.toLowerCase()

let movimento = '';

switch (pecaMinusculoa) {
    case 'bispo':
        movimento = 'Anda em diagonais';
        break;
    case 'torre':
        movimento = 'Anda na horizontal ou na vertical';
        break;
    case 'rainha':
        movimento = 'Pode andar em todas as direções';
        break;
    case 'rei':
        movimento = 'Pode andar em todas as direções';
    case 'cavalo':
        movimento = 'Anda em L';
        break;
    case 'peao':
        movimento = 'Só anda na vertical';
        break;
    default:
        movimento = 'Peça inválida';
}

console.log(movimento);