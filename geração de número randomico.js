// Geração de número randómico, no caso com range de 5 a 15

var random = randomRange (5, 15)
function randomRange (min, max) {
    return Math.floor (Math.random () * (max - min + 1)) + min;
}
console.log(random);