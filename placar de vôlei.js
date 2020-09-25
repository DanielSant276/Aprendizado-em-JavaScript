// while (((teamA <= 2 && teamB <= 2) || ((teamA == (teamB - 1) && teamA >=2) || (teamB == (teamA - 1) && teamB >= 2))) {
// fazer um jogo de vôlei, na qual o time a tem 40% de chance para pontuar
var TeamA = 0;
var TeamB = 0;

while ((TeamA <= 2 && TeamB <= 2) || ((TeamA > (TeamB - 2)) && (TeamB > (TeamA - 2)))) {
    var prob = (Math.floor (Math.random () * 101));
    if (prob < 41) {
        TeamA++;
    }
    else {
        TeamB++;
    }
}
var resultado = () => {
    if (TeamA > TeamB) {
        return "TeamA é o vencedor"
    }
    else {
        return "TeamB é o vencedor"
    }
}

console.log (TeamA, "-", TeamB);
console.log (resultado ());