var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var N = Number(input[0]);

for(var i = 0;i<N;i++){
    var A = '';    
    for(var j = N-1;j>=0;j--){
        A += j<=i ? '*' : ' ';
    }

    console.log(A);
}
