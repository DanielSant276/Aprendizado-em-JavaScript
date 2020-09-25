// calculador de segundo
var tempo = 16000;
var t2 = tempo;
var segundos = t2 % 60;
var minutos = t2 / 60;
var horas = minutos / 60;
var dias = horas / 24;
var meses = dias / 30;
var anos = meses / 12;

var resultado2 = ("Ou então, " + Math.trunc(tempo) + " segundos são: " + Math.trunc(anos) + " anos " + Math.trunc(meses) + " meses " + Math.trunc(dias) + " dias " + Math.trunc(horas) + " horas " + Math.trunc(minutos) + " minutos " + Math.trunc(tempo) + " segundos.");

 
while (minutos >= 60){
    minutos -= 60;
}

while (horas >= 24) {
    horas -= 24;
}

while (dias >= 30) {
    dias -= 30;
}

while (meses >= 12) {
    meses -= 12;
}

var resultado1 = (Math.trunc(tempo) + " segundos são: " + Math.trunc(anos) + " anos " + Math.trunc(meses) + " meses " + Math.trunc(dias) + " dias " + Math.trunc(horas) + " horas " + Math.trunc(minutos) + " minutos " + Math.trunc(segundos) + " segundos.");

console.log(resultado1);
console.log(resultado2);