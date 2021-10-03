var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");

var A = parseInt(input[0]);
var B = parseInt(input[1]);

var OneNum = B % 10;
var tenNum = Math.floor((B%100)/10);  // Math.floor 소수점이 있을 때 1.1 -> 1 ,    1.9 -> 1
var hunredNum = Math.floor(B/100);    

console.log(A*OneNum);
console.log(A*tenNum);
console.log(A*hunredNum);
console.log(A*B);
