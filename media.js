// média de diversos valores
var numeros = [3, 6, 9, 3];
var total = 0;

for (i = 0; numeros.length > i; i++) {
    total += numeros[i];
}

var media = () => {
    return parseInt(total / numeros.length);
}

var resto = () => {
    return total % numeros.length;
}
console.log ("Média", media(), "com resto", resto ());
//.toFixed transforma um número decimal em um número inteiro mas como um valor de string 
//console.log (media.toFixed ());


