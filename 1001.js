var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var A = parseInt(input[0]);  // parseInt()함수는 문자열 인자를 구문분석하여 특정 진수의 정수를 반환한다.
var B = parseInt(input[1]);

console.log(A-B);