var idades = [15, 34, 42, 63, 39, 28, 5, 8, 11, 13];
var maioridade = 17;
var adultos = 0;

for (i = 0; idades.length > i; i++) {
    if (idades[i] > maioridade){
        adultos++;
    }
}

console.log ("Das", idades.length, "pessoas,", adultos, "são maiores de", maioridade, "anos");