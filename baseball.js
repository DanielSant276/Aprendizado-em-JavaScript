// baseball vamos lá!
var teamA = 0;
var teamB = 0;
var inning = 1;
//var pitching;
var strike = 0;
var out = 0;
var ball = 0;
var rigthPitching = false;
var battingTry = false;
var rightBatting = false;
var base1 = false;
var base2 = false;
var base3 = false;
var outfield = false;
var infield = false;
var fault = false;
var homerun = false;

while (out < 3){
//gerador de número 1-100
function randomGenerator (){
    return Math.floor(Math.random() * 101);
}

//escolha do quadrante arremessado (funcionando até então)
var quadrant = randomRange (1, 9);
function randomRange (min, max) {
    return Math.floor (Math.random () * (max - min + 1)) + min;
}

//escolha do arremesso (funcionando até então)
var pitchingChoose = pitchingChoosefunc ();
function pitchingChoosefunc () {
    var random = randomGenerator();
    if (randomGenerator () < 11) {
        return "Sinker";
    }
    else if (random < 31) {
        return "Curva";
    }
    else {
        return"Rápida";
    }
    
}

//essa função valida se o arremesso é strike ou ball e se o batedor rebate tanto a strike como a ball (funcionando até então)
var battingInPlate = battingInPlatefunc ();
function battingInPlatefunc () {
    var randomPitch = randomGenerator();
    var randomBatt = randomGenerator();
    var randomHit = randomGenerator();
    if (pitchingChoose == "Rápida") {
        if (quadrant == 1 || quadrant == 3 || quadrant == 7 || quadrant == 9){
            if (randomPitch > 40) {
                rigthPitching = true;
                if (randomBatt > 40) {
                    battingTry = true;
                    if (randomHit > 60) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else {
                    strike++;
                }
            }
            else{
                if (randomBatt > 40) {
                    battingTry = true;
                    if (randomHit > 60) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else{
                    ball++;
                }
            }
        }
        else if (quadrant == 2 || quadrant == 4 || quadrant == 6 || quadrant == 8){
            if (randomPitch > 20) {
                rigthPitching = true;
                if (randomBatt > 20) {
                    battingTry = true;
                    if (randomHit > 40) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else {
                    strike++;
                }
            }
            else{
                if (randomBatt > 20) {
                    battingTry = true;
                    if (randomHit > 40) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else{
                    ball++;
                }
            }
        }
        else {
            rigthPitching = true;
            battingTry = true
            if (randomHit > 10) {
                rightBatting = true;
            }
            else {
                strike++;
            }
        }
        return "direto";
    }
    else if (pitchingChoose == "Curva"){
        if (quadrant == 1 || quadrant == 7){
            if (randomPitch > 80) {
                rigthPitching = true;
                if (randomBatt > 90){
                    battingTry = true;
                    if (randomHit > 95) {
                        rightBatting = true;
                    }
                    else {
                        strike++
                    }
                }
                else {
                    strike++;
                }
            }
            else{
                if (randomBatt > 90){
                    battingTry = true;
                    if (randomHit > 95) {
                        rightBatting = true;
                    }
                    else {
                        strike++
                    }
                }
                else{
                    ball++;
                }
            }
        }
        else if (quadrant == 2 || quadrant == 3 || quadrant == 8 || quadrant == 9){
            if (randomPitch > 20) {
                rigthPitching = true;
                if (randomBatt > 40) {
                    battingTry = true;
                    if (randomHit > 60) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else {
                    strike++;
                }
            }
            else{
                if (randomBatt > 40) {
                    battingTry = true;
                    if (randomHit > 60) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else{
                    ball++;
                }
            }
        }
        else if (quadrant == 4) {
            if (randomPitch > 30){
                rigthPitching = true;
                if (randomBatt > 85) {
                    battingTry = true;
                    if (randomHit > 90) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else {
                    strike++;
                }
            }
            else{
                if (randomBatt > 85) {
                    battingTry = true;
                    if (randomHit > 90) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else{
                    ball++;
                }
            }
        }
        else {
            rigthPitching = true;
            if (randomBatt > 10) {
                battingTry = true;
                if (randomHit > 20) {
                    rightBatting = true;
                }
                else {
                    strike++;
                }
            }
            else {
                strike++;
            }
        }    
        return "curvou";
    }
    else {
        if (quadrant == 1 || quadrant == 3){
            if (randomPitch > 40) {
                rigthPitching = true;
                if (randomBatt > 60) {
                    battingTry = true;
                    if (randomHit > 50) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else {
                    strike++;
                }
            }
            else{
                if (randomBatt > 60) {
                    battingTry = true;
                    if (randomHit > 50) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else{
                    ball++;
                }
            }
        }
        else if (quadrant == 4 || quadrant == 6){
            if (randomPitch > 50){
                rigthPitching = true;
                if (randomBatt > 50) {
                    battingTry = true;
                    if (randomHit > 60) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else {
                    strike++;
                }
            }
            else{
                if (randomBatt > 50) {
                    battingTry = true;
                    if (randomHit > 60) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else{
                    ball++;
                }
            }
        }
        else if (quadrant == 7 || quadrant == 8 || quadrant == 9){
            if (randomBatt > 95) {
                battingTry = true;
                if (randomHit > 95) {
                    rightBatting = true;
                }
                else {
                    strike++;
                }
            }
            else {
                ball++;
            }
        }
        else if (quadrant == 5) {
            if (randomPitch > 45) {
                rigthPitching = true;
                if (randomBatt > 60) {
                    battingTry = true;
                    if (randomHitt > 70) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else {
                    strike++;
                }
            }
            else{
                if (randomBatt > 60) {
                    battingTry = true;
                    if (randomHit > 70) {
                        rightBatting = true;
                    }
                    else {
                        strike++;
                    }
                }
                else {
                    ball++;
                }
            }
        }
        else {
            rigthPitching = true;
            if (randomBatt > 30) {
                battingTry = true;
                if (randomHit > 50) {
                    rightBatting = true;
                }
                else {
                    strike++;
                }
            }
            else {
                strike++;
            }
        }
        return "caiu";
    }
}

//validação da rebatida (nota mental, possivelmente retirar depois) (certo até então)
var battingTrue = battingTruefunc ();
function battingTruefunc () {
    var random = randomGenerator ();
    if (rightBatting == true) {
        if (random == 100) {
            homerun = true;
            ball = 0;
            strike = 0;
            return "Homerun";
        }
        else if (random > 49 ) {
            infield = true;
            ball = 0;
            strike = 0;
            return "Infield";
        }
        else if (random > 14) {
            outfield = true;
            ball = 0;
            strike = 0;
            return "Outfield";
        }
        else {
            fault = true;
            return "Fault";
        }
    }
    else {
        return "Não acertou";
    }
}

//básico da pontuação só para eu ter uma ideia
var scoreBatting = scoreBattingfunc ();
function scoreBattingfunc () {
    var outRandom = randomGenerator ();
    if (homerun == true) {
        if (base1 == true) {
            teamA++;
            base1 = false;
        }
        if (base2 == true){
            teamA++;
            base2 = false;
        }
        if (base3 == true){
            teamA++;
            base3 = false;
        }
        teamA++
    }
    else if (fault == true) {
        if (strike < 1) {
            strike++
        }
    }
    else if (infield == true) {
        if (outRandom > 30) {
            out++;
        }
        else {
            if (base1 == false && base2 == false && base3 == false) {
                base1 = true;
                base2 = false;
                base3 = false;
            }
            else if (base1 == true  && base2 == false && base3 == false) {
                base1 = true;
                base2 = true;
                base3 = false;
            }
            else if (base1 == true && base2 == true && base3 == false) {
                base1 = true;
                base2 = true;
                base3 = true;
            }
            else if (base1 == true && base2 == true && base3 == true) {
                base1 = true;
                base2 = true;
                base3 = true;
                teamA++;
            }
            else if (base1 == true && base2 == false && base3 == true) {
                base1 = true;
                base2 = true;
                base3 = false;
                teamA++;
            }
            else if (base1 == false && base2 == true && base3 == false) {
                base1 = true;
                base2 = false;
                base3 = true;
            }
            else if (base1 == false && base2 == false && base3 == true) {
                base1 = true;
                base2 = false;
                base3 = false;
                teamA++;
            }
            else if (base1 == false && base2 == true && base3 == true) {
                base1 = true;
                base2 = false;
                base3 = true;
                teamA++;
            }
        }
    }
    else if (outfield == true) {
        if (outRandom > 50) {
            out++;
        }
        else {
            if (base1 == false && base2 == false && base3 == false) {
                base1 = false;
                base2 = true;
                base3 = false;
            }
            else if (base1 == true  && base2 == false && base3 == false) {
                base1 = false;
                base2 = true;
                base3 = true;
            }
            else if (base1 == true && base2 == true && base3 == false) {
                base1 = false;
                base2 = true;
                base3 = true;
                teamA++;
            }
            else if (base1 == true && base2 == true && base3 == true) {
                base1 = false;
                base2 = true;
                base3 = true;
                teamA + 2;
            }
            else if (base1 == true && base2 == false && base3 == true) {
                base1 = false;
                base2 = true;
                base3 = true;
                teamA++;
            }
            else if (base1 == false && base2 == true && base3 == false) {
                base1 = false;
                base2 = true;
                base3 = false;
                teamA++;
            }
            else if (base1 == false && base2 == false && base3 == true) {
                base1 = false;
                base2 = true;
                base3 = false;
                teamA++;
            }
            else if (base1 == false && base2 == true && base3 == true) {
                base1 = false;
                base2 = true;
                base3 = false;
                teamA++;
            }
        }
    }
}

//fiz a pontuação do placar mas estou confuso se é isso mesmo
var nãoSeiComoVouFazerIsso = prototypefunc ();
function prototypefunc () {
    if (strike == 3) {
        out++
    }
    if (ball > 3) {
        if (base1 == false && base2 == false && base3 == false) {
            base1 = true;
            base2 = false;
            base3 = false;
        }
        else if (base1 == true  && base2 == false && base3 == false) {
            base1 = true;
            base2 = true;
            base3 = false;
        }
        else if (base1 == true && base2 == true && base3 == false) {
            base1 = true;
            base2 = true;
            base3 = true;
        }
        else if (base1 == true && base2 == true && base3 == true) {
            base1 = true;
            base2 = true;
            base3 = true;
            teamA++;
        }
        else if (base1 == true && base2 == false && base3 == true) {
            base1 = true;
            base2 = true;
            base3 = false;
            teamA++;
        }
        else if (base1 == false && base2 == true && base3 == false) {
            base1 = true;
            base2 = false;
            base3 = true;
        }
        else if (base1 == false && base2 == false && base3 == true) {
            base1 = true;
            base2 = false;
            base3 = false;
            teamA++;
        }
        else if (base1 == false && base2 == true && base3 == true) {
            base1 = true;
            base2 = false;
            base3 = true;
            teamA++;
        }
    }
}

var change = () => {
    if (out == 3) {
        return "Inversão de ataque e defesa"
    }
}

console.log (pitchingChoose);
console.log ("acertou o plate", rigthPitching);
console.log ("tentativa:", battingTry);
console.log ("acertou", rightBatting);
console.log ("ball:", ball);
// console.log ("tentativa de bater", battingTry);
console.log ("strike:", strike);
console.log (battingTrue);
console.log ("base 1:", base1);
console.log ("base 2:", base2);
console.log ("base 3:", base3);
console.log ("out:", out);
console.log ("pontuação:", teamA);
console.log (change());
console.log ("");
rigthPitching = false;
battingTry = false;
rightBatting = false;
outfield = false;
infield = false;
fault = false;
homerun = false;
}