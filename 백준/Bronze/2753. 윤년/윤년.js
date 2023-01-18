const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

if (input[0] % 4 === 0 && input[0] % 100) {
    console.log(1);   
}
else if (input[0] % 400 === 0){
    console.log(1);
}
else {
    console.log(0);
}