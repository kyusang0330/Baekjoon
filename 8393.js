var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");

var n = Number(input[0]);
var sum = 0;
for(var i=1;i<=n;i++){
    sum+=i;
}
console.log(sum);  


/*
var n = Number(input[0]);
var sum = 0;
for(var i=1;i<=n;sum+=i++);
console.log(sum);  
*/