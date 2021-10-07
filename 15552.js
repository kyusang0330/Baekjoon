var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");
/*
var T = Number(input[0]);

for(var i=1;i<T;i++){
    var A = Number(input[i].split(' ')[0]);
    var B = Number(input[i].split(' ')[1]);

    console.log(A+B);
}
*/

var T = Number(input[0]);
var answer ='';

for (var i=1;i<=T;i++){
    var A = input[i].split(' ');
    answer += Number(A[0])+Number(A[1]) + '\n';  // 1초의 시간제한이 있는 문제라 기존의 10950번의 코드처럼 풀 수 없다
                                                  // 이 코드처럼 답의 문자열을 만들어 놓고 더한 값을 한번에 출력해야 맞을 수 있다.
}
console.log(answer);