// 12 - Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = [0]

for (let index = 1; index < array.length; index += 1) {
    if(array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

console.log(maiorPalavra);