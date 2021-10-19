var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");

var i = 0;
var result = '';

while(i<=input.length - 1){
    var A = Number(input[i].split(' ')[0]);
    var B = Number(input[i].split(' ')[1]);
    result += (A+B) + '\n';

    i++;

}

console.log(result);