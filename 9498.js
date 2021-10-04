var fs = require('fs');
var input = fs.readFileSync('data.txt').toString().split(" ");

var a = parseInt(input[0]);

if(a>=90){
    console.log('A');
}
else if(90>a && a>=80){     // 90>a>=80 이렇게 쓰면 안되고, 90>a && a>=80 이렇게 써주어야 함.
    console.log('B');
}
else if(80>a&&a>=70){
    console.log('C');
}
else if(70>a&&a>=60){
    console.log('D');
}
else{
    console.log('F');
}