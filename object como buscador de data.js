//Object como buscador de data
function dicionário (val) {
    var result;
    var busca = {
        "alpha": "Alagoa",
        "beta": "Bocaina",
        "charlie": "Curitiba",
        "delta": "Divinópolis",
        "echo": "Esperantina",
        "foxtrot": "Florianópolis"
    };
    result = busca[val];
    return result;
}

console.log(dicionário("charlie"));