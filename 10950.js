var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split("\n");


var T = Number(input[0]);

for(var i=1;i<=T;i++){
    var A = Number(input[i].split(" ")[0]);
    var B = Number(input[i].split(" ")[1]);
    console.log(A+B);
}

/*
for (var i=1;i<=input[0];i++){
    var numbers = input[i].split(' ');

    console.log(Number(numbers[0])+Number(numbers[1]));
}
*/