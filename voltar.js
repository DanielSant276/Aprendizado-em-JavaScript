/* identificador de data
.split("") transforma uma string em uma array com todos os elementos da string
.splice(casa da arrays, quantos elementos da array serão retirados, "valor a ser colocado")
.join("") mescla todos os valores da array em uma string
.substring(valor inicial, valor inicial a ser cortado) elimina valores de uma determinada string
*/
var data = "01597305";

var separação = data.split("");
separação.splice(2, 0, "/");
separação.splice(5, 0, "/");
var respostaFinal = separação.join("");

var dia = "dia: " + data.substring(0, 2)
var mes = "mês: " + data.substring(2, 4)
var ano = "ano: " + data.substring(4, 8)

console.log(respostaFinal)
console.log(dia);
console.log(mes);
console.log(ano);