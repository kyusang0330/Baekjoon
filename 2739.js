var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var N = Number(input[0]);

for(var i = 1;i<10;i++){
    
    console.log(N+' * '+ i+ ' = ' + N*i);
}

