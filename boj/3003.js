const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const set = input.split(' ');
const correction = [1, 1, 2, 2, 2, 8]; // [king, queen, rock, bishop, knight, pawn]

console.log(set.map((val,idx) => correction[idx] - val).join(' '));
