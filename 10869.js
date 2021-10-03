var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var A = parseInt(input[0]);
var B = parseInt(input[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parseInt(A/B));    // 문자열을 정수로 바꾸어 주는 함수 praseInt()를 사용해야 한다.
console.log(A%B);
