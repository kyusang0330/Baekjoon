var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");

var i = 0;
var result = '';

while(i<=input.length - 1){
    var A = Number(input[i].split(' ')[0]);
    var B = Number(input[i].split(' ')[1]);
    if(A!==0 || B!==0){                                // 0 0 부분의 결과 값을 출력하게하지 않는 부분
        result += (A+B) + '\n';
    }
    else{
        break;
    }
    i++
    
}
console.log(result);