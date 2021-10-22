var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var N = Number(input);
var i = 0;


while(true){
    var sum = Math.floor(input/10) + (input%10);    // 왜 N이 아니고 input을 써야 하나
    input = (input%10)*10 + (sum%10);
    i++;
    if(N===input) break;
    
}

console.log(i);

