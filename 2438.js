var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");

var N = Number(input[0]);
var A = '';

for(var i=1;i<=N;i++){
    A += '*';
    
    console.log(A);
    
}

