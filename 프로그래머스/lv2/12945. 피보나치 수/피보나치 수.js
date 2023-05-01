
// 일일히 하나씩 구할때 유리 
function* genorator(n) {
    let x = 1;
    let y = 0;
    let xPlusY = 1;
    for (let i = 1; i < n; ++i) {
        xPlusY = x + y;
        y = x % 1234567;
        x = xPlusY %1234567;
        yield xPlusY;
    }
}

function solution(n) {
    if (n < 2) return 0;
    const gen = genorator(n);
    let result = 0;
    for (let i of gen) {
        result = i
    }
    return result % 1234567
}