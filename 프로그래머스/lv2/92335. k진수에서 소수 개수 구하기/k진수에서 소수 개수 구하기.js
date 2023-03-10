function isPrime(n) {
    const sqrt = Math.sqrt(n);
    if (Number.isNaN(n) || n < 2)
        return false;
    for( let i = 2; i <= sqrt; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    let answer = 0;
    const kBasedNum = n.toString(k);
    const candidate = kBasedNum.split('0');

    candidate.forEach(num => {
        const decimal = parseInt(num, 10);
        if(isPrime(decimal)) answer += 1;
    });
    
    return answer;
}