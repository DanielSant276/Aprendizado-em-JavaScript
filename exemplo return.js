var resposta = "m";
// return serve para parar a função e informar aquilo ignorando todo o resto
var palavra = (resultado) => {
    if(resultado === "carro"){
        return "ferrari";
    }
    else if (resultado === "caminhão"){
        return "brum brum";
    }
    else if (resultado === "moto"){
        return "assalto"
    }
    else{
        return "se ferro otario"
    }
}

console.log (palavra (resposta));