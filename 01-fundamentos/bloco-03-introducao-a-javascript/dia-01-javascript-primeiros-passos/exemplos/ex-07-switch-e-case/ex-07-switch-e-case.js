/* 1 - Crie uma variável para armazenar o status da pessoa candidata em um processo seletivo. As possibilidades são: 'aprovada', 'lista' ou 'reprovada'.
2 - Crie uma estrutura condicional com o switch/case para imprimir as seguintes mensagens:
- Caso 'aprovada', imprima “Parabéns, você está no grupo de pessoas aprovadas!”.
- Caso 'lista', imprima “Você está na nossa lista de espera.”.
- Caso 'reprovada', imprima “Infelizmente, você reprovou.”.
- Caso default, imprima a mensagem “Informação incorreta.”.
 */

const candidato = 'aprovada';

switch (candidato) {
    case 'aprovada':
        message = 'Parabéns, você está no grupo de pessoas aprovadas!';
        break;
    case 'lista':
        message = 'Você está na nossa lista de espera.';
        break;
    case 'reprovada':
        message = 'Infelizmente você reprovou.';
        break;
    default:
        message = 'Informação incorreta.'
}

console.log(message);