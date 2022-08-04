// https://school.programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

function solution(s) {
  let idx = 0;
  return [...s].map((val) => {
    if (val === ' ') {
      idx = 0;
      return val;
    }
    idx += 1;
    if (idx % 2 === 0) return val.toLowerCase();
    else return val.toUpperCase();
  }).join('')
}
