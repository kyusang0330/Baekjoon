var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var a = parseInt(input[0]);

if (a%4 ==0 && a%100 !=0){
    console.log('1');
}
else if(a%400==0){
    console.log('1');
}
else{
    console.log('0');
}