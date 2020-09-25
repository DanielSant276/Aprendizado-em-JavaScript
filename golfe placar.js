var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Dobule Bogey", "Go Home"]
function golfscore(par, strokes) {
    if ( strokes === 1 ){
        return names [0];
    }
    else if (strokes <= par - 2) {
        return names [1];
    }
    else if (strokes = par - 1){
        return names [2];
    }
    else if (strokes === par){
        return names [3];
    }
    else if (strokes === par + 1){
        return names [4];
    }
    else if (strokes === par + 2){
        return names [5];
    }
    else {
        return names [6];
    }
}

console.log(golfscore(5,4));