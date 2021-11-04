var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");

var N = Number(input[0]);
var numbers = input[1].split(' ').map(x=> Number(x));

var max = numbers[0];
var min = numbers[0];

for(var i = 1;i<N;i++){
    if(max<numbers[i]){
        max = numbers[i]
    }
    if(min>numbers[i]){
        min = numbers[i]
    }
}

console.log(`${min} ${max}`);
