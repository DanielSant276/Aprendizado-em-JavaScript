/* verificador de maior número, a variável "maior" será armazenada como o primeiro dígito o for segue normal como já acostumado.
Dentro dele o if verifica se o numero[i] - no caso o segundo número da lista - é maior que o primeiro, caso for ele substitui
o valor de maior por ele 
*/

var numeros = [3, 7, 2, 1];
var maior = numeros[0];

for (i = 1; numeros.length > i; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log ("o maior número é ", maior)