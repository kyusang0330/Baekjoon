var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var H = parseInt(input[0]);
var M = parseInt(input[1]);

M-=45;

if(M<0){
    M+=60;
    H--;
    if(H===-1){
        H=23;
    }
}

console.log(H+" "+M);