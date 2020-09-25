var f = 5;

var fat = (n) => {
    if (n === 1 || n === 0){
        return 1;
    }
    else {
        return n * fat (n - 1);
    }
}

console.log (fat (f));