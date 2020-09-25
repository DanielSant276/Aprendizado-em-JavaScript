var product = multiply([[1,2],[3,4],[5,6,7]]);

function multiply(array) {
    var product = 1;

    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++){
            product *= array[i][j];
        }
    }
    return product;
}

console.log(product);