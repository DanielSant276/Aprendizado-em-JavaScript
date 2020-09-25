var contacts = [
    {
        "firstName": "Akira",
        "LastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "LastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "LastName": "Holmes",
        "number": "048735643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "LastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts [i][prop];
            //outra forma é escreve return contacts [i][prop] || "Propriedade não existente"; assim, o or substitui a utilizaçaõ do else.
        }
        else {
            return "Propriedade não existente";
        }
    }
    return "Nome não encontrado"
}
var data = lookUpProfile("Akira", "likes");

console.log (data);