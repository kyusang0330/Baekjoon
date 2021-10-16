var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");

var inputs = [];
inputs = input[0].split(' ');

var N = Number(inputs[0]);
var X = Number(inputs[1]);
var A = [];
A = input[1].split(' ');
result = '';
for(var i = 0;i<N;i++){
   
    if(X>Number(A[i])){
        result += A[i] + ' ';
    }
}
console.log(result);
/*
if(X>A){
    var A = '';
    for(var i = 0;i<N;i++){
        console.log(A);
    }
}*/
