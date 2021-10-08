var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var A = Number(input[0]);
var num = '';

for(var i = A; i>=1;i--){    // 조건 첫번재와 두번째를 바꿔주고 ++를 --로 바꿔주면 역으로 출력된다.
    num += i + '\n';
}

console.log(num);
