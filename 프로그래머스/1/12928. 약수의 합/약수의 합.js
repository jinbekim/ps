/**
*   @param {number} n
*   @return number
*/
function solution(n) {
    let i = 1;
    let answer = 0;
    while (i**2 <= n) {
        if (n % i === 0) {
            answer += n/i === i ? i : n/i + i;
        }
        i++;
    }
    return answer;
}