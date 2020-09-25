/* array invertida (apenas colocar .reverse() no final da array) .split("").reverse().join("") faz com que uma string fique invertida,
a baixo está invertido todas as strings como também a array */

var nomes = ["Daniel", "Letícia", "Rosimeri", "Irani", "Glória", "Isabel", "Lucas L.", "Ayrton", "Caio"];

for (i = 0; nomes.length > i; i++){
    nomes [i] = nomes[i].split("").reverse().join("");    
}

nomes.reverse();

console.log(nomes);