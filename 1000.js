var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split("\n");

function get_numbers(A,B){
    return A + B;
}

console.log(get_numbers());