var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var A = Number(input[0]);
var num = '';

for(var i = 1;i<=A;i++){
    num += i + '\n';
}

console.log(num);
